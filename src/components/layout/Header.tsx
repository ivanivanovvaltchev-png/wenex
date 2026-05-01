"use client";

import { Search, Menu, Bell, Plus, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";

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
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const mobileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setQuery(params.get("q") ?? "");
  }, [params]);

  useEffect(() => {
    if (mobileSearchOpen && mobileInputRef.current) {
      mobileInputRef.current.focus();
    }
  }, [mobileSearchOpen]);

  function submitQuery(value: string) {
    const q = value.trim();
    const category = params.get("cat") ?? "";
    const url = new URLSearchParams();
    if (q) url.set("q", q);
    if (category) url.set("cat", category);
    router.push(`/${url.toString() ? `?${url}` : ""}`);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    submitQuery(query);
    setMobileSearchOpen(false);
  }

  return (
    <header className="safe-pt sticky top-0 z-40 border-b border-wenex-border bg-wenex-bg/95 backdrop-blur">
      <div className="flex h-14 items-center gap-2 px-2 sm:gap-4 sm:px-4">
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={onToggleSidebar}
            className="flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-wenex-surface active:bg-wenex-border"
            aria-label="Abrir menú"
          >
            <Menu size={22} />
          </button>
          <a
            href="/"
            className="flex items-center gap-2 px-1"
            aria-label="Ir a inicio"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-wenex-accent to-fuchsia-600 text-sm font-bold">
              W
            </div>
            <span className="hidden text-lg font-semibold tracking-tight sm:inline">
              Wenex
            </span>
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto hidden w-full max-w-2xl items-center md:flex"
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

        <div className="flex flex-1 items-center justify-end gap-1 sm:gap-2 md:flex-initial">
          <button
            onClick={() => setMobileSearchOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-wenex-surface active:bg-wenex-border md:hidden"
            aria-label="Buscar"
          >
            <Search size={20} />
          </button>

          <button
            className="hidden items-center gap-2 rounded-full bg-wenex-surface px-3 py-1.5 text-sm transition hover:bg-wenex-border lg:flex"
            aria-label="Ofrecer una habilidad"
          >
            <Plus size={16} />
            <span>Ofrecer habilidad</span>
          </button>

          <button
            className="flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-wenex-surface active:bg-wenex-border lg:hidden"
            aria-label="Ofrecer una habilidad"
          >
            <Plus size={20} />
          </button>

          <div
            className="flex h-9 items-center gap-1.5 rounded-full border border-wenex-gold/30 bg-wenex-gold/10 px-2.5 text-sm font-medium text-wenex-gold sm:px-3"
            title="Créditos de Evolución"
            aria-label={`${evolutionCredits} créditos de evolución`}
          >
            <span className="text-base leading-none" aria-hidden>
              ⚡
            </span>
            <span>{evolutionCredits}</span>
          </div>

          <button
            className="hidden h-11 w-11 items-center justify-center rounded-full transition hover:bg-wenex-surface active:bg-wenex-border sm:flex"
            aria-label="Notificaciones"
          >
            <Bell size={20} />
          </button>

          <button
            className="ml-1 h-9 w-9 shrink-0 rounded-full bg-gradient-to-br from-wenex-accent to-pink-500"
            aria-label="Mi perfil"
          />
        </div>
      </div>

      {mobileSearchOpen && (
        <div
          className="absolute inset-x-0 top-0 z-50 flex h-14 items-center gap-2 border-b border-wenex-border bg-wenex-bg px-2 md:hidden"
          style={{ paddingTop: "var(--safe-top)" }}
        >
          <button
            onClick={() => setMobileSearchOpen(false)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition hover:bg-wenex-surface active:bg-wenex-border"
            aria-label="Cerrar buscador"
          >
            <X size={22} />
          </button>
          <form onSubmit={handleSubmit} className="flex flex-1 items-center">
            <input
              ref={mobileInputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar en Wenex..."
              className="w-full rounded-full border border-wenex-border bg-wenex-surface px-4 py-2.5 text-base outline-none placeholder:text-wenex-muted focus:border-wenex-accent"
              autoComplete="off"
              enterKeyHint="search"
            />
          </form>
          <button
            type="submit"
            onClick={() => {
              submitQuery(query);
              setMobileSearchOpen(false);
            }}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition hover:bg-wenex-surface active:bg-wenex-border"
            aria-label="Buscar"
          >
            <Search size={20} />
          </button>
        </div>
      )}
    </header>
  );
}
