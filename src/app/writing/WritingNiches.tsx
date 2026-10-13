"use client";

import { useState } from "react";
import { SampleGlyph } from "@/components/icons";
import { niches, samplesSection } from "@/content/writing";

// Background / icon colour pairs for the sample cards, used in order.
const tints = [
  ["#0F2A2E", "#5ED6CB"],
  ["#1C1A36", "#A99CF5"],
  ["#2A1518", "#F08A8E"],
  ["#2A2210", "#F2C063"],
  ["#10233A", "#7DB7F0"],
  ["#162A18", "#8FD48E"],
];

export default function WritingNiches() {
  const [activeId, setActiveId] = useState(niches[0].id);
  const cur = niches.find((n) => n.id === activeId) ?? niches[0];

  return (
    <>
      <section className="sticky top-0 z-10 border-y border-edge bg-ink">
        <div
          role="tablist"
          aria-label="Writing niches"
          className="mx-auto flex max-w-[1280px] gap-2.5 overflow-x-auto px-4 py-3.5 [scrollbar-width:none] sm:flex-wrap sm:px-8"
        >
          {niches.map((n) => {
            const on = n.id === activeId;
            return (
              <button
                key={n.id}
                type="button"
                role="tab"
                id={`tab-${n.id}`}
                aria-selected={on}
                aria-controls="niche-panel"
                onClick={() => setActiveId(n.id)}
                className={`min-h-11 shrink-0 cursor-pointer rounded-full border px-5 py-2.5 font-sora text-sm font-medium whitespace-nowrap ${
                  on
                    ? "border-accent bg-accent text-on-accent"
                    : "border-edge-2 bg-transparent text-[#C9D0D6] hover:border-accent"
                }`}
              >
                {n.tabLabel}
              </button>
            );
          })}
        </div>
      </section>

      <div id="niche-panel" role="tabpanel" aria-labelledby={`tab-${cur.id}`}>
        <section
          aria-live="polite"
          className="mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-10 px-4 pt-14 pb-6 sm:px-8 md:pt-[72px] lg:grid-cols-2 lg:gap-14"
        >
          <div className="flex flex-col gap-[18px]">
            <p className="font-sora text-sm font-medium tracking-[0.1em] text-accent uppercase">{cur.kicker}</p>
            <h2 className="font-sora text-[30px] leading-[1.15] font-bold tracking-[-0.02em] text-white sm:text-[36px]">
              {cur.title}
            </h2>
            <p className="text-lg leading-[1.7] text-muted">{cur.intro}</p>
            <a
              href="#contact"
              className="mt-2 self-start rounded-full bg-accent px-[26px] py-3.5 font-sora text-[15px] font-semibold text-on-accent no-underline hover:bg-accent-light hover:text-on-accent"
            >
              Request {cur.label} content
            </a>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {cur.services.map((s) => (
              <div key={s.name} className="flex flex-col gap-1.5 rounded-[14px] border border-line bg-card p-5">
                <span className="font-sora text-base font-semibold text-white">{s.name}</span>
                <span className="text-[15px] leading-[1.55] text-dim">{s.desc}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-4 pt-14 pb-20 sm:px-8 md:pt-[72px] md:pb-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-sora text-[28px] leading-[1.15] font-bold tracking-[-0.02em] text-white lg:text-[clamp(28px,3vw,40px)]">
              {cur.label} <span className="text-accent">{samplesSection.titleSuffix}</span>
            </h2>
            <p className="max-w-[460px] text-base leading-relaxed text-dim">{samplesSection.intro}</p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
            {cur.samples.map((c, i) => {
              const [bg, ink] = tints[i % tints.length];
              return (
                <a
                  key={c.title}
                  href={c.href}
                  className="scard flex flex-col overflow-hidden rounded-[18px] border border-line bg-card text-white no-underline hover:text-white"
                >
                  <div className="overflow-hidden">
                    <div
                      className="sthumb relative flex h-[170px] items-center justify-center"
                      style={{ background: bg }}
                    >
                      <SampleGlyph name={c.icon} color={ink} />
                      <span
                        className="absolute top-3.5 left-4 font-sora text-[13px] font-semibold opacity-85"
                        style={{ color: ink }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5 px-[22px] pt-5 pb-[22px]">
                    <span className="font-sora text-lg leading-[1.3] font-semibold">{c.title}</span>
                    <span className="flex items-center justify-between text-sm text-dim">
                      {samplesSection.cardCta}
                      <span
                        aria-hidden="true"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-edge-2 text-accent"
                      >
                        →
                      </span>
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
