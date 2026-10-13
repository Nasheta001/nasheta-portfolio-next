// One place that decides where the logo and nav links point.
// With NEXT_PUBLIC_ROOT_DOMAIN set (e.g. "nashetajohn.com"), links go to the subdomains.
// Without it (local dev, *.vercel.app), links use normal paths.

const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN?.trim().toLowerCase() || "";

export const links = rootDomain
  ? {
      home: `https://${rootDomain}`,
      writing: `https://writing.${rootDomain}`,
      developer: `https://developer.${rootDomain}`,
    }
  : {
      home: "/",
      writing: "/writing",
      developer: "/developer",
    };

export function mailto(email: string) {
  return `mailto:${email}`;
}
