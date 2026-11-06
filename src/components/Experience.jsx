import { FiCalendar, FiMapPin } from "react-icons/fi";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { Reveal, Section, SectionHeading, SpotlightCard } from "./ui";
import { experiences, education, monthsSince, formatDuration } from "../data/profile";

const TimelineItem = ({ children, dot, last = false, delay = 0 }) => (
  <Reveal delay={delay} className="relative pl-10 md:pl-14">
    {!last && (
      <span className="absolute left-[15px] top-10 h-[calc(100%+1.5rem)] w-px bg-gradient-to-b from-white/15 to-white/[0.03] md:left-[19px]" />
    )}
    <span className="absolute left-0 top-6 grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-ink-900 md:h-10 md:w-10">
      {dot}
    </span>
    {children}
  </Reveal>
);

const Experience = () => (
  <Section id="experience">
    <div aria-hidden className="pointer-events-none absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[120px]" />

    <SectionHeading
      index="02"
      eyebrow="Pengalaman"
      title="Perjalanan Karier & Pendidikan"
      description="Pengalaman profesional membangun produk web di lingkungan multi-bahasa — Java, JavaScript, dan Python."
    />

    <div className="flex flex-col gap-6">
      {experiences.map((exp) => (
        <TimelineItem
          key={exp.company}
          dot={
            <span className="relative flex h-3 w-3">
              {exp.current && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              )}
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
            </span>
          }
        >
          <SpotlightCard className="p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-sky-500/20 font-display text-sm font-bold text-white ring-1 ring-white/10">
                  SDM
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white md:text-2xl">{exp.role}</h3>
                  <p className="mt-1 text-slate-300">{exp.company}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <FiCalendar size={13} /> {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <FiMapPin size={13} /> {exp.location}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex shrink-0 gap-2">
                {exp.current && (
                  <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    Saat ini
                  </span>
                )}
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs text-slate-300">
                  {formatDuration(monthsSince(exp.start))}
                </span>
              </div>
            </div>

            <ul className="mt-7 grid gap-3 md:grid-cols-2 md:gap-x-8">
              {exp.points.map((point) => (
                <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-slate-400">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-fuchsia-400 to-sky-400" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-2 border-t border-white/[0.06] pt-6">
              {exp.stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </SpotlightCard>
        </TimelineItem>
      ))}

      <TimelineItem last delay={0.1} dot={<HiOutlineAcademicCap className="text-sky-300" size={16} />}>
        <SpotlightCard className="p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-sky-300/80">Pendidikan</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-white md:text-2xl">{education.degree}</h3>
              <p className="mt-1 text-slate-300">{education.school}</p>
              <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-slate-500">
                <FiCalendar size={13} /> {education.period} · {education.note}
              </p>
            </div>
            <div className="flex items-baseline gap-1.5 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4">
              <span className="font-display text-4xl font-bold text-gradient">{education.gpa}</span>
              <span className="text-sm text-slate-500">/ {education.gpaMax} IPK</span>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.06] pt-6">
            <span className="mr-1 self-center text-sm text-slate-500">Mata kuliah relevan:</span>
            {education.courses.map((c) => (
              <span key={c} className="chip">
                {c}
              </span>
            ))}
          </div>
        </SpotlightCard>
      </TimelineItem>
    </div>
  </Section>
);

export default Experience;
