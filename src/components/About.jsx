import { FiMapPin, FiBriefcase, FiCheck } from "react-icons/fi";
import { HiOutlineAcademicCap, HiOutlineSparkles } from "react-icons/hi2";
import { Reveal, Section, SectionHeading, SpotlightCard } from "./ui";
import { profile, education, CAREER_START, monthsSince, formatDuration } from "../data/profile";

const Line = ({ n, children }) => (
  <div className="flex">
    <span className="w-8 shrink-0 select-none pr-4 text-right text-slate-600">{n}</span>
    <span className="whitespace-pre-wrap">{children}</span>
  </div>
);

const K = ({ children }) => <span className="text-fuchsia-300">{children}</span>;
const S = ({ children }) => <span className="text-sky-300">"{children}"</span>;
const P = ({ children }) => <span className="text-slate-500">{children}</span>;

const About = () => {
  const duration = formatDuration(monthsSince(CAREER_START));

  const facts = [
    { icon: FiBriefcase, label: "Pengalaman", value: `${duration} · PT Sovware Data Mandiri` },
    { icon: HiOutlineAcademicCap, label: "Pendidikan", value: `D3 Manajemen Informatika · IPK ${education.gpa}` },
    { icon: FiMapPin, label: "Lokasi", value: profile.location },
    { icon: HiOutlineSparkles, label: "Fokus", value: "Fullstack Web · Java · Next.js · Python" },
  ];

  return (
    <Section id="about">
      <SectionHeading
        index="01"
        eyebrow="Tentang Saya"
        title={
          <>
            Membangun web yang <span className="text-gradient">andal & rapi</span>, dari UI sampai database.
          </>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="flex flex-col gap-6">
          <p className="text-lg leading-relaxed text-slate-300">
            Saya <span className="font-semibold text-white">{profile.name}</span>, Fullstack Developer dengan
            pengalaman profesional {duration} di <span className="text-white">PT Sovware Data Mandiri</span> dalam
            membangun aplikasi web menggunakan Java, Next.js, React.js, dan Python.
          </p>
          <p className="leading-relaxed text-slate-400">
            Berpengalaman dalam pengembangan frontend, layanan backend, integrasi database dan REST API, serta
            penyusunan dokumentasi teknis proyek. Lulusan Diploma Manajemen Informatika, Universitas Nasional PASIM
            Bandung (2026, IPK {education.gpa}).
          </p>

          <ul className="flex flex-wrap gap-2">
            {profile.traits.map((t) => (
              <li key={t} className="chip">
                <FiCheck className="text-emerald-400" /> {t}
              </li>
            ))}
          </ul>

          <div className="mt-2 grid gap-3 sm:grid-cols-2">
            {facts.map(({ icon: Icon, label, value }) => (
              <SpotlightCard key={label} className="p-4">
                <div className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/[0.05] text-fuchsia-300">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-slate-500">{label}</p>
                    <p className="mt-0.5 text-sm text-slate-200">{value}</p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-900 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              <span className="font-mono text-[11px] text-slate-500">developer.json</span>
              <span className="w-10" />
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-[1.8] text-slate-300">
              <Line n={1}>
                <P>{"{"}</P>
              </Line>
              <Line n={2}>
                {"  "}
                <K>"name"</K>
                <P>: </P>
                <S>{profile.name}</S>
                <P>,</P>
              </Line>
              <Line n={3}>
                {"  "}
                <K>"role"</K>
                <P>: </P>
                <S>{profile.role}</S>
                <P>,</P>
              </Line>
              <Line n={4}>
                {"  "}
                <K>"company"</K>
                <P>: </P>
                <S>PT Sovware Data Mandiri</S>
                <P>,</P>
              </Line>
              <Line n={5}>
                {"  "}
                <K>"frontend"</K>
                <P>: [</P>
                <S>Next.js</S>
                <P>, </P>
                <S>React.js</S>
                <P>, </P>
                <S>Tailwind</S>
                <P>],</P>
              </Line>
              <Line n={6}>
                {"  "}
                <K>"backend"</K>
                <P>: [</P>
                <S>Spring Boot</S>
                <P>, </P>
                <S>Node.js</S>
                <P>, </P>
                <S>Python</S>
                <P>],</P>
              </Line>
              <Line n={7}>
                {"  "}
                <K>"database"</K>
                <P>: [</P>
                <S>MySQL</S>
                <P>, </P>
                <S>PostgreSQL</S>
                <P>],</P>
              </Line>
              <Line n={8}>
                {"  "}
                <K>"gpa"</K>
                <P>: </P>
                <span className="text-amber-300">3.50</span>
                <P>,</P>
              </Line>
              <Line n={9}>
                {"  "}
                <K>"location"</K>
                <P>: </P>
                <S>Bandung</S>
              </Line>
              <Line n={10}>
                <P>{"}"}</P>
                <span className="ml-0.5 inline-block h-4 w-[7px] translate-y-[3px] animate-blink bg-fuchsia-400/80" />
              </Line>
            </pre>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};

export default About;
