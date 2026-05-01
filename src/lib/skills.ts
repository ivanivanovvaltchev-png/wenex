// =====================================================
//  Queries de habilidades — capa de acceso a datos
//  Toda lectura de Skill pasa por aquí. Si más adelante
//  metemos cache, búsqueda full-text o ranking, este es
//  el único archivo que cambia.
// =====================================================

import { prisma } from "./prisma";
import type { Category, SkillWithOwner } from "./types";

interface GetSkillsOptions {
  category?: Category | "ALL";
  search?: string;
  city?: string;
  limit?: number;
}

export async function getSkills(
  options: GetSkillsOptions = {}
): Promise<SkillWithOwner[]> {
  const { category, search, city, limit = 50 } = options;

  return prisma.skill.findMany({
    where: {
      isActive: true,
      ...(category && category !== "ALL" ? { category } : {}),
      ...(city ? { owner: { city: { equals: city, mode: "insensitive" } } } : {}),
      ...(search
        ? {
            OR: [
              { title: { contains: search, mode: "insensitive" } },
              { description: { contains: search, mode: "insensitive" } },
              { seeking: { contains: search, mode: "insensitive" } },
            ],
          }
        : {}),
    },
    include: {
      owner: {
        select: {
          id: true,
          username: true,
          displayName: true,
          name: true,
          image: true,
          reputationScore: true,
          totalReviews: true,
          city: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
    take: limit,
  });
}
