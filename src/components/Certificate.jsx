import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiAward, FiCalendar, FiChevronLeft, FiChevronRight, FiX, FiZoomIn } from "react-icons/fi";
import { Reveal, Section, SectionHeading, SpotlightCard } from "./ui";
import { certificates } from "../data/profile";

const Lightbox = ({ index, onClose, onNav }) => {
  const cert = certificates[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNav]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={cert.title}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Tutup"
        className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
      >
        <FiX size={20} />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNav(-1);
        }}
        aria-label="Sebelumnya"
        className="absolute left-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10 sm:grid"
      >
        <FiChevronLeft size={22} />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNav(1);
        }}
        aria-label="Berikutnya"
        className="absolute right-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10 sm:grid"
      >
        <FiChevronRight size={22} />
      </button>

      <motion.figure
        key={index}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="flex max-h-full max-w-5xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={cert.full}
          alt={cert.title}
          className="max-h-[78vh] w-auto rounded-xl border border-white/10 object-contain shadow-2xl"
        />
        <figcaption className="mt-4 text-center">
          <p className="font-display text-lg font-semibold text-white">{cert.title}</p>
          <p className="mt-1 text-sm text-slate-400">
            {cert.period} · {index + 1}/{certificates.length}
          </p>
        </figcaption>
      </motion.figure>
    </motion.div>
  );
};

const Certificate = () => {
  const [open, setOpen] = useState(null);

  const close = useCallback(() => setOpen(null), []);
  const nav = useCallback(
    (dir) => setOpen((i) => (i === null ? i : (i + dir + certificates.length) % certificates.length)),
    []
  );

  return (
    <Section id="certificates">
      <SectionHeading
        index="05"
        eyebrow="Pelatihan & Sertifikasi"
        title="Terus belajar, terus berkembang"
        description="Rangkaian pelatihan yang membentuk fondasi saya — dari logika algoritma dan basis data hingga React dan Java Spring Boot."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {certificates.map((cert, i) => (
          <Reveal key={cert.image} delay={(i % 4) * 0.06}>
            <SpotlightCard as="button" type="button" onClick={() => setOpen(i)} className="h-full w-full text-left">
              <div className="relative aspect-[4/3] overflow-hidden border-b border-white/[0.06] bg-ink-800">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 grid place-items-center bg-ink-950/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur">
                    <FiZoomIn /> Lihat sertifikat
                  </span>
                </div>
                <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-ink-950/70 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-slate-200 backdrop-blur">
                  {cert.tag}
                </span>
              </div>
              <div className="flex flex-col gap-2 p-4">
                <p className="flex items-start gap-2 text-sm font-medium leading-snug text-white">
                  <FiAward className="mt-0.5 shrink-0 text-fuchsia-300" />
                  {cert.title}
                </p>
                <p className="flex items-center gap-1.5 pl-6 text-xs text-slate-500">
                  <FiCalendar size={11} /> {cert.period}
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>{open !== null && <Lightbox index={open} onClose={close} onNav={nav} />}</AnimatePresence>
    </Section>
  );
};

export default Certificate;
