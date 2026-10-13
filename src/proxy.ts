// Next.js 16 renamed middleware.ts to proxy.ts. Same behaviour: it runs before every page request.
//
// With NEXT_PUBLIC_ROOT_DOMAIN=example.com:
//   writing.example.com/        -> serves /writing
//   developer.example.com/      -> serves /developer
//   writing.example.com/writing -> redirects to writing.example.com/ (no doubled path)
//   example.com/writing         -> redirects to writing.example.com/
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SECTIONS = ["writing", "developer"] as const;

export function proxy(request: NextRequest) {
  const root = process.env.NEXT_PUBLIC_ROOT_DOMAIN?.trim().toLowerCase();
  if (!root) return NextResponse.next();

  const host = (request.headers.get("host") || "").split(":")[0].toLowerCase();
  const { pathname, search } = request.nextUrl;

  // Only handle the root domain and its subdomains (leave *.vercel.app alone).
  if (host !== root && !host.endsWith(`.${root}`)) return NextResponse.next();

  // A path like /writing or /developer/... always belongs on its own subdomain.
  for (const section of SECTIONS) {
    if (pathname === `/${section}` || pathname.startsWith(`/${section}/`)) {
      const rest = pathname.slice(section.length + 1) || "/";
      return NextResponse.redirect(`https://${section}.${root}${rest}${search}`, 308);
    }
  }

  // On a section subdomain, serve that section's page.
  const section = SECTIONS.find((s) => host === `${s}.${root}`);
  if (section) {
    const url = request.nextUrl.clone();
    url.pathname = `/${section}${pathname === "/" ? "" : pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  // Skip Next.js internals and files with an extension (images, favicon, etc.).
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
};
