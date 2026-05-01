import type { SkillWithOwner } from "@/lib/types";
import SkillCard from "./SkillCard";

export default function SkillGrid({ skills }: { skills: SkillWithOwner[] }) {
  if (skills.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center text-wenex-muted">
        No hay habilidades que coincidan con tu búsqueda.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {skills.map((skill) => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </div>
  );
}
