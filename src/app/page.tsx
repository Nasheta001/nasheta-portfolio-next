import Image from "next/image";
import Nav from "@/components/Nav";
import { ArrowIcon, GitHubIcon, LinkedInIcon, MailIcon, WhatsAppIcon } from "@/components/icons";
import { home, site } from "@/content/site";
import { mailto } from "@/lib/links";

// Set in next.config.ts: "1" when design/me.png exists at build time.
const hasPhoto = process.env.NEXT_PUBLIC_HAS_PHOTO === "1";

const socials = [
  { label: "LinkedIn", href: site.social.linkedin, icon: <LinkedInIcon /> },
  { label: "GitHub", href: site.social.github, icon: <GitHubIcon /> },
  { label: "WhatsApp", href: site.social.whatsapp, icon: <WhatsAppIcon /> },
  { label: "Email", href: mailto(site.email), icon: <MailIcon /> },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-ink text-text">
      <Nav bordered={false} resumeIcon />

      <main className="flex flex-1 items-center">
        <section className="mx-auto flex w-full max-w-[1280px] flex-wrap items-center justify-center gap-8 px-4 pt-6 pb-14 sm:px-8 lg:gap-10 lg:pb-[72px]">
          {/* Social links: a row at the bottom on phones, a column on the left on desktop */}
          <div aria-label="Social links" className="order-4 flex flex-none flex-row gap-1.5 lg:order-none lg:flex-col">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-full text-muted hover:bg-white/5 hover:text-white"
              >
                {s.icon}
              </a>
            ))}
          </div>

          <div className="order-1 flex w-full flex-col gap-2 text-center lg:order-none lg:w-auto lg:min-w-[240px] lg:flex-[1_1_260px] lg:text-left">
            <p className="font-sora text-lg font-normal text-muted sm:text-[22px]">{home.greeting}</p>
            <h1 className="font-sora text-[44px] leading-[0.98] font-extrabold tracking-[-0.035em] text-white lg:text-[clamp(44px,5.4vw,76px)]">
              {site.firstName}
              <br />
              {site.lastName}
            </h1>
          </div>

          <div className="relative order-2 flex h-[380px] w-[320px] max-w-full flex-none items-end justify-center sm:h-[480px] sm:w-[400px] lg:order-none">
            <div
              aria-hidden="true"
              className="absolute top-[46%] left-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-45 blur-[30px] sm:h-[460px] sm:w-[460px]"
              style={{ background: "radial-gradient(circle, #2EC4B6 0%, transparent 68%)" }}
            />
            {hasPhoto ? (
              <div className="relative h-[340px] w-[260px] sm:h-[420px] sm:w-[320px]">
                <Image
                  src="/me.png"
                  alt={home.photoAlt}
                  fill
                  priority
                  sizes="(min-width: 640px) 320px, 260px"
                  className="object-contain object-bottom"
                />
              </div>
            ) : (
              <div className="relative box-border flex h-[340px] w-[260px] items-center justify-center rounded-[130px_130px_24px_24px] border border-[#222A33] bg-[#11161D] p-6 text-center text-[15px] font-medium text-[#6F7A84] sm:h-[420px] sm:w-[320px] sm:rounded-[160px_160px_24px_24px]">
                {home.photoPlaceholder}
              </div>
            )}
          </div>

          <div className="order-3 flex w-full flex-col gap-1 text-center lg:order-none lg:w-auto lg:min-w-[240px] lg:flex-[1_1_260px] lg:text-right">
            <span className="font-sora text-lg font-normal text-muted sm:text-[22px]">{home.roleTop.small}</span>
            <span className="font-sora text-[34px] leading-none font-extrabold tracking-[-0.03em] text-accent lg:text-[clamp(34px,3.8vw,52px)]">
              {home.roleTop.big}
            </span>
            <span className="mt-2.5 font-sora text-lg font-normal text-muted sm:text-[22px]">{home.roleBottom.small}</span>
            <span className="font-sora text-[34px] leading-none font-extrabold tracking-[-0.03em] text-white lg:text-[clamp(34px,3.8vw,52px)]">
              {home.roleBottom.big}
            </span>
          </div>
        </section>
      </main>

      <section id="contact" className="border-t border-edge">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-4 px-4 py-7 sm:justify-between sm:px-8">
          <span className="text-center text-[15px] text-dim">{home.niches}</span>
          <a
            href={mailto(site.email)}
            className="flex items-center gap-2.5 rounded-full border border-edge-2 px-[22px] py-3 font-sora text-[15px] font-medium text-white no-underline hover:border-accent hover:text-white"
          >
            {home.cta}
            <ArrowIcon />
          </a>
        </div>
      </section>
    </div>
  );
}
