import type { SampleIcon } from "@/content/writing";

type P = { size?: number; color?: string; strokeWidth?: number };

function Svg({ size = 20, color = "currentColor", strokeWidth = 1.8, children }: P & { children: React.ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export const DownloadIcon = () => (
  <Svg size={16} strokeWidth={2}>
    <path d="M12 3v12" />
    <path d="m7 10 5 5 5-5" />
    <path d="M5 21h14" />
  </Svg>
);

export const ArrowIcon = () => (
  <Svg size={16} strokeWidth={2}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </Svg>
);

export const MenuIcon = () => (
  <Svg size={20} strokeWidth={2}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </Svg>
);

export const CloseIcon = () => (
  <Svg size={20} strokeWidth={2}>
    <path d="M6 6l12 12" />
    <path d="M18 6 6 18" />
  </Svg>
);

export const LinkedInIcon = () => (
  <Svg>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 11v5" />
    <path d="M8 8v.01" />
    <path d="M12 16v-5" />
    <path d="M16 16v-3a2 2 0 0 0-4 0" />
  </Svg>
);

export const GitHubIcon = () => (
  <Svg>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </Svg>
);

export const WhatsAppIcon = () => (
  <Svg>
    <path d="m3 21 1.7-5.1A8.5 8.5 0 1 1 8 19.4Z" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </Svg>
);

export const MailIcon = () => (
  <Svg>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </Svg>
);

export function ServiceIcon({ name }: { name: "shop" | "building" | "chart" }) {
  return (
    <Svg size={22} color="#2EC4B6">
      {name === "shop" && (
        <>
          <path d="M3 7h18l-2 12H5Z" />
          <path d="M8 7V5a4 4 0 0 1 8 0v2" />
        </>
      )}
      {name === "building" && (
        <>
          <path d="M3 21V9l9-6 9 6v12" />
          <path d="M9 21v-6h6v6" />
        </>
      )}
      {name === "chart" && (
        <>
          <path d="M4 20V10" />
          <path d="M10 20V4" />
          <path d="M16 20v-7" />
          <path d="M22 20H2" />
        </>
      )}
    </Svg>
  );
}

export function SampleGlyph({ name, color }: { name: SampleIcon; color: string }) {
  return (
    <Svg size={56} color={color} strokeWidth={1.3}>
      {name === "doc" && (
        <>
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
          <path d="M14 3v5h5" />
          <path d="M9 13h6" />
          <path d="M9 17h4" />
        </>
      )}
      {name === "cards" && (
        <>
          <rect x="7" y="4" width="12" height="16" rx="2" />
          <path d="M4 7.5 7 6.7" />
          <path d="M4.6 18.2 4 9" />
          <path d="M13 10.5c-1.5-1.5-3 0-1.8 1.4L13 14l1.8-2.1c1.2-1.4-.3-2.9-1.8-1.4" />
        </>
      )}
      {name === "ball" && (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="m12 7 4 3-1.5 4.5h-5L8 10Z" />
          <path d="M12 7V3.5" />
          <path d="m16 10 3.5-1" />
          <path d="m14.5 14.5 2 3" />
          <path d="m9.5 14.5-2 3" />
          <path d="M8 10 4.5 9" />
        </>
      )}
      {name === "chart" && (
        <>
          <path d="M3 3v18h18" />
          <path d="m7 15 4-4 3 3 6-7" />
          <path d="M16 7h4v4" />
        </>
      )}
      {name === "coin" && (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M9.5 8h4a2 2 0 0 1 0 4h-4Z" />
          <path d="M9.5 12h4.5a2 2 0 0 1 0 4H9.5Z" />
          <path d="M11 6.5V8" />
          <path d="M11 16v1.5" />
        </>
      )}
      {name === "scale" && (
        <>
          <path d="M12 3v18" />
          <path d="M7 21h10" />
          <path d="M4 7h16" />
          <path d="m4 7-2.5 6a3 3 0 0 0 5 0Z" />
          <path d="m20 7-2.5 6a3 3 0 0 0 5 0Z" />
        </>
      )}
      {name === "phone" && (
        <>
          <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
          <path d="M11 18h2" />
          <path d="M9 8h6" />
          <path d="M9 11h4" />
        </>
      )}
    </Svg>
  );
}
