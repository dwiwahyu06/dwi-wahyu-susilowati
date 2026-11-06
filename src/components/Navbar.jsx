import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { FiMenu, FiX, FiGithub, FiLinkedin } from "react-icons/fi";
import { navLinks, profile } from "../data/profile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tandai section yang sedang terlihat.
  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500"
      />
      <nav
        className={`transition-all duration-300 ${
          scrolled ? "border-b border-white/[0.06] bg-ink-950/70 backdrop-blur-xl" : "border-b border-transparent"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between md:h-[72px]">
          <a href="#home" className="group flex items-center gap-2.5" aria-label="Kembali ke beranda">
            <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-fuchsia-500 via-violet-500 to-sky-500 font-display text-sm font-bold text-white shadow-lg shadow-violet-500/30">
              DW
            </span>
            <span className="hidden font-display text-[15px] font-semibold tracking-tight text-white sm:block">
              {profile.name}
            </span>
          </a>

          <ul className="hidden items-center gap-1 rounded-full border border-white/[0.07] bg-white/[0.02] p-1 lg:flex">
            {navLinks.slice(1).map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`relative block rounded-full px-4 py-1.5 text-sm transition-colors duration-200 ${
                    active === link.id ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/[0.08]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hidden h-9 w-9 place-items-center rounded-lg text-slate-400 transition hover:bg-white/5 hover:text-white sm:grid"
            >
              <FiGithub size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hidden h-9 w-9 place-items-center rounded-lg text-slate-400 transition hover:bg-white/5 hover:text-white sm:grid"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="#contact"
              className="hidden rounded-lg bg-white px-4 py-2 text-sm font-semibold text-ink-950 transition hover:bg-slate-200 md:inline-block"
            >
              Hubungi Saya
            </a>
            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={isOpen}
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white lg:hidden"
            >
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-x-0 bottom-0 top-16 bg-ink-950/95 backdrop-blur-xl lg:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.05 } } }}
              className="container-x flex flex-col gap-1 pt-6"
            >
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0 } }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-4 border-b border-white/[0.06] py-4 font-display text-2xl ${
                      active === link.id ? "text-white" : "text-slate-400"
                    }`}
                  >
                    <span className="font-mono text-xs text-fuchsia-300/70">0{i}</span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                className="mt-8 flex gap-3"
              >
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-ghost flex-1">
                  <FiGithub /> GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost flex-1">
                  <FiLinkedin /> LinkedIn
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
