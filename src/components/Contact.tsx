import Section from "./Section";
import Reveal from "./Reveal";
import { profile, education } from "../data";
import Icon from "./Icon";

const contacts = [
  { icon: "mail", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: "phone", label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: "github", label: "GitHub", value: "github.com/w3bhub2", href: profile.github },
  { icon: "linkedin", label: "LinkedIn", value: "usmanghani-ops", href: profile.linkedin },
];

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something together">
      <div className="grid gap-5 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-violet-500/5 p-6 sm:p-8">
            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              Whether you need a new website, business automation, or
              a hands-on operator who understands both the technical and business
              sides — I'd love to hear from you.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition-colors hover:border-indigo-500/40 hover:bg-white/10 sm:p-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-400">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-slate-500">
                      {c.label}
                    </span>
                    <span className="block truncate text-sm text-white">
                      {c.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition-transform hover:scale-[1.02] sm:flex-none sm:px-6 sm:py-3.5"
              >
                <Icon name="mail" className="h-5 w-5" />
                Send me an email
              </a>
              <a
                href="/resume.pdf"
                download="Usman_Ghani_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                <Icon name="download" className="h-5 w-5" />
                Download Resume
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-2">
          <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 text-indigo-400">
              <Icon name="cap" className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-sm">
              Education
            </h3>
            <p className="mt-3 text-base font-semibold text-white sm:text-lg">
              {education.degree}
            </p>
            <p className="mt-1 text-sm text-slate-400 sm:text-base">{education.institution}</p>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-slate-300">
                <Icon name="pin" className="h-4 w-4 text-indigo-400" />
                <span className="text-sm">{profile.location}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
