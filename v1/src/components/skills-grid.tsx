import React from "react";
import { Layers, Plug, Zap, Brain, Bot, Monitor, Palette, Cloud } from "lucide-react";
import { skills } from "../dto/skills.dto";
import { BlurFade } from "./ui/blur-fade";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  layers: Layers,
  plug: Plug,
  zap: Zap,
  brain: Brain,
  bot: Bot,
  monitor: Monitor,
  palette: Palette,
  cloud: Cloud,
};

export function SkillsGrid() {
  return (
    <div className="skills-grid">
      {skills.map((skill, index) => {
        const IconComponent = iconMap[skill.icon] || Layers;
        return (
          <BlurFade key={skill.title} delay={index * 0.05} inView={true}>
            <div className="skill-card">
              <div className="skill-header">
                <div className="skill-icon">
                  <IconComponent className="size-5 stroke-[1.5]" />
                </div>
                <h3 className="skill-title">{skill.title}</h3>
              </div>
              <p className="skill-description">{skill.description}</p>
              <div className="skill-tags">
                {skill.items.map((item) => (
                  <span key={item} className="skill-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </BlurFade>
        );
      })}
    </div>
  );
}
