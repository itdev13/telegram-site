import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "TeleSync - Telegram Integration for GoHighLevel",
  description:
    "Connect Telegram to GoHighLevel. Send and receive messages, automate workflows with 6 triggers and 11 actions. Two-way Telegram-GHL sync for agencies.",
  icons: {
    icon: "/telesync-icon.svg",
  },
  keywords: [
    "GoHighLevel Telegram",
    "GHL Telegram integration",
    "Telegram bot GoHighLevel",
    "GHL workflow automation",
    "Telegram CRM integration",
    "GHL marketplace",
  ],
  openGraph: {
    title: "TeleSync - Telegram Integration for GoHighLevel",
    description:
      "Connect Telegram to GoHighLevel. Two-way messaging, workflow triggers & actions, group broadcasting — all from your GHL dashboard.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" style={{ colorScheme: "light" }}>
      <body className={`${caveat.variable} antialiased bg-[#FFF9EB] text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
