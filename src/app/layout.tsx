import type { Metadata } from "next";
import "./globals.css";
import AppShell from "@/components/layout/AppShell";

export const metadata: Metadata = {
  title: "Wenex — La red de evolución humana",
  description:
    "Intercambia habilidades reales. Enseña lo que sabes, aprende lo que necesitas. La economía del conocimiento sin dinero de por medio.",
  metadataBase: new URL("https://wenex.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
