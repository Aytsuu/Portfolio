"use client";

import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { experiences } from "@/dto/experiences.dto";
import { projects } from "@/dto/projects.dto";
import { techStacks, techStacksHomePage } from "@/dto/tech-stach.dto";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronRight,
  CodeXml,
  LayoutDashboard,
  LinkIcon,
  MapPin,
  MoveUpRight,
  Rocket,
} from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
import { SectionWrapper } from "@/components/wrappers/section-wrapper";
import Link from "next/link";
import { div } from "motion/react-client";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = React.useState<string>("");
  const [mounted, setMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return (<div></div>)
  if (!theme) return;

  return (
    mounted && (
      <>
        {/* MOBILE VIEW */}
        <div className="flex lg:hidden py-4 flex-col gap-6">
          <div className="flex flex-row justify-end items-center px-4">
            <Switch
              checked={theme === "dark"}
              onCheckedChange={handleToggleTheme}
            />
          </div>
          {/* Personal Information & Title */}
          <div className="space-y-4 px-4">
            <div className="flex flex-col items-center">
              <h1 className="flex flex-row gap-2 text-base font-semibold items-center">
                Paolo Araneta
                <img
                  src={"/assets/icons/check-badge.svg"}
                  className="w-4 h-4"
                />
              </h1>
              <h1 className="text-sm">Software Engineer | Freelance</h1>
              <h1 className="flex flex-row gap-1 text-sm items-center">
                <MapPin size={14} />
                Cebu, Philippines
              </h1>
            </div>
            <img
              src={"https://picsum.photos/800/400"}
              className="w-full rounded-lg"
            />
          </div>

          {/* ABOUT */}
          <div className="px-4">
            <div
              className={`border rounded-lg p-3 space-y-4 ${
                theme === "dark" && "bg-[#0A0A0A]"
              }`}
            >
              <h1 className="flex flex-row gap-2 mt-1 items-center text-sm font-bold">
                <CodeXml size={16} />
                ABOUT
              </h1>
              <div className="space-y-3">
                <p className="text-sm leading-5">
                  I’m a full-stack software engineer with 3 years of experience
                  building web applications using JavaScript (TypeScript),
                  Python, and SQL. Solving real-world problems through
                  well-designed, scalable software solutions.
                </p>
                <p className="text-sm leading-5">
                  I enjoy taking ideas from concept to execution, whether that
                  means architecting backend logic, crafting clean APIs, or
                  delivering intuitive user experiences. I value clean,
                  maintainable code and continuously explore new technologies
                  and best practices to improve my work and stay current in a
                  fast-evolving tech landscape.
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4 px-4">
            <h1 className="flex flex-row items-center text-sm font-bold gap-2">
              <LinkIcon size={16} />
              SOCIAL LINKS
            </h1>
            <div className="grid grid-cols-2 gap-2">
              <a
                className={`border flex flex-row gap-2 rounded-sm items-center p-2 text-sm font-medium ${
                  theme === "dark" && "bg-[#0A0A0A]"
                }`}
                href="https://www.facebook.com/Mrshak8/"
              >
                <img
                  src={`/assets/icons/facebook-${
                    theme === "dark" ? "light" : "dark"
                  }.svg`}
                />
                Facebook
              </a>
              <a
                className={`border flex flex-row gap-2 rounded-sm items-center p-2 text-sm font-medium ${
                  theme === "dark" && "bg-[#0A0A0A]"
                }`}
                href="https://www.linkedin.com/in/paolo-araneta-65b332336/"
              >
                <img
                  src={`/assets/icons/linkedin-${
                    theme === "dark" ? "light" : "dark"
                  }.svg`}
                />
                LinkedIn
              </a>
              <a
                className={`border flex flex-row gap-2 rounded-sm items-center p-2 text-sm font-medium ${
                  theme === "dark" && "bg-[#0A0A0A]"
                }`}
                href="https://www.instagram.com/aytsuu_/"
              >
                <img
                  src={`/assets/icons/instagram-${
                    theme === "dark" ? "light" : "dark"
                  }.svg`}
                />
                Instagram
              </a>
              <a
                className={`border flex flex-row gap-2 rounded-sm items-center p-2 text-sm font-medium ${
                  theme === "dark" && "bg-[#0A0A0A]"
                }`}
                href="https://github.com/Aytsuu"
              >
                <img
                  src={`/assets/icons/github-${
                    theme === "dark" ? "light" : "dark"
                  }.svg`}
                />
                Github
              </a>
            </div>
          </div>

          {/* Experience */}
          <div
            className={`space-y-4 p-4 ${
              theme === "dark" ? "bg-[#0A0A0A]" : "bg-[#E9ECEF]"
            }`}
          >
            <div className="flex flex-row justify-between items-center">
              <h1 className="flex flex-row gap-2 items-center text-sm font-bold">
                <BriefcaseBusiness size={16} /> EXPERIENCE
              </h1>
              <a className="text-xs flex flex-row gap-2 items-center">
                View Resume
                <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="h-full">
              {experiences.map((exp, index) => (
                <div className="flex flex-row" key={`${exp.title}-${index}`}>
                  <div className="flex flex-col justify-center items-center">
                    <div
                      className={`w-3 h-3 rounded-full flex items-center justify-center border ${
                        theme === "dark" ? "border-white" : "border-black"
                      }`}
                    >
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${
                          theme === "dark" ? "bg-white" : "bg-black"
                        }`}
                      />
                    </div>
                    <div
                      className={`w-px h-full ${
                        theme === "dark" ? "bg-white" : "bg-black"
                      }`}
                    />
                  </div>
                  <div className="flex flex-col px-5 pb-5 gap-1">
                    <h1 className="font-semibold text-sm">{exp.title}</h1>
                    <h1 className="text-xs opacity-90">{exp.experiencedAt}</h1>
                    <Badge variant={"outline"} className="rounded-sm mt-1">
                      {exp.year}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4 px-4">
            <div className="flex flex-row justify-between items-center">
              <h1 className="flex flex-row gap-2 items-center text-sm font-bold">
                <Rocket size={16} /> TECH STACK
              </h1>
              <a
                className="text-xs flex flex-row gap-2 items-center"
                href="tech-stack"
              >
                View all
                <ChevronRight size={14} />
              </a>
            </div>
            <div className="flex flex-col gap-4">
              {Object.entries(techStacksHomePage).map(([key, val]) => (
                <div className="flex flex-col gap-3" key={key}>
                  <h1 className="font-medium text-sm">{key}</h1>
                  <div className="flex flex-wrap gap-2">
                    {val.map((stack) => (
                      <Badge key={`${key}-${stack}`}>{stack}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4 px-4 mt-4">
            <div className="flex flex-row justify-between items-center">
              <h1 className="flex flex-row items-center font-bold text-sm gap-2">
                <LayoutDashboard size={16} /> PROJECTS
              </h1>
              <a
                className="text-xs flex flex-row gap-2 items-center"
                href="projects"
              >
                View all
                <ChevronRight size={14} />
              </a>
            </div>
            <div className="flex flex-col gap-6">
              {projects.map((proj) => (
                <div className="flex flex-row gap-6" key={proj.name}>
                  <img
                    src={proj.imageURI}
                    className="w-40 h-20 rounded-sm hidden sm:block"
                  />
                  <div className="flex flex-col gap-2">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-row items-center gap-2 text-base font-semibold"
                      href={proj.link}
                    >
                      {proj.name}
                      <MoveUpRight size={14} />
                    </a>
                    <p className="text-sm font-light">{proj.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* WEB VIEW */}
        <div className="w-full mx-auto hidden lg:block lg:max-w-360 p-10 transition-colors">
          <div
            className={`fixed top-0 left-0 w-full h-20 p-10 mb-8 ${
              theme === "dark" ? "bg-black" : "bg-white"
            } z-10`}
          >
            <div className="mx-auto w-full lg:max-w-360 flex justify-end items-center h-full">
              <Switch
                checked={theme === "dark"}
                onCheckedChange={handleToggleTheme}
              />
            </div>
          </div>
          {/* MAIN CONTENT GRID */}
          <div className="flex flex-row gap-20">
            <div className="w-1/2">
              <div className="sticky top-21 flex flex-col justify-between h-[calc(100vh-160px)]">
                {/* Personal Information & Title */}
                <div className="flex flex-row gap-6 items-center">
                  <img
                    src={"https://picsum.photos/600/400"}
                    className="w-60 rounded-sm"
                  />
                  <div>
                    <h1 className="flex flex-row gap-2 text-2xl font-semibold items-center">
                      Paolo Araneta
                      <img
                        src={"/assets/icons/check-badge.svg"}
                        className="w-4 h-4"
                      />
                    </h1>
                    <h1 className="text-base">Software Engineer | Freelance</h1>
                    <h1 className="flex flex-row gap-1 items-center">
                      <MapPin size={14} />
                      Cebu, Philippines
                    </h1>
                    <p className="mt-4 font-light text-sm max-w-70">
                      I build accessible, pixel-perfect digital experiences for
                      the web.
                    </p>
                  </div>
                </div>

                {/* Navigation Menu */}
                <div className="flex flex-col gap-6">
                  {["About", "Tech Stack", "Projects"].map((menu) => (
                    <div
                      className="flex flex-row items-center gap-6"
                      key={menu}
                    >
                      <div
                        className={`h-1 rounded-full ${
                          theme === "dark" ? "bg-white" : "bg-black"
                        } ${
                          activeSection === menu.toLowerCase()
                            ? "w-26"
                            : "opacity-60 w-14"
                        }`}
                      />
                      <h1
                        className={`font-medium ${
                          activeSection == menu.toLowerCase()
                            ? ""
                            : "opacity-60"
                        }`}
                      >
                        {menu}
                      </h1>
                    </div>
                  ))}
                </div>

                {/* Experience */}
                <div className="flex flex-col gap-4">
                  <h1 className="flex font-medium flex-row gap-2 items-center">
                    <BriefcaseBusiness size={16} /> Experience
                  </h1>
                  <div className="h-full">
                    {experiences.map((exp, index) => (
                      <div
                        className="flex flex-row"
                        key={`${exp.title}-${index}`}
                      >
                        <div className="flex flex-col justify-center items-center">
                          <div
                            className={`w-4 h-4 rounded-full flex items-center justify-center border ${
                              theme === "dark" ? "border-white" : "border-black"
                            }`}
                          >
                            <div
                              className={`w-2 h-2 rounded-full ${
                                theme === "dark" ? "bg-white" : "bg-black"
                              }`}
                            />
                          </div>
                          <div
                            className={`w-px h-full ${
                              theme === "dark" ? "bg-white" : "bg-black"
                            }`}
                          />
                        </div>
                        <div className="flex flex-col px-5 pb-5 gap-2">
                          <h1 className="font-medium">{exp.title}</h1>
                          <h1 className="text-sm opacity-90">
                            {exp.experiencedAt}
                          </h1>
                          <Badge variant={"outline"} className="rounded-sm">
                            {exp.year}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex flex-row gap-6">
                  <a
                    type="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Aytsuu"
                  >
                    <img
                      src={`/assets/icons/github-${
                        theme === "dark" ? "light" : "dark"
                      }.svg`}
                    />
                  </a>
                  <a
                    type="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/aytsuu_/"
                  >
                    <img
                      src={`/assets/icons/instagram-${
                        theme === "dark" ? "light" : "dark"
                      }.svg`}
                    />
                  </a>
                  <a
                    type="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/Mrshak8/"
                  >
                    <img
                      src={`/assets/icons/facebook-${
                        theme === "dark" ? "light" : "dark"
                      }.svg`}
                    />
                  </a>
                  <a
                    type="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/paolo-araneta-65b332336/"
                  >
                    <img
                      src={`/assets/icons/linkedin-${
                        theme === "dark" ? "light" : "dark"
                      }.svg`}
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* SCROLLABLE SECTION */}
            <div className="w-1/2 flex flex-col pt-10 gap-16 z-5">
              {/* ABOUT */}
              <SectionWrapper id="about" setActiveSection={setActiveSection}>
                <div className="flex flex-col gap-4">
                  <p className="leading-7">
                    I’m a full-stack software engineer with 3 years of
                    experience building web applications using JavaScript
                    (TypeScript), Python, and SQL. Solving real-world problems
                    through well-designed, scalable software solutions.
                  </p>
                  <p className="leading-7">
                    I enjoy taking ideas from concept to execution, whether that
                    means architecting backend logic, crafting clean APIs, or
                    delivering intuitive user experiences. I value clean,
                    maintainable code and continuously explore new technologies
                    and best practices to improve my work and stay current in a
                    fast-evolving tech landscape.
                  </p>
                </div>
              </SectionWrapper>

              {/* TECH STACK */}
              <SectionWrapper
                id="tech stack"
                setActiveSection={setActiveSection}
              >
                <div className="flex flex-col gap-10">
                  {Object.entries(techStacksHomePage).map(
                    ([key, val], index) => (
                      <div
                        className="flex flex-col gap-6"
                        key={`${key}-${index}`}
                      >
                        <h1 className="font-medium">{key}</h1>
                        <div className="flex flex-wrap gap-3">
                          {val.map((stack) => (
                            <Badge
                              className="min-w-24 py-1.5 px-4"
                              key={`${key}-${stack}`}
                            >
                              {stack}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                  <Link
                    href="tech-stack"
                    className="flex font-medium flex-row items-center gap-2 mt-4"
                  >
                    View Tech Stack <MoveUpRight size={14} />
                  </Link>
                </div>
              </SectionWrapper>

              {/* PROJECTS */}
              <SectionWrapper id="projects" setActiveSection={setActiveSection}>
                <div className="flex flex-col gap-14">
                  {projects.map((proj) => (
                    <div className="flex flex-row gap-6" key={proj.name}>
                      <img src={proj.imageURI} className="w-50 rounded-sm" />
                      <div className="flex flex-col gap-2">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-row items-center gap-2 font-semibold"
                          href={proj.link}
                        >
                          {proj.name}
                          <MoveUpRight size={14} />
                        </a>
                        <p className="text-sm">{proj.description}</p>
                      </div>
                    </div>
                  ))}
                  <Link
                    href="projects"
                    className="flex font-medium flex-row items-center gap-2 mt-4"
                  >
                    View Projects Archive <MoveUpRight size={14} />
                  </Link>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </>
    )
  );
}
