"use client";

import {
  Home,
  TrendingUp,
  Repeat,
  MapPin,
  Compass,
  Star,
  History,
  Bookmark,
  Users,
  Settings,
  HelpCircle,
  X,
  type LucideIcon,
} from "lucide-react";
import { CATEGORY_LABELS, type Category } from "@/lib/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface NavItem {
  icon: LucideIcon;
  label: string;
  href: string;
  highlight?: boolean;
}

const PRIMARY_NAV: NavItem[] = [
  { icon: Home, label: "Inicio", href: "/" },
  { icon: Compass, label: "Explorar", href: "/explore" },
  { icon: TrendingUp, label: "Tendencias", href: "/trending" },
];

const TRIBE_NAV: NavItem[] = [
  { icon: Star, label: "Mi Evolución", href: "/me", highlight: true },
  { icon: Repeat, label: "Mercado de Trueque", href: "/marketplace" },
  { icon: MapPin, label: "Habilidades Locales", href: "/local" },
  { icon: Users, label: "Mi Tribu", href: "/tribe" },
];

const LIBRARY_NAV: NavItem[] = [
  { icon: History, label: "Historial", href: "/history" },
  { icon: Bookmark, label: "Guardadas", href: "/saved" },
];

const FOOTER_NAV: NavItem[] = [
  { icon: Settings, label: "Ajustes", href: "/settings" },
  { icon: HelpCircle, label: "Ayuda", href: "/help" },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (isMobile) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  return (
    <>
      {open && (
        <button
          aria-label="Cerrar menú"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
        />
      )}

      <aside
        className={`safe-pt fixed left-0 top-0 z-50 h-[100dvh] w-72 max-w-[85vw] shrink-0 overflow-y-auto border-r border-wenex-border bg-wenex-bg transition-transform duration-200 md:sticky md:top-14 md:z-auto md:h-[calc(100dvh-3.5rem)] md:max-w-none md:translate-x-0 md:transition-[width] ${
          open ? "translate-x-0 md:w-60" : "-translate-x-full md:w-16 md:translate-x-0"
        }`}
        aria-label="Navegación principal"
      >
        <div className="flex h-14 items-center justify-between px-3 md:hidden">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-wenex-accent to-fuchsia-600 text-sm font-bold">
              W
            </div>
            <span className="text-lg font-semibold">Wenex</span>
          </a>
          <button
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-wenex-surface active:bg-wenex-border"
            aria-label="Cerrar menú"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="safe-pb flex flex-col gap-1 p-2">
          <NavSection items={PRIMARY_NAV} expanded={open} onNavigate={onClose} />
          <Divider expanded={open} />
          <NavSection
            items={TRIBE_NAV}
            expanded={open}
            title="Tribu"
            onNavigate={onClose}
          />
          <Divider expanded={open} />
          <NavSection
            items={LIBRARY_NAV}
            expanded={open}
            title="Biblioteca"
            onNavigate={onClose}
          />
          {open && (
            <>
              <Divider expanded={open} />
              <CategoryList onNavigate={onClose} />
            </>
          )}
          <Divider expanded={open} />
          <NavSection items={FOOTER_NAV} expanded={open} onNavigate={onClose} />
        </nav>
      </aside>
    </>
  );
}

function NavSection({
  items,
  expanded,
  title,
  onNavigate,
}: {
  items: NavItem[];
  expanded: boolean;
  title?: string;
  onNavigate: () => void;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      {expanded && title && (
        <h3 className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-wenex-muted">
          {title}
        </h3>
      )}
      {items.map((item) => (
        <NavLink
          key={item.href}
          item={item}
          expanded={expanded}
          onNavigate={onNavigate}
        />
      ))}
    </div>
  );
}

function NavLink({
  item,
  expanded,
  onNavigate,
}: {
  item: NavItem;
  expanded: boolean;
  onNavigate: () => void;
}) {
  const Icon = item.icon;
  const router = useRouter();

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    if (window.matchMedia("(max-width: 767px)").matches) {
      onNavigate();
    }
    router.push(item.href);
  }

  const tone = item.highlight
    ? "text-wenex-accent hover:text-wenex-accentHover"
    : "text-wenex-text";
  return (
    <a
      href={item.href}
      onClick={handleClick}
      className={`flex min-h-[44px] items-center gap-4 rounded-lg px-3 text-sm transition hover:bg-wenex-surface active:bg-wenex-border ${tone} ${
        expanded ? "" : "md:justify-center"
      }`}
      title={!expanded ? item.label : undefined}
    >
      <Icon size={20} className="shrink-0" />
      {expanded && <span className="truncate">{item.label}</span>}
    </a>
  );
}

function Divider({ expanded }: { expanded: boolean }) {
  if (!expanded) return <div className="my-2 h-px bg-wenex-border md:hidden" />;
  return <div className="my-2 h-px bg-wenex-border" />;
}

function CategoryList({ onNavigate }: { onNavigate: () => void }) {
  const router = useRouter();
  const params = useSearchParams();
  const active = params.get("cat") ?? "ALL";
  const categories = Object.entries(CATEGORY_LABELS) as [Category, string][];

  function selectCategory(key: Category | "ALL") {
    const next = new URLSearchParams(params.toString());
    if (key === "ALL") next.delete("cat");
    else next.set("cat", key);
    router.push(`/${next.toString() ? `?${next}` : ""}`);
    if (window.matchMedia("(max-width: 767px)").matches) {
      onNavigate();
    }
  }

  return (
    <div className="flex flex-col gap-0.5">
      <h3 className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-wenex-muted">
        Categorías
      </h3>
      {categories.map(([key, label]) => (
        <button
          key={key}
          onClick={() => selectCategory(key)}
          className={`flex min-h-[44px] items-center gap-4 rounded-lg px-3 text-left text-sm transition hover:bg-wenex-surface active:bg-wenex-border ${
            active === key ? "bg-wenex-surface text-white" : "text-wenex-text"
          }`}
        >
          <span className="truncate">{label}</span>
        </button>
      ))}
    </div>
  );
}
