"use client";

import { CATEGORY_LABELS, type Category } from "@/lib/types";
import { useRouter, useSearchParams } from "next/navigation";

const CHIPS: ("ALL" | Category)[] = [
  "ALL",
  "TECH",
  "CRAFTS",
  "WELLNESS",
  "MUSIC",
  "LANGUAGES",
  "COOKING",
  "ART",
  "SPORTS",
  "BUSINESS",
  "SCIENCE",
];

const CHIP_LABELS: Record<"ALL" | Category, string> = {
  ALL: "Todo",
  ...CATEGORY_LABELS,
};

export default function CategoryChips() {
  const router = useRouter();
  const params = useSearchParams();
  const active = (params.get("cat") ?? "ALL") as "ALL" | Category;

  function selectChip(chip: "ALL" | Category) {
    const next = new URLSearchParams(params.toString());
    if (chip === "ALL") next.delete("cat");
    else next.set("cat", chip);
    router.push(`/${next.toString() ? `?${next}` : ""}`);
  }

  return (
    <div className="chip-row sticky top-14 z-30 flex gap-3 overflow-x-auto border-b border-wenex-border bg-wenex-bg px-4 py-3">
      {CHIPS.map((chip) => {
        const isActive = chip === active;
        return (
          <button
            key={chip}
            onClick={() => selectChip(chip)}
            className={`shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium transition ${
              isActive
                ? "bg-wenex-text text-wenex-bg"
                : "bg-wenex-surface text-wenex-text hover:bg-wenex-border"
            }`}
          >
            {CHIP_LABELS[chip]}
          </button>
        );
      })}
    </div>
  );
}
