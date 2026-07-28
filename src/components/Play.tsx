import { motion } from "framer-motion";
import Section from "./Section";
import Game2048 from "./Game2048";

export default function Play() {
  return (
    <Section id="play" eyebrow="Mini Project" title="Play 2048 — built into this portfolio">
      <div className="grid gap-8 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <p className="text-base leading-relaxed text-slate-300">
            A modern recreation of the classic 2048 game — built with React and
            TypeScript. This is a live, playable build of the project.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
              Swipe, arrow keys, or WASD to move tiles.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
              Match same numbers to combine them.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
              Reach 2048 to win — or keep going for a higher score.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
              Your best score is saved locally on your device.
            </li>
          </ul>
          <p className="mt-4 text-xs text-slate-500">
            Built as part of an ongoing expansion into a custom game engine.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-3"
        >
          <Game2048 />
        </motion.div>
      </div>
    </Section>
  );
}
