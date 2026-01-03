"use client";

import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { techStacks } from "@/dto/tech-stach.dto";
import { MoveLeft } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function TechStack() {
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
              Tech Stack
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
        {Object.entries(techStacks).map(([key, val], index) => (
          <div className="flex flex-col gap-6" key={`${key}-${index}`}>
            <h1 className="font-semibold text-lg">{key}</h1>
            <div className="flex flex-wrap gap-3">
              {val.map((stack) => (
                <Badge className="md:min-w-24 py-1.5 px-4" key={`${key}-${stack}`}>
                  {stack}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
