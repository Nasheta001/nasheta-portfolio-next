import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ContactSection, ProcessSection } from "@/components/Sections";
import { ServiceIcon } from "@/components/icons";
import { site } from "@/content/site";
import { devContact, devHero, devProcess, devServices, projects, tools } from "@/content/development";
import { mailto } from "@/lib/links";

export const metadata: Metadata = {
  title: "Nasheta John · Development Services",
  description: devHero.intro,
};

export default function DeveloperPage() {
  return (
    <div className="min-h-screen bg-ink text-text">
      <Nav active="developer" />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-[1280px] px-4 pt-14 pb-12 sm:px-8 md:pt-[88px] md:pb-16">
          <p className="mb-4 font-mono text-sm tracking-[0.04em] text-accent">{devHero.kicker}</p>
          <h1 className="max-w-[880px] font-sora text-[36px] leading-[1.08] font-extrabold tracking-[-0.03em] text-white lg:text-[clamp(36px,5vw,60px)]">
            {devHero.titleStart}
            <span className="text-accent">{devHero.titleAccent}</span>
          </h1>
          <p className="mt-6 max-w-[640px] text-lg leading-[1.7] text-muted sm:text-[19px]">{devHero.intro}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-accent px-[26px] py-3.5 font-sora text-[15px] font-semibold text-on-accent no-underline hover:bg-accent-light hover:text-on-accent"
            >
              {devHero.primaryButton}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-edge-2 px-[26px] py-3.5 font-sora text-[15px] font-semibold text-white no-underline hover:border-accent hover:text-white"
            >
              {devHero.secondaryButton}
            </a>
          </div>
        </section>

        {/* What I build */}
        <section className="mx-auto max-w-[1280px] px-4 pt-10 pb-10 sm:px-8 md:pt-16">
          <h2 className="mb-8 font-sora text-[28px] font-bold tracking-[-0.02em] text-white md:text-[32px]">
            {devServices.title}
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {devServices.items.map((s) => (
              <div key={s.title} className="flex flex-col gap-3.5 rounded-[18px] border border-line bg-card p-7 sm:p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#0F2A2E]">
                  <ServiceIcon name={s.icon} />
                </div>
                <h3 className="font-sora text-xl font-semibold text-white">{s.title}</h3>
                <p className="text-base leading-relaxed text-dim">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-[1280px] scroll-mt-4 px-4 pt-12 pb-20 sm:px-8">
          <h2 className="mb-8 font-sora text-[28px] font-bold tracking-[-0.02em] text-white md:text-[32px]">
            {projects.title}
          </h2>
          <div className="flex flex-col gap-6">
            {projects.items.map((p) => (
              <article
                key={p.title}
                className="flex flex-col items-center gap-8 rounded-[20px] border border-line bg-card p-5 sm:p-8 lg:flex-row"
              >
                <div
                  className="relative flex min-h-[220px] w-full items-center justify-center overflow-hidden rounded-xl p-6 text-center text-[15px] font-medium sm:min-h-[260px] lg:flex-1"
                  style={{ background: p.screenshot.bg, color: p.screenshot.ink }}
                >
                  {p.screenshot.image ? (
                    <Image
                      src={p.screenshot.image}
                      alt={`${p.title} screenshot`}
                      fill
                      sizes="(min-width: 1024px) 600px, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    p.screenshot.placeholder
                  )}
                </div>
                <div className="flex w-full flex-col gap-3.5 lg:flex-1">
                  <span className="text-[13px] font-semibold tracking-[0.06em] text-accent uppercase">{p.category}</span>
                  <h3 className="font-sora text-2xl font-semibold tracking-[-0.01em] text-white sm:text-[26px]">
                    {p.title}
                  </h3>
                  <p className="text-[17px] leading-[1.65] text-muted">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-line bg-[#11161D] px-2.5 py-[5px] font-mono text-[13px] text-text"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-1 flex flex-wrap gap-5">
                    {p.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        className={`text-base font-semibold ${
                          l.primary ? "text-accent" : "text-muted hover:text-white"
                        }`}
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section className="border-y border-edge bg-ink-2">
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-8 px-4 py-16 sm:px-8 md:py-[72px] lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col gap-3">
              <h2 className="font-sora text-[28px] font-bold tracking-[-0.02em] text-white md:text-[30px]">
                {tools.title}
              </h2>
              <p className="text-[17px] leading-relaxed text-muted">{tools.intro}</p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {tools.items.map((t) => (
                <span key={t} className="rounded-lg border border-line bg-card px-4 py-2.5 font-mono text-sm text-text">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        <ProcessSection title={devProcess.title} steps={devProcess.steps} plain />

        <ContactSection
          title={devContact.title}
          text={devContact.text}
          button={devContact.button}
          href={mailto(site.email)}
        />
      </main>

      <Footer current="developer" />
    </div>
  );
}
