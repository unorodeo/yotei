import "@/app/globals.css";

import { auroraPro, geistMono, geistSans } from "@/lib/fonts";

import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: {
    template: "%s | The simple theme generator.",
    default: `${siteConfig.name} | Create and manage themes with ease.`,
  },
  description: "Create and manage themes with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={cn(
          "relative font-geist-sans antialiased",
          geistSans.variable,
          geistMono.variable,
          auroraPro.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

