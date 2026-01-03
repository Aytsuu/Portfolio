"use client";

import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { projects } from "@/dto/projects.dto";
import { MoveLeft, MoveUpRight } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Projects() {
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
              Projects Archive
            </h1>
          </div>
          <Switch
            checked={theme === "dark"}
            onCheckedChange={handleToggleTheme}
          />
        </div>
      </div>
      
      {/* MAIN CONTENT */}
      <div className="flex flex-col gap-14">
        {projects(theme ?? '').map((proj) => (
          <div className="flex flex-col md:flex-row gap-6" key={proj.name}>
            <img
              src={proj.imageURI}
              className="w-50 hidden md:block rounded-sm"
            />
            <div className="flex flex-col gap-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row text-lg items-center gap-2 font-semibold"
                href={proj.link}
              >
                {proj.name}
                <MoveUpRight size={14} />
              </a>
              <p className="text-sm">{proj.description}</p>
              <div className="flex flex-wrap gap-2">
                {proj.techStack.map((stack) => (
                  <Badge key={`${proj.name}-${stack}`}>{stack}</Badge>
                ))}
              </div>
            </div>
            <img src={proj.imageURI} className="w-full md:hidden rounded-sm" />
          </div>
        ))}
      </div>
    </div>
  );
}
