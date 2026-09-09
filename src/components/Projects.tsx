import Section from "./Section";
import Reveal from "./Reveal";
import { projects, profile, type Project } from "../data";
import Icon from "./Icon";

function TechChips({ tech }: { tech: string[] }) {
  if (tech.length === 0) return null;
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tech.map((t) => (
        <span
          key={t}
          className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-slate-300"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function FeaturedProject({ p }: { p: Project }) {
  return (
    <div id="matzhub" className="scroll-mt-24">
    <Reveal className="relative overflow-hidden rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/[0.07] via-white/[0.03] to-violet-500/[0.05] p-5 sm:p-8">
      <div
        className={`absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-3xl`}
        aria-hidden="true"
      />

      <div className="relative">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`rounded-full bg-gradient-to-r ${p.accent} px-3 py-1 text-xs font-medium text-white`}>
              {p.tag}
            </span>
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-300">
              Flagship build
            </span>
          </div>
          {p.url && p.url !== "#play" && (
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit site: ${new URL(p.url).hostname.replace(/^www\./, "")}`}
              className="inline-flex items-center gap-1 text-xs text-slate-400 transition-colors hover:text-white"
            >
              Visit site
              <Icon name="external" className="h-3.5 w-3.5" />
            </a>
          )}
        </div>

        <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">{p.name}</h3>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
          {p.description}
        </p>

        {p.diagram && (
          <figure className="mt-5">
            <a
              href={p.diagram.src}
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden rounded-xl border border-white/10 bg-white transition-colors hover:border-indigo-500/40"
              aria-label="Open the full-size MatzHub architecture diagram in a new tab"
            >
              <img
                src={p.diagram.src}
                alt={p.diagram.alt}
                width={1536}
                height={1080}
                loading="lazy"
                decoding="async"
                className="h-auto w-full"
              />
            </a>
            <figcaption className="mt-2 text-center text-xs text-slate-500">
              {p.diagram.caption}
            </figcaption>
          </figure>
        )}

        {p.flow && (
          <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2 text-xs sm:text-sm">
            {p.flow.map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                <span className="rounded-lg border border-indigo-500/25 bg-indigo-500/10 px-2.5 py-1.5 font-medium text-indigo-200">
                  {step}
                </span>
                {i < p.flow!.length - 1 && (
                  <Icon name="arrow" className="h-3.5 w-3.5 shrink-0 text-slate-600" />
                )}
              </span>
            ))}
          </div>
        )}

        {p.stats && (
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {p.stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-white/10 bg-slate-950/50 p-4">
                <div className="text-base font-bold text-white sm:text-lg">{s.value}</div>
                <div className="mt-1 text-xs leading-snug text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        )}

        <ul className="mt-6 grid gap-x-6 gap-y-2 sm:grid-cols-2">
          {p.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-slate-400">
              <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <TechChips tech={p.tech} />
          {p.url && p.url !== "#play" && (
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 rounded-lg bg-gradient-to-r ${p.accent} px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105`}
            >
              Open {new URL(p.url).hostname.replace(/^www\./, "")}
              <Icon name="external" className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </Reveal>
    </div>
  );
}

function ProjectCard({ p, i }: { p: Project; i: number }) {
  return (
    <Reveal
      key={p.name}
      delay={(i % 2) * 80}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:border-white/20 sm:p-6"
    >
      <div
        className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-2xl transition-opacity group-hover:opacity-40`}
        aria-hidden="true"
      />

      <div className="relative flex flex-1 flex-col">
        <div className="flex items-center justify-between">
          <span
            className={`rounded-full bg-gradient-to-r ${p.accent} px-3 py-1 text-xs font-medium text-white`}
          >
            {p.tag}
          </span>
          {p.url && p.url !== "#play" && (
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit site: ${new URL(p.url).hostname.replace(/^www\./, "")}`}
              className="inline-flex items-center gap-1 text-xs text-slate-400 transition-colors hover:text-white"
            >
              Visit site
              <Icon name="external" className="h-3.5 w-3.5" />
            </a>
          )}
          {p.url === "#play" && (
            <a
              href="#play-board"
              className="inline-flex items-center gap-1 text-xs text-emerald-300 transition-colors hover:text-white"
            >
              Play now
              <Icon name="external" className="h-3.5 w-3.5" />
            </a>
          )}
        </div>

        <h3 className="mt-4 text-lg font-bold text-white sm:text-xl">{p.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.description}</p>

        <ul className="mt-4 grid gap-x-4 gap-y-1.5 sm:grid-cols-2">
          {p.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-xs text-slate-400 sm:text-sm">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
              {h}
            </li>
          ))}
        </ul>

        <TechChips tech={p.tech} />

        {p.url && p.url !== "#play" && (
          <a
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-indigo-500/40 hover:bg-white/10"
          >
            Open {new URL(p.url).hostname.replace(/^www\./, "")}
            <Icon name="external" className="h-4 w-4" />
          </a>
        )}
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" eyebrow="Projects" title="Selected work I've shipped">
      {featured && <FeaturedProject p={featured} />}

      <div className={featured ? "mt-5 grid gap-5 sm:gap-6 md:grid-cols-2 sm:mt-6" : ""}>
        {rest.map((p, i) => (
          <ProjectCard key={p.name} p={p} i={i} />
        ))}
      </div>

      <Reveal delay={80} className="mt-8 flex justify-center sm:mt-10">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
        >
          <Icon name="github" className="h-5 w-5" />
          See more on GitHub
          <Icon name="external" className="h-4 w-4" />
        </a>
      </Reveal>
    </Section>
  );
}
