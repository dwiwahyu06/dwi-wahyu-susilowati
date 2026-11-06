import { FiArrowUpRight, FiCalendar, FiGithub, FiCheck } from "react-icons/fi";
import { Reveal, Section, SectionHeading, SpotlightCard } from "./ui";
import { projects, profile } from "../data/profile";

const ProjectCard = ({ project, index }) => {
  const reversed = index % 2 === 1;
  const isRepo = project.link.includes("github.com");

  return (
    <Reveal>
      <SpotlightCard className="p-3 md:p-4">
        <div className={`grid items-center gap-6 md:gap-10 lg:grid-cols-2 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block overflow-hidden rounded-xl border border-white/[0.06] bg-ink-800"
            aria-label={`Buka ${project.title}`}
          >
            <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-black/30 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="ml-2 truncate rounded bg-white/[0.05] px-2 py-0.5 font-mono text-[10px] text-slate-500">
                {project.link.replace(/^https?:\/\//, "")}
              </span>
            </div>
            <div className="aspect-[2/1] overflow-hidden">
              <img
                src={project.image}
                alt={`Tampilan ${project.title}`}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
          </a>

          <div className="flex flex-col p-3 md:p-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs text-fuchsia-300/80">{String(index + 1).padStart(2, "0")}</span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[11px] font-medium text-slate-300">
                {project.type}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                <FiCalendar size={12} /> {project.period}
              </span>
            </div>

            <h3 className="mt-4 font-display text-2xl font-semibold text-white md:text-3xl">{project.title}</h3>
            <p className="mt-1 text-sm text-slate-400">{project.subtitle}</p>
            <p className="mt-4 leading-relaxed text-slate-400">{project.description}</p>

            <ul className="mt-5 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                  <FiCheck className="shrink-0 text-emerald-400" size={14} /> {f}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-7">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                {isRepo ? <FiGithub /> : null}
                {project.linkLabel}
                <FiArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </Reveal>
  );
};

const Project = () => (
  <Section id="projects">
    <div aria-hidden className="pointer-events-none absolute left-0 top-1/3 h-[420px] w-[420px] rounded-full bg-fuchsia-600/10 blur-[120px]" />

    <SectionHeading
      index="04"
      eyebrow="Proyek Pilihan"
      title="Hal-hal yang sudah saya bangun"
      description="Beberapa aplikasi web yang saya kembangkan — dari sistem e-commerce fullstack hingga aplikasi frontend interaktif."
    />

    <div className="flex flex-col gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </div>

    <Reveal className="mt-12 flex justify-center">
      <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
        <FiGithub /> Lihat lebih banyak di GitHub <FiArrowUpRight />
      </a>
    </Reveal>
  </Section>
);

export default Project;
