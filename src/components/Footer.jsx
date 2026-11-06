import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { navLinks, profile } from "../data/profile";

const Footer = () => (
  <footer className="border-t border-white/[0.06] py-10">
    <div className="container-x flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="font-display text-lg font-semibold text-white">{profile.name}</p>
        <p className="mt-1 text-sm text-slate-500">
          {profile.role} · {profile.location}
        </p>
      </div>

      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
        {navLinks.slice(1).map((l) => (
          <li key={l.id}>
            <a href={`#${l.id}`} className="transition hover:text-white">
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2">
        {[
          { icon: FiGithub, href: profile.github, label: "GitHub" },
          { icon: FiLinkedin, href: profile.linkedin, label: "LinkedIn" },
          { icon: FiMail, href: `mailto:${profile.email}`, label: "Email" },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={label}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-400 transition hover:border-white/25 hover:text-white"
          >
            <Icon size={17} />
          </a>
        ))}
        <a
          href="#home"
          aria-label="Kembali ke atas"
          className="ml-2 grid h-10 w-10 place-items-center rounded-lg bg-white text-ink-950 transition hover:bg-slate-200"
        >
          <FiArrowUp size={17} />
        </a>
      </div>
    </div>
    <p className="container-x mt-8 font-mono text-xs text-slate-600">
      © {new Date().getFullYear()} {profile.name}. Dibangun dengan React, Tailwind CSS & Framer Motion.
    </p>
  </footer>
);

export default Footer;
