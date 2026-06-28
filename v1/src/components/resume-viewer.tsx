import { useEffect, useRef, useState } from "react"

const MIN_VIEWER_WIDTH = 280
const MAX_PAPER_WIDTH = 920

interface ResumeViewerProps {
  src: string
  title: string
}

interface PdfDocumentProxy {
  destroy: () => Promise<void>
  getPage: (pageNumber: number) => Promise<{
    getViewport: (options: { scale: number }) => { width: number; height: number }
    render: (options: {
      canvasContext: CanvasRenderingContext2D
      transform: number[] | null
      viewport: { width: number; height: number }
    }) => { promise: Promise<void>; cancel: () => void }
  }>
  numPages: number
}

export function ResumeViewer({ src, title }: ResumeViewerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([])
  const [documentProxy, setDocumentProxy] = useState<PDFDocumentProxy | null>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [pageCount, setPageCount] = useState(0)
  const [status, setStatus] = useState<"loading" | "rendering" | "ready" | "error">("loading")
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    const element = containerRef.current

    if (!element) {
      return
    }

    const updateWidth = () => {
      const nextWidth = Math.max(MIN_VIEWER_WIDTH, Math.floor(element.clientWidth - 48))
      setContainerWidth((currentWidth) => {
        if (Math.abs(currentWidth - nextWidth) < 4) {
          return currentWidth
        }

        return nextWidth
      })
    }

    updateWidth()

    const observer = new ResizeObserver(() => {
      updateWidth()
    })

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    let cancelled = false
    let activeDocumentProxy: PdfDocumentProxy | null = null

    setStatus("loading")
    setErrorMessage("")
    setDocumentProxy(null)
    setPageCount(0)
    canvasRefs.current = []

    void Promise.all([
      import("pdfjs-dist"),
      import("pdfjs-dist/build/pdf.worker.min.mjs?url"),
    ])
      .then(async ([pdfjs, workerModule]) => {
        if (cancelled) {
          return
        }

        pdfjs.GlobalWorkerOptions.workerSrc = workerModule.default

        const loadingTask = pdfjs.getDocument({ url: src })
        const nextDocumentProxy = (await loadingTask.promise) as PdfDocumentProxy

        if (cancelled) {
          void nextDocumentProxy.destroy()
          return
        }

        activeDocumentProxy = nextDocumentProxy
        setDocumentProxy(nextDocumentProxy)
        setPageCount(nextDocumentProxy.numPages)
      })
      .catch((error: unknown) => {
        if (cancelled) {
          return
        }

        setStatus("error")
        setErrorMessage(
          error instanceof Error ? error.message : "The resume could not be loaded.",
        )
      })

    return () => {
      cancelled = true
      if (activeDocumentProxy) {
        void activeDocumentProxy.destroy()
      }
    }
  }, [src])

  useEffect(() => {
    if (!documentProxy || !containerWidth || pageCount === 0) {
      return
    }

    let cancelled = false
    const renderTasks: Array<{ cancel: () => void }> = []

    setStatus("rendering")

    const renderPages = async () => {
      try {
        for (let pageNumber = 1; pageNumber <= pageCount; pageNumber += 1) {
          const canvas = canvasRefs.current[pageNumber - 1]

          if (!canvas) {
            continue
          }

          const page = await documentProxy.getPage(pageNumber)

          if (cancelled) {
            return
          }

          const baseViewport = page.getViewport({ scale: 1 })
          const paperWidth = Math.min(containerWidth, MAX_PAPER_WIDTH)
          const scale = paperWidth / baseViewport.width
          const viewport = page.getViewport({ scale })
          const outputScale = window.devicePixelRatio || 1
          const context = canvas.getContext("2d")

          if (!context) {
            continue
          }

          canvas.width = Math.floor(viewport.width * outputScale)
          canvas.height = Math.floor(viewport.height * outputScale)
          canvas.style.width = `${Math.floor(viewport.width)}px`
          canvas.style.height = `${Math.floor(viewport.height)}px`

          const renderTask = page.render({
            canvasContext: context,
            transform: outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null,
            viewport,
          })

          renderTasks.push(renderTask)
          await renderTask.promise
        }

        if (!cancelled) {
          setStatus("ready")
        }
      } catch (error: unknown) {
        if (cancelled) {
          return
        }

        setStatus("error")
        setErrorMessage(
          error instanceof Error ? error.message : "The resume could not be rendered.",
        )
      }
    }

    void renderPages()

    return () => {
      cancelled = true
      renderTasks.forEach((renderTask) => {
        renderTask.cancel()
      })
    }
  }, [containerWidth, documentProxy, pageCount])

  return (
    <div ref={containerRef} className="resume-paper-viewer" aria-label={title}>
      {status !== "ready" && (
        <div className="resume-viewer-status" role={status === "error" ? "alert" : "status"}>
          <p>{status === "error" ? errorMessage : "Preparing resume pages..."}</p>
        </div>
      )}

      <div className="resume-paper-stack" aria-busy={status !== "ready"}>
        {Array.from({ length: pageCount }, (_, index) => (
          <figure key={`${src}-page-${index + 1}`} className="resume-paper-page">
            <canvas
              ref={(element) => {
                canvasRefs.current[index] = element
              }}
              aria-label={`${title} page ${index + 1}`}
            />
          </figure>
        ))}
      </div>
    </div>
  )
}
