import { useState } from "react";
import { FiArrowUpRight, FiCheck, FiCopy, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { Reveal, Section, SpotlightCard } from "./ui";
import { profile } from "../data/profile";

const CopyButton = ({ value, label }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard tidak tersedia */
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Salin ${label}`}
      className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 text-slate-400 transition hover:border-white/25 hover:text-white"
    >
      {copied ? <FiCheck className="text-emerald-400" /> : <FiCopy size={15} />}
    </button>
  );
};

const Contact = () => {
  const channels = [
    { icon: FiMail, label: "Email", value: profile.email, href: `mailto:${profile.email}`, copy: true },
    { icon: FiPhone, label: "Telepon / WhatsApp", value: profile.phone, href: profile.whatsapp, copy: true },
    { icon: FiLinkedin, label: "LinkedIn", value: "Dwi Wahyu Susilowati", href: profile.linkedin },
    { icon: FiGithub, label: "GitHub", value: "@dwiwahyu06", href: profile.github },
  ];

  return (
    <Section id="contact">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-ink-900 px-6 py-14 md:px-14 md:py-20">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top,#000_20%,transparent_70%)]" />
            <div className="absolute -top-32 left-1/2 h-[360px] w-[680px] -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-600/25 via-violet-600/20 to-sky-500/25 blur-[100px]" />
          </div>

          <div className="relative flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-fuchsia-300/80">
              <span className="text-slate-500">06</span>
              <span className="h-px w-8 bg-gradient-to-r from-fuchsia-400 to-transparent" />
              Kontak
            </span>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Mari bangun sesuatu yang <span className="text-gradient">berdampak</span> bersama.
            </h2>
            <p className="mt-5 max-w-xl text-slate-400">
              Terbuka untuk diskusi proyek, kolaborasi, maupun peluang kerja. Kirim pesan — saya akan membalas
              secepatnya.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${profile.email}`} className="btn-primary">
                <FiMail /> Kirim Email
              </a>
              <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <FiPhone /> WhatsApp
              </a>
            </div>
            <p className="mt-6 inline-flex items-center gap-1.5 text-sm text-slate-500">
              <FiMapPin size={13} /> {profile.location}
            </p>
          </div>

          <div className="relative mx-auto mt-14 grid max-w-3xl gap-3 sm:grid-cols-2">
            {channels.map(({ icon: Icon, label, value, href, copy }) => (
              <SpotlightCard key={label} className="p-4">
                <div className="flex items-center gap-3">
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex min-w-0 flex-1 items-center gap-3"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/[0.05] text-fuchsia-200">
                      <Icon size={18} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-[10px] uppercase tracking-wider text-slate-500">
                        {label}
                      </span>
                      <span className="block truncate text-sm text-slate-200">{value}</span>
                    </span>
                  </a>
                  {copy ? (
                    <CopyButton value={value} label={label} />
                  ) : (
                    <FiArrowUpRight className="shrink-0 text-slate-500 transition group-hover:text-white" />
                  )}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
};

export default Contact;
