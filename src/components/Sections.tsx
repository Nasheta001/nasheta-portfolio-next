// Blocks shared by the Writing and Development pages.

export function ProcessSection({
  title,
  steps,
  plain = false,
}: {
  title: string;
  steps: { title: string; desc: string }[];
  plain?: boolean;
}) {
  return (
    <section className={plain ? "" : "border-y border-edge bg-ink-2"}>
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-8 md:py-20">
        <h2 className="mb-10 font-sora text-[28px] font-bold tracking-[-0.02em] text-white md:text-[32px]">
          {title}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="flex flex-col gap-2.5 border-t border-edge-2 pt-5">
              <span className="font-sora text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-sora text-lg font-semibold text-white">{s.title}</span>
              <span className="text-base leading-relaxed text-dim">{s.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection({
  title,
  text,
  button,
  href,
}: {
  title: string;
  text: string;
  button: string;
  href: string;
}) {
  return (
    <section id="contact" className="mx-auto max-w-[1280px] scroll-mt-4 px-4 py-16 sm:px-8 md:py-[88px]">
      <div className="flex flex-wrap items-center justify-between gap-8 rounded-3xl border border-[#1E3B38] bg-[#0B1A19] p-7 sm:p-14">
        <div className="flex max-w-[560px] flex-col gap-3">
          <h2 className="font-sora text-[28px] leading-tight font-bold tracking-[-0.02em] text-white sm:text-[34px]">
            {title}
          </h2>
          <p className="text-lg leading-relaxed text-muted">{text}</p>
        </div>
        <a
          href={href}
          className="rounded-full bg-accent px-[30px] py-4 font-sora text-base font-semibold text-on-accent no-underline hover:bg-accent-light hover:text-on-accent"
        >
          {button}
        </a>
      </div>
    </section>
  );
}
