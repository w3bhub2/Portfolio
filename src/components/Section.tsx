import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, eyebrow, title, children }: Props) {
  return (
    <section
      id={id}
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <Reveal className="mb-8 sm:mb-10">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 sm:text-sm">
          {eyebrow}
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
          {title}
        </h2>
      </Reveal>
      {children}
    </section>
  );
}
