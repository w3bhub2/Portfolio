import { motion } from "framer-motion";
import { profile } from "../data";
import Icon from "./Icon";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-20 sm:pt-24"
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-indigo-600/30 blur-[120px] sm:h-96 sm:w-96" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px] sm:h-96 sm:w-96" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 backdrop-blur sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new opportunities
          </div>

          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Usman Ghani
            </span>
          </h1>

          <p className="mt-5 text-lg font-medium leading-snug text-slate-200 sm:text-2xl">
            I build production-ready websites, automate business operations, and
            engineer AI-powered digital ecosystems.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
            {profile.tagline} — turning 6+ years of operations leadership into
            scalable, technical solutions.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition-transform hover:scale-105 sm:px-6 sm:py-3.5"
            >
              View my work
              <Icon
                name="arrow"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/10 sm:px-6 sm:py-3.5"
            >
              Let's talk
            </a>
            <a
              href="#play"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-3 text-sm font-medium text-emerald-300 backdrop-blur transition-colors hover:bg-emerald-500/15"
            >
              🎮 Play 2048
            </a>
            <a
              href="/resume.pdf"
              download="Usman_Ghani_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              <Icon name="download" className="h-4 w-4" />
              Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-400 sm:text-sm">
            <span className="inline-flex items-center gap-2">
              <Icon name="pin" className="h-4 w-4 text-indigo-400" />
              {profile.location}
            </span>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <Icon name="github" className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <Icon name="linkedin" className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <Icon name="mail" className="h-4 w-4" />
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
