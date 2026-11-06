import { FiCode, FiLayout, FiServer, FiDatabase, FiTool, FiLayers } from "react-icons/fi";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiSpringboot,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiJavascript,
  SiHtml5,
  SiC,
  SiXampp,
} from "react-icons/si";
import { FaJava, FaCss3Alt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { Reveal, Section, SectionHeading, SpotlightCard } from "./ui";
import { skillGroups } from "../data/profile";

const groupIcons = {
  code: FiCode,
  layout: FiLayout,
  server: FiServer,
  database: FiDatabase,
  tool: FiTool,
  layers: FiLayers,
};

const logos = [
  { name: "Java", icon: FaJava, color: "#f89820" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6db33f" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "Python", icon: SiPython, color: "#ffd43b" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
  { name: "MySQL", icon: SiMysql, color: "#4479a1" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Vite", icon: SiVite, color: "#a78bfa" },
  { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572b6" },
  { name: "C", icon: SiC, color: "#a8b9cc" },
  { name: "Git", icon: SiGit, color: "#f05032" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "VS Code", icon: VscVscode, color: "#22a6f2" },
  { name: "XAMPP", icon: SiXampp, color: "#fb7a24" },
];

const Skills = () => (
  <Section id="skills">
    <SectionHeading
      index="03"
      eyebrow="Keahlian Teknis"
      title={
        <>
          Tech stack yang saya <span className="text-gradient">gunakan setiap hari</span>
        </>
      }
      description="Dari bahasa pemrograman hingga tools kolaborasi — fondasi untuk membangun aplikasi web yang scalable dan mudah dipelihara."
    />

    <Reveal className="mask-fade-x relative -mx-5 mb-14 overflow-hidden sm:mx-0">
      <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
        {[...logos, ...logos].map((l, i) => (
          <div
            key={`${l.name}-${i}`}
            className="flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3"
            aria-hidden={i >= logos.length}
          >
            <l.icon size={20} style={{ color: l.color }} />
            <span className="whitespace-nowrap text-sm text-slate-300">{l.name}</span>
          </div>
        ))}
      </div>
    </Reveal>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group, i) => {
        const Icon = groupIcons[group.icon];
        return (
          <Reveal key={group.title} delay={i * 0.06}>
            <SpotlightCard className="h-full p-6">
              <div className="mb-5 flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-500/15 to-sky-500/15 text-fuchsia-200 ring-1 ring-white/10">
                  <Icon size={20} />
                </span>
                <span className="font-mono text-xs text-slate-600">
                  {String(group.items.length).padStart(2, "0")} items
                </span>
              </div>
              <h3 className="mb-4 font-display text-lg font-semibold text-white">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-sm text-slate-300 transition-colors group-hover:border-white/[0.12]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        );
      })}
    </div>
  </Section>
);

export default Skills;
