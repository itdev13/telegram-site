"use client";

import { useEffect, useState } from "react";

const MARKETPLACE_URL = "https://marketplace.gohighlevel.com/integration/YOUR_TELESYNC_ID";
const OAUTH_URL = "https://telesyncapi.vaultsuite.store/oauth/authorize";

interface InstallButtonProps {
  variant?: "primary" | "secondary" | "tertiary" | "outline";
  size?: "default" | "large";
  className?: string;
  target?: string;
  children: React.ReactNode;
}

export function InstallButton({
  variant = "primary",
  size = "default",
  className = "",
  target,
  children,
}: InstallButtonProps) {
  const [href, setHref] = useState(MARKETPLACE_URL);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const source = params.get("source");
    const campaign = params.get("campaign");

    if (source) {
      const url = new URL(OAUTH_URL);
      url.searchParams.set("ref", source);
      if (campaign) url.searchParams.set("campaign", campaign);
      setHref(url.toString());
    } else {
      setHref(MARKETPLACE_URL);
    }
  }, []);

  const base =
    "inline-flex items-center justify-center font-semibold border-2 border-black rounded-xl transition-all duration-150 hover:translate-x-[-4px] hover:translate-y-[-4px] cursor-pointer";

  const variants: Record<string, string> = {
    primary: "bg-[#FF7F4A] text-white hover:shadow-[8px_8px_0_0_#000]",
    secondary: "bg-[#FFE711] text-black hover:shadow-[8px_8px_0_0_#000]",
    tertiary: "bg-[#0088CC] text-white hover:shadow-[8px_8px_0_0_#000]",
    outline: "bg-white text-black hover:shadow-[8px_8px_0_0_#000]",
  };

  const sizes: Record<string, string> = {
    default: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };

  return (
    <a
      href={href}
      target={target}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  );
}
