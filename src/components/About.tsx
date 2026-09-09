import Section from "./Section";
import Reveal from "./Reveal";
import { profile, highlights, additionalInfo } from "../data";
import Icon from "./Icon";

export default function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Where operations meets engineering">
      <div className="grid gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-6 space-y-2.5">
            {additionalInfo.map((info) => (
              <div key={info} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-400">
                  <Icon name="check" className="h-3 w-3" />
                </span>
                <span className="text-sm text-slate-400 sm:text-base">{info}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {highlights.map((h, i) => (
              <Reveal
                key={h.label}
                delay={i * 80}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5"
              >
                <div className="bg-gradient-to-br from-indigo-400 to-violet-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                  {h.value}
                </div>
                <div className="mt-1 text-xs leading-snug text-slate-400 sm:text-sm">
                  {h.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
