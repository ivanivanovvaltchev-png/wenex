"use client";

import { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    setSidebarOpen(isDesktop);
  }, []);

  function toggleSidebar() {
    setSidebarOpen((v) => !v);
  }

  function closeSidebar() {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 767px)").matches) {
      setSidebarOpen(false);
    }
  }

  return (
    <>
      <Header onToggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar open={sidebarOpen} onClose={closeSidebar} />
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </>
  );
}
