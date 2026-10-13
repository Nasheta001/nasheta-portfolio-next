import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ContactSection, ProcessSection } from "@/components/Sections";
import WritingNiches from "./WritingNiches";
import { site } from "@/content/site";
import { writingContact, writingHero, writingProcess } from "@/content/writing";
import { mailto } from "@/lib/links";

export const metadata: Metadata = {
  title: "Nasheta John · Writing Services",
  description: writingHero.intro,
};

export default function WritingPage() {
  return (
    <div className="min-h-screen bg-ink text-text">
      <Nav active="writing" />

      <main>
        <section className="mx-auto grid max-w-[1280px] grid-cols-1 items-end gap-8 px-4 pt-14 pb-12 sm:px-8 md:pt-[88px] lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="mb-4 font-sora text-sm font-medium tracking-[0.1em] text-accent uppercase">
              {writingHero.kicker}
            </p>
            <h1 className="font-sora text-[36px] leading-[1.05] font-extrabold tracking-[-0.03em] text-white lg:text-[clamp(36px,4.6vw,58px)]">
              {writingHero.titleStart}
              <span className="text-accent">{writingHero.titleAccent}</span>
            </h1>
          </div>
          <p className="border-l border-edge-2 pl-5 text-lg leading-[1.7] text-muted sm:pl-7">{writingHero.intro}</p>
        </section>

        <WritingNiches />

        <ProcessSection title={writingProcess.title} steps={writingProcess.steps} />

        <ContactSection
          title={writingContact.title}
          text={writingContact.text}
          button={writingContact.button}
          href={mailto(site.email)}
        />
      </main>

      <Footer current="writing" />
    </div>
  );
}
