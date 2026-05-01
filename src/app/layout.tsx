import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import "./globals.css";
import AppShell from "@/components/layout/AppShell";

export const metadata: Metadata = {
  title: "Wenex — La red de evolución humana",
  description:
    "Intercambia habilidades reales. Enseña lo que sabes, aprende lo que necesitas. La economía del conocimiento sin dinero de por medio.",
  metadataBase: new URL("https://wenex.app"),
  applicationName: "Wenex",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Wenex",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0f0f0f",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        <Suspense fallback={null}>
          <AppShell>{children}</AppShell>
        </Suspense>
      </body>
    </html>
  );
}
