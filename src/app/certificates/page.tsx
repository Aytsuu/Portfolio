"use client";

import { Switch } from "@/components/ui/switch";
import { certificates } from "@/dto/certificates.dto";
import { MoveLeft } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Certificates() {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="mx-auto w-full py-14 md:py-32 lg:max-w-4xl px-4 md:px-8">
      {/* HEADER */}
      <div
        className={`fixed top-0 left-0 w-full h-14 md:h-32 mb-8 px-4 md:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } z-10`}
      >
        <div className="mx-auto w-full lg:max-w-4xl flex items-center justify-between h-full">
          <div className="flex flex-col gap-2 md:gap-6 md:flex-row">
            <Link
              className={`flex flex-row text-sm font-medium items-center gap-3 transition-colors duration-300 ${
                theme === "dark"
                  ? "md:text-white/80 hover:text-white"
                  : "md:text-black/80 hover:text-black"
              }`}
              href="/"
            >
              <MoveLeft size={18} />
              Back to home
            </Link>
            <h1 className="text-2xl hidden md:block font-semibold">
              Certificates
            </h1>
          </div>
          <Switch
            checked={theme === "dark"}
            onCheckedChange={handleToggleTheme}
          />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="w-full flex flex-col gap-8">
        {certificates.map((cert) => (
          <div className="flex gap-6">
            <img src={cert.imageURI} className="w-17 md:w-20 shadow-lg" />
            <div className="flex flex-col gap-0.5">
              <h1 className="font-semibold md:text-lg">{cert.title}</h1>
              <h2 className="text-xs md:text-sm">{cert.subtitle}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
