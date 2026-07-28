import { motion } from "framer-motion";
import Section from "./Section";
import { projects, profile } from "../data";
import Icon from "./Icon";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Selected work I've shipped">
      <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition-all hover:border-white/20 sm:p-6"
          >
            <div
              className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-2xl transition-opacity group-hover:opacity-40`}
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
                    className="inline-flex items-center gap-1 text-xs text-slate-400 transition-colors hover:text-white"
                  >
                    Visit site
                    <Icon name="external" className="h-3.5 w-3.5" />
                  </a>
                )}
                {p.url === "#play" && (
                  <a
                    href={p.url}
                    className="inline-flex items-center gap-1 text-xs text-emerald-300 transition-colors hover:text-emerald-200"
                  >
                    Play now
                    <Icon name="arrow" className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>

              <h3 className="mt-4 text-lg font-semibold text-white sm:text-xl">
                {p.name}
              </h3>
              <p className="mt-2 text-sm text-slate-400">{p.description}</p>

              <ul className="mt-4 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                {p.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-slate-400"
                  >
                    <Icon
                      name="check"
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400"
                    />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

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
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex justify-center sm:mt-10">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
        >
          <Icon name="github" className="h-5 w-5" />
          See more on GitHub
          <Icon name="external" className="h-4 w-4" />
        </a>
      </div>
    </Section>
  );
}
