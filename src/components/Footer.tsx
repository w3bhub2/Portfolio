import { profile } from "../data";
import Icon from "./Icon";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 font-bold text-white">
            UG
          </span>
          <div>
            <p className="text-sm font-semibold text-white">Usman Ghani</p>
            <p className="text-xs text-slate-500">
              Digital Operations · AI Automation
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors hover:text-white"
          >
            <Icon name="github" className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors hover:text-white"
          >
            <Icon name="linkedin" className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors hover:text-white"
          >
            <Icon name="mail" className="h-5 w-5" />
          </a>
        </div>

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Usman Ghani. All rights reserved.
        </p>
      </div>
      <nav aria-label="Footer" className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
        {footerLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-xs text-slate-500 transition-colors hover:text-white"
          >
            {l.label}
          </a>
        ))}
      </nav>
      </div>
    </footer>
  );
}
