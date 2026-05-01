"use client";

import { Search, Menu, Bell, Plus } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

interface HeaderProps {
  onToggleSidebar: () => void;
  evolutionCredits?: number;
}

export default function Header({
  onToggleSidebar,
  evolutionCredits = 24,
}: HeaderProps) {
  const router = useRouter();
  const params = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");

  useEffect(() => {
    setQuery(params.get("q") ?? "");
  }, [params]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    const category = params.get("cat") ?? "";
    const url = new URLSearchParams();
    if (q) url.set("q", q);
    if (category) url.set("cat", category);
    router.push(`/${url.toString() ? `?${url}` : ""}`);
  }

  return (
    <header className="sticky top-0 z-40 flex h-14 items-center gap-4 border-b border-wenex-border bg-wenex-bg/95 px-4 backdrop-blur">
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="rounded-full p-2 transition hover:bg-wenex-surface"
          aria-label="Alternar menú"
        >
          <Menu size={22} />
        </button>
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-wenex-accent to-fuchsia-600 font-bold">
            W
          </div>
          <span className="hidden text-lg font-semibold tracking-tight sm:inline">
            Wenex
          </span>
        </a>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto flex w-full max-w-2xl items-center"
      >
        <div className="flex flex-1 items-center rounded-l-full border border-wenex-border bg-wenex-surface focus-within:border-wenex-accent">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar habilidades, mentores, ciudades..."
            className="w-full bg-transparent px-4 py-2 text-sm outline-none placeholder:text-wenex-muted"
          />
        </div>
        <button
          type="submit"
          className="flex h-9 items-center rounded-r-full border border-l-0 border-wenex-border bg-wenex-surface px-5 transition hover:bg-wenex-border"
          aria-label="Buscar"
        >
          <Search size={18} />
        </button>
      </form>

      <div className="flex items-center gap-2">
        <button className="hidden items-center gap-2 rounded-full bg-wenex-surface px-3 py-1.5 text-sm transition hover:bg-wenex-border md:flex">
          <Plus size={16} />
          <span>Ofrecer habilidad</span>
        </button>

        <div
          className="flex items-center gap-1.5 rounded-full border border-wenex-gold/30 bg-wenex-gold/10 px-3 py-1.5 text-sm font-medium text-wenex-gold"
          title="Créditos de Evolución"
        >
          <span className="text-base leading-none">⚡</span>
          <span>{evolutionCredits}</span>
        </div>

        <button
          className="rounded-full p-2 transition hover:bg-wenex-surface"
          aria-label="Notificaciones"
        >
          <Bell size={20} />
        </button>

        <div
          className="h-8 w-8 rounded-full bg-gradient-to-br from-wenex-accent to-pink-500"
          aria-label="Perfil"
        />
      </div>
    </header>
  );
}
