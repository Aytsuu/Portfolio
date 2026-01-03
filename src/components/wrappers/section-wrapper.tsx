"use client";

import { useInView } from "motion/react";
import React from "react";

export const SectionWrapper = ({
  id,
  children,
  setActiveSection,
}: {
  id: string;
  children: React.ReactNode;
  setActiveSection: (id: string) => void;
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 1 })

  React.useEffect(() => {
    if(isInView) {
      setActiveSection(id)
    }
  }, [isInView, ref, setActiveSection])

  return (
    <section id={id} ref={ref}>
      {children}
    </section>
  )
};
