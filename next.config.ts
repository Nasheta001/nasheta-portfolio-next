import fs from "node:fs";
import path from "node:path";
import type { NextConfig } from "next";

// Homepage photo: if design/me.png exists, copy it to public/me.png and tell the page to show it.
// Otherwise the homepage keeps the placeholder box.
const photoSource = path.join(process.cwd(), "design", "me.png");
const hasPhoto = fs.existsSync(photoSource);
if (hasPhoto) {
  fs.copyFileSync(photoSource, path.join(process.cwd(), "public", "me.png"));
}

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  env: {
    NEXT_PUBLIC_HAS_PHOTO: hasPhoto ? "1" : "",
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
