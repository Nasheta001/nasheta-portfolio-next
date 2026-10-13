"use client";

import { useState } from "react";
import { links } from "@/lib/links";
import { nav, site } from "@/content/site";
import { DownloadIcon, MenuIcon, CloseIcon } from "./icons";

type Props = {
  active?: "writing" | "developer";
  bordered?: boolean;
  resumeIcon?: boolean;
};

export default function Nav({ active, bordered = true, resumeIcon = false }: Props) {
  const [open, setOpen] = useState(false);

  const items = [
    { key: "writing", label: nav.writing, href: links.writing },
    { key: "developer", label: nav.development, href: links.developer },
    { key: "contact", label: nav.contact, href: "#contact" },
  ];

  const linkClass = (on: boolean) =>
    `py-2.5 font-sora text-[15px] no-underline ${
      on
        ? "font-semibold text-accent border-b-2 border-accent hover:text-accent"
        : "font-medium text-text hover:text-white"
    }`;

  const resume = (
    <a
      href={site.cvLink}
      className="flex items-center gap-2 py-2.5 text-[15px] font-medium text-muted no-underline hover:text-white"
    >
      {nav.resume}
      {resumeIcon ? <DownloadIcon /> : <span aria-hidden="true">↓</span>}
    </a>
  );

  return (
    <header className={bordered ? "border-b border-edge" : ""}>
      <nav
        aria-label="Main"
        className="mx-auto flex w-full max-w-[1280px] flex-wrap items-center justify-between gap-5 px-4 py-5 sm:px-8 md:py-7"
      >
        <a
          href={links.home}
          className="font-sora text-xl font-bold tracking-[-0.01em] text-white no-underline hover:text-white"
        >
          {site.firstName}
          <span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {items.map((i) => (
            <a
              key={i.key}
              href={i.href}
              aria-current={i.key === active ? "page" : undefined}
              className={linkClass(i.key === active)}
            >
              {i.label}
            </a>
          ))}
        </div>
        <div className="hidden md:block">{resume}</div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-edge-2 text-text md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>

        {open && (
          <div id="mobile-menu" className="flex w-full flex-col gap-1 border-t border-edge pt-3 md:hidden">
            {items.map((i) => (
              <a
                key={i.key}
                href={i.href}
                onClick={() => setOpen(false)}
                aria-current={i.key === active ? "page" : undefined}
                className={`py-3 font-sora text-base no-underline ${
                  i.key === active ? "font-semibold text-accent" : "font-medium text-text hover:text-white"
                }`}
              >
                {i.label}
              </a>
            ))}
            {resume}
          </div>
        )}
      </nav>
    </header>
  );
}
