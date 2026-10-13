import { links } from "@/lib/links";
import { nav, site } from "@/content/site";

export default function Footer({ current }: { current: "writing" | "developer" }) {
  const other =
    current === "writing"
      ? { label: nav.development, href: links.developer }
      : { label: nav.writing, href: links.writing };

  return (
    <footer className="border-t border-edge">
      <div className="mx-auto flex max-w-[1280px] flex-wrap justify-between gap-4 px-4 py-8 text-[15px] text-dim sm:px-8">
        <span>{site.copyright}</span>
        <div className="flex gap-6">
          <a href={links.home} className="text-dim no-underline hover:text-white">
            Home
          </a>
          <a href={other.href} className="text-dim no-underline hover:text-white">
            {other.label}
          </a>
        </div>
      </div>
    </footer>
  );
}
