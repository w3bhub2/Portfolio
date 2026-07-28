import { motion } from "framer-motion";
import Section from "./Section";
import { skillGroups, coreCompetencies } from "../data";
import Icon from "./Icon";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills & Stack"
      title="Tools I use to build & automate"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-colors hover:border-indigo-500/40 hover:bg-white/[0.05]"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 text-indigo-400">
                <Icon name={group.icon} className="h-5 w-5" />
              </span>
              <h3 className="font-semibold text-white">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
          Core Competencies
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {coreCompetencies.map((c) => (
            <span
              key={c}
              className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-200"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
