// =====================================================
//  Home — Feed de Semillas de Habilidad
//  Server Component: los datos se cargan en el servidor
//  desde Postgres, se serializan y se entregan al cliente.
//  Esto es lo que sustituye al mock de antes.
// =====================================================

import { getSkills } from "@/lib/skills";
import type { Category } from "@/lib/types";
import CategoryChips from "@/components/skills/CategoryChips";
import SkillGrid from "@/components/skills/SkillGrid";

export const dynamic = "force-dynamic";

interface HomeProps {
  searchParams: {
    q?: string;
    cat?: string;
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const category = (searchParams.cat ?? "ALL") as Category | "ALL";
  const search = searchParams.q?.trim();

  const skills = await getSkills({ category, search });

  return (
    <>
    <CategoryChips />
    <div className="px-4 py-6">
    {search && (
      <p className="mb-4 text-sm text-wenex-muted">
      {skills.length} resultados para{" "}
      <span className="font-medium text-wenex-text">"{search}"</span>
      </p>
    )}
    <SkillGrid skills={skills} />
    </div>
    </>
  );
}
