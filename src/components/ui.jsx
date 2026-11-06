import { useRef } from "react";
import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 32, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SectionHeading = ({ index, eyebrow, title, description, align = "left" }) => (
  <Reveal className={`mb-14 flex flex-col gap-4 ${align === "center" ? "items-center text-center" : ""}`}>
    <span className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-fuchsia-300/80">
      <span className="text-slate-500">{index}</span>
      <span className="h-px w-8 bg-gradient-to-r from-fuchsia-400 to-transparent" />
      {eyebrow}
    </span>
    <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">{title}</h2>
    {description && (
      <p className={`max-w-2xl text-base leading-relaxed text-slate-400 ${align === "center" ? "mx-auto" : ""}`}>
        {description}
      </p>
    )}
  </Reveal>
);

// Kartu dengan efek cahaya yang mengikuti kursor.
export const SpotlightCard = ({ children, className = "", as: Tag = "div", ...rest }) => {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <Tag
      ref={ref}
      onMouseMove={onMove}
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-900/70 transition-colors duration-300 hover:border-white/[0.16] ${className}`}
      {...rest}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(192, 132, 252, 0.10), transparent 45%)",
        }}
      />
      <div className="relative h-full">{children}</div>
    </Tag>
  );
};

export const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`relative py-24 md:py-32 ${className}`}>
    <div className="container-x">{children}</div>
  </section>
);
