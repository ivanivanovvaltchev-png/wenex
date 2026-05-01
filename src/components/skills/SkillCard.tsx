import Image from "next/image";
import { Repeat, Star, MapPin } from "lucide-react";
import {
  CATEGORY_LABELS,
  MODALITY_LABELS,
  type SkillWithOwner,
} from "@/lib/types";

export default function SkillCard({ skill }: { skill: SkillWithOwner }) {
  const ownerName = skill.owner.displayName ?? skill.owner.name ?? "Mentor";
  const ownerImg = skill.owner.image ?? "https://i.pravatar.cc/150?img=1";

  return (
    <article className="group flex cursor-pointer flex-col gap-3">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-wenex-surface">
        <Image
          src={skill.thumbnailUrl}
          alt={skill.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <span className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-xs font-medium tabular-nums">
          {formatDuration(skill.durationMinutes)}
        </span>
        <span className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-wenex-gold/90 px-2 py-0.5 text-xs font-bold text-black">
          <span aria-hidden>⚡</span>
          <span>{skill.creditCost}</span>
        </span>
        <span className="absolute right-2 top-2 rounded-full bg-black/70 px-2 py-0.5 text-xs">
          {MODALITY_LABELS[skill.modality]}
        </span>
      </div>

      <div className="flex gap-3">
        <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-wenex-surface">
          <Image
            src={ownerImg}
            alt={ownerName}
            fill
            sizes="36px"
            className="object-cover"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <h3 className="line-clamp-2 text-[15px] font-semibold leading-snug text-wenex-text sm:text-sm">
            {skill.title}
          </h3>

          <div className="flex flex-wrap items-center gap-x-1 gap-y-0.5 text-xs text-wenex-muted">
            <span className="truncate hover:text-wenex-text">{ownerName}</span>
            {skill.owner.city && (
              <>
                <span aria-hidden>·</span>
                <MapPin size={11} className="shrink-0" aria-hidden />
                <span className="truncate">{skill.owner.city}</span>
              </>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-wenex-muted">
            <span className="flex items-center gap-0.5">
              <Star
                size={12}
                className="fill-wenex-gold text-wenex-gold"
                aria-hidden
              />
              <span className="font-medium text-wenex-text tabular-nums">
                {skill.owner.reputationScore.toFixed(1)}
              </span>
              <span className="tabular-nums">({skill.owner.totalReviews})</span>
            </span>
            <span aria-hidden>·</span>
            <span className="tabular-nums">
              {formatViews(skill.views)} visitas
            </span>
          </div>

          <div className="mt-1 flex items-start gap-1.5 rounded-md border border-wenex-accent/20 bg-wenex-accent/5 px-2 py-1.5">
            <Repeat
              size={13}
              className="mt-0.5 shrink-0 text-wenex-accent"
              aria-hidden
            />
            <p className="line-clamp-2 text-xs leading-snug text-wenex-text">
              <span className="font-semibold text-wenex-accent">Busca:</span>{" "}
              {skill.seeking}
            </p>
          </div>

          <span className="mt-1 inline-block w-fit rounded-full bg-wenex-surface px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-wenex-muted">
            {CATEGORY_LABELS[skill.category]}
          </span>
        </div>
      </div>
    </article>
  );
}

function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes}m`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
}

function formatViews(views: number): string {
  if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
  return views.toString();
}
