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
  type LucideIcon,
} from "lucide-react";
import { CATEGORY_LABELS, type Category } from "@/lib/types";
import { useRouter, useSearchParams } from "next/navigation";

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

export default function Sidebar({ open }: { open: boolean }) {
  return (
    <aside
      className={`sticky top-14 hidden h-[calc(100vh-3.5rem)] shrink-0 overflow-y-auto border-r border-wenex-border bg-wenex-bg transition-all md:block ${
        open ? "w-60" : "w-16"
      }`}
    >
      <nav className="flex flex-col gap-1 p-2">
        <NavSection items={PRIMARY_NAV} expanded={open} />
        {open && <Divider />}
        <NavSection items={TRIBE_NAV} expanded={open} title="Tribu" />
        {open && <Divider />}
        <NavSection items={LIBRARY_NAV} expanded={open} title="Biblioteca" />
        {open && (
          <>
            <Divider />
            <CategoryList />
          </>
        )}
        <Divider />
        <NavSection items={FOOTER_NAV} expanded={open} />
      </nav>
    </aside>
  );
}

function NavSection({
  items,
  expanded,
  title,
}: {
  items: NavItem[];
  expanded: boolean;
  title?: string;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      {expanded && title && (
        <h3 className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-wenex-muted">
          {title}
        </h3>
      )}
      {items.map((item) => (
        <NavLink key={item.href} item={item} expanded={expanded} />
      ))}
    </div>
  );
}

function NavLink({ item, expanded }: { item: NavItem; expanded: boolean }) {
  const Icon = item.icon;
  const base =
    "flex items-center gap-4 rounded-lg px-3 py-2 text-sm transition hover:bg-wenex-surface";
  const tone = item.highlight
    ? "text-wenex-accent hover:text-wenex-accentHover"
    : "text-wenex-text";
  return (
    <a
      href={item.href}
      className={`${base} ${tone} ${expanded ? "" : "justify-center"}`}
      title={!expanded ? item.label : undefined}
    >
      <Icon size={20} className="shrink-0" />
      {expanded && <span className="truncate">{item.label}</span>}
    </a>
  );
}

function Divider() {
  return <div className="my-2 h-px bg-wenex-border" />;
}

function CategoryList() {
  const router = useRouter();
  const params = useSearchParams();
  const active = params.get("cat") ?? "ALL";
  const categories = Object.entries(CATEGORY_LABELS) as [Category, string][];

  function selectCategory(key: Category | "ALL") {
    const next = new URLSearchParams(params.toString());
    if (key === "ALL") next.delete("cat");
    else next.set("cat", key);
    router.push(`/${next.toString() ? `?${next}` : ""}`);
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
          className={`flex items-center gap-4 rounded-lg px-3 py-2 text-left text-sm transition hover:bg-wenex-surface ${
            active === key ? "bg-wenex-surface text-white" : "text-wenex-text"
          }`}
        >
          <span className="truncate">{label}</span>
        </button>
      ))}
    </div>
  );
}
