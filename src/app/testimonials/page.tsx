"use client";

import { Switch } from "@/components/ui/switch";
import { testimonials } from "@/dto/testimonials.dto";
import { MoveLeft, Quote } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Testimonials() {
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
              Testimonials
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
        {testimonials.map((val) => (
          <div className="border rounded-sm shadow-lg p-4">
            <Quote size={16} />
            <div className="space-y-8 p-4">
              <img
                src={val.imageURI}
                className="border-2 p-1 mx-auto w-20 rounded-full sm:hidden"
              />
              <p className="text-xs sm:text-sm leading-5 md:leading-6">
                {val.testimonial}
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={val.imageURI}
                  className="w-14 rounded-full border-2 p-1 hidden sm:block"
                />
                <div className="flex flex-col">
                  <h1 className="font-medium">{val.name}</h1>
                  <h1 className="text-xs sm:text-sm opacity-80 font-medium">{val.company}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
