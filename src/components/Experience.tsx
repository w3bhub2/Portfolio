import Section from "./Section";
import Reveal from "./Reveal";
import { experience } from "../data";
import Icon from "./Icon";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="6+ years of building & leading"
    >
      <div className="relative">
        <div className="absolute bottom-2 left-[15px] top-2 hidden w-px bg-gradient-to-b from-indigo-500/50 via-white/10 to-transparent sm:block" />

        <div className="space-y-5 sm:space-y-6">
          {experience.map((exp, i) => (
            <Reveal key={exp.role + exp.company} delay={i * 60} className="relative sm:pl-12">
              <span className="absolute left-0 top-1 hidden h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-indigo-400 sm:flex">
                <Icon name="briefcase" className="h-4 w-4" />
              </span>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/20 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-white sm:text-lg">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-indigo-400">
                      <span>{exp.company}</span>
                      {exp.url && (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-slate-400 transition-colors hover:text-white"
                        >
                          · {new URL(exp.url).hostname.replace(/^www\./, "")}
                          <Icon name="external" className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                  {exp.period && (
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                      {exp.period}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {exp.description}
                </p>

                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {exp.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-sm text-slate-400"
                    >
                      <Icon
                        name="check"
                        className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400"
                      />
                      {p}
                    </li>
                  ))}
                </ul>

                {exp.tech.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-indigo-500/10 px-2 py-0.5 text-xs text-indigo-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
