// =====================================================
//  Tipos y constantes UI
//  Re-exportamos los tipos generados por Prisma para
//  usarlos en componentes sin acoplarnos al cliente.
// =====================================================

import type { Category, Modality, Skill, User } from "@prisma/client";

export type { Category, Modality, Skill, User };

// Skill con su owner cargado (lo que muestra el feed)
export type SkillWithOwner = Skill & {
  owner: Pick<
    User,
    | "id"
    | "username"
    | "displayName"
    | "name"
    | "image"
    | "reputationScore"
    | "totalReviews"
    | "city"
  >;
};

export const CATEGORY_LABELS: Record<Category, string> = {
  CRAFTS: "Artesanía",
  TECH: "Tecnología",
  WELLNESS: "Bienestar",
  MUSIC: "Música",
  LANGUAGES: "Idiomas",
  COOKING: "Cocina",
  ART: "Arte",
  SPORTS: "Deportes",
  BUSINESS: "Negocios",
  SCIENCE: "Ciencia",
};

export const MODALITY_LABELS: Record<Modality, string> = {
  ONLINE: "Online",
  IN_PERSON: "Presencial",
  HYBRID: "Híbrido",
};
