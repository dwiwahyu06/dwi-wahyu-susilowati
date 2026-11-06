import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiMapPin, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiNextdotjs, SiReact, SiSpringboot, SiPython } from "react-icons/si";
import {
  profile,
  projects,
  certificates,
  education,
  CAREER_START,
  monthsSince,
} from "../data/profile";

const useTypewriter = (words, { type = 70, erase = 35, hold = 1800 } = {}) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let timeout;
    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), hold);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? erase : type
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, type, erase, hold]);

  return text;
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

const Hero = () => {
  const typed = useTypewriter(profile.roles);
  const months = monthsSince(CAREER_START);

  const stats = [
    { value: `${months}`, suffix: " bln", label: "Pengalaman profesional" },
    { value: `${projects.length}`, suffix: "", label: "Proyek web dibangun" },
    { value: `${certificates.length}`, suffix: "", label: "Sertifikat pelatihan" },
    { value: education.gpa, suffix: "", label: "IPK Manajemen Informatika" },
  ];

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-28 md:pt-32">
      {/* Latar: grid + aurora */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-grid mask-radial absolute inset-0" />
        <div className="absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-fuchsia-600/20 blur-[120px]" />
        <div className="absolute -right-32 top-1/3 h-[520px] w-[520px] rounded-full bg-sky-500/15 blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[600px] rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      <div className="container-x relative grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Kiri */}
        <div className="flex flex-col items-start">
          <motion.a
            href="#experience"
            {...fadeUp(0.05)}
            className="group mb-8 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] py-1.5 pl-2 pr-4 text-xs text-emerald-200 transition hover:border-emerald-400/40"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Saat ini Fullstack Developer di PT Sovware Data Mandiri
            <FiArrowUpRight className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </motion.a>

          <motion.p {...fadeUp(0.12)} className="mb-3 font-mono text-sm text-slate-400">
            <span className="text-fuchsia-400">const</span> developer <span className="text-slate-500">=</span>{" "}
            <span className="text-sky-300">"Halo, saya"</span>
          </motion.p>

          <motion.h1
            {...fadeUp(0.18)}
            className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Dwi Wahyu
            <br />
            <span className="text-gradient">Susilowati</span>
          </motion.h1>

          <motion.div
            {...fadeUp(0.26)}
            className="mt-6 flex h-8 items-center font-display text-xl text-slate-200 sm:text-2xl"
            aria-label={profile.role}
          >
            <span className="mr-2 font-mono text-fuchsia-400">&gt;</span>
            <span>{typed}</span>
            <span className="ml-1 inline-block h-6 w-[2px] animate-blink bg-fuchsia-400" />
          </motion.div>

          <motion.p {...fadeUp(0.34)} className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Membangun aplikasi web end-to-end — dari antarmuka responsif dengan{" "}
            <span className="text-slate-200">Next.js & React.js</span>, layanan backend{" "}
            <span className="text-slate-200">Java</span>, modul <span className="text-slate-200">Python</span>, hingga
            integrasi <span className="text-slate-200">MySQL, PostgreSQL & REST API</span>.
          </motion.p>

          <motion.div {...fadeUp(0.42)} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              Lihat Proyek <FiArrowUpRight />
            </a>
            <a href="#contact" className="btn-ghost">
              <FiMail /> Hubungi Saya
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-11 w-11 place-items-center rounded-xl text-slate-400 transition hover:bg-white/5 hover:text-white"
              >
                <FiGithub size={19} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-xl text-slate-400 transition hover:bg-white/5 hover:text-white"
              >
                <FiLinkedin size={19} />
              </a>
            </div>
          </motion.div>

          <motion.dl
            {...fadeUp(0.5)}
            className="mt-14 grid w-full max-w-xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-ink-950/90 px-4 py-4">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-semibold text-white">
                  {s.value}
                  <span className="text-base text-slate-400">{s.suffix}</span>
                </dd>
                <dd className="mt-1 text-[11px] leading-tight text-slate-500">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Kanan: potret */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[380px]"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-fuchsia-500/25 via-violet-500/10 to-sky-500/25 blur-2xl" />

          <div className="relative rounded-[2rem] bg-gradient-to-br from-fuchsia-500/60 via-violet-500/30 to-sky-500/60 p-[1.5px]">
            <div className="relative overflow-hidden rounded-[calc(2rem-1.5px)] bg-ink-900">
              <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-[11px] text-slate-500">~/dwi-wahyu/profile.jpg</span>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={profile.photo}
                  alt={`Foto ${profile.name}`}
                  className="h-full w-full object-cover"
                  style={{ transform: "scale(2)", transformOrigin: "56% 58%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-display text-lg font-semibold text-white">{profile.name}</p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-sm text-slate-300">
                    <FiMapPin size={13} /> {profile.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Kartu kode melayang */}
          <div className="glass absolute -left-6 top-24 hidden animate-float rounded-xl px-4 py-3 font-mono text-[11px] leading-relaxed shadow-2xl shadow-black/40 sm:block lg:-left-16">
            <p>
              <span className="text-fuchsia-400">role</span>
              <span className="text-slate-500">:</span> <span className="text-sky-300">"fullstack"</span>
            </p>
            <p>
              <span className="text-fuchsia-400">stack</span>
              <span className="text-slate-500">:</span> <span className="text-amber-300">[java, next, py]</span>
            </p>
            <p>
              <span className="text-fuchsia-400">status</span>
              <span className="text-slate-500">:</span> <span className="text-emerald-300">"shipping 🚀"</span>
            </p>
          </div>

          <div
            className="glass absolute -right-4 bottom-24 hidden animate-float items-center gap-2.5 rounded-xl px-3.5 py-2.5 shadow-2xl shadow-black/40 sm:flex lg:-right-10"
            style={{ animationDelay: "1.5s" }}
          >
            <SiNextdotjs className="text-white" size={18} />
            <SiReact className="text-sky-400" size={18} />
            <SiSpringboot className="text-emerald-400" size={18} />
            <SiPython className="text-amber-300" size={18} />
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Gulir ke bawah"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500 transition hover:text-slate-300 md:flex"
      >
        scroll
        <span className="relative h-9 w-5 rounded-full border border-white/20">
          <motion.span
            animate={{ y: [4, 16, 4] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 h-1.5 w-1 -translate-x-1/2 rounded-full bg-white/60"
          />
        </span>
      </a>
    </section>
  );
};

export default Hero;
