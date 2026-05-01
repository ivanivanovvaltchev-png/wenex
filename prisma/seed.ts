// =====================================================
//  Wenex — Seed de la base de datos
//  Crea 12 usuarios + 12 habilidades de ejemplo.
//  Ejecutar con: npm run db:seed
// =====================================================

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const SEED_DATA = [
  {
    user: {
      email: "marcos@wenex.app",
      username: "ironforge_marcos",
      name: "Marcos Herrero",
      displayName: "Marcos Herrero",
      image: "https://i.pravatar.cc/150?img=12",
      city: "Toledo",
      country: "ES",
      reputationScore: 4.9,
      totalReviews: 47,
      evolutionCredits: 23,
    },
    skill: {
      title: "Forja artesanal de cuchillos en acero damasco",
      description:
        "Aprende a forjar tu primer cuchillo desde el lingote. Técnica tradicional pasada de herrero a herrero.",
      category: "CRAFTS" as const,
      seeking: "Clases de Python para análisis de datos",
      creditCost: 3,
      thumbnailUrl:
        "https://images.unsplash.com/photo-1605196560547-b2f7281b8355?w=800&q=80",
      modality: "IN_PERSON" as const,
      durationMinutes: 180,
      views: 2847,
      endorsements: 312,
    },
  },
  {
    user: {
      email: "elena@wenex.app",
      username: "elena.codes",
      name: "Elena Vargas",
      displayName: "Elena Vargas",
      image: "https://i.pravatar.cc/150?img=47",
      city: "Granada",
      country: "ES",
      reputationScore: 4.8,
      totalReviews: 132,
      evolutionCredits: 41,
    },
    skill: {
      title: "Programación en Python: de cero a tu primer scraper",
      description:
        "Curso intensivo de 4 sesiones. Sintaxis, requests, BeautifulSoup y pandas. Proyecto final real.",
      category: "TECH" as const,
      seeking: "Carpintería básica para hacer mi propio escritorio",
      creditCost: 4,
      thumbnailUrl:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80",
      modality: "ONLINE" as const,
      durationMinutes: 240,
      views: 8521,
      endorsements: 974,
    },
  },
  {
    user: {
      email: "sergi@wenex.app",
      username: "sergi_mind",
      name: "Sergi Roca",
      displayName: "Sergi Roca",
      image: "https://i.pravatar.cc/150?img=33",
      city: "Barcelona",
      country: "ES",
      reputationScore: 5.0,
      totalReviews: 89,
      evolutionCredits: 18,
    },
    skill: {
      title: "Meditación Vipassana para principiantes",
      description:
        "Introducción a la observación consciente. 8 sesiones guiadas para construir un hábito sólido.",
      category: "WELLNESS" as const,
      seeking: "Producción musical electrónica con Ableton",
      creditCost: 2,
      thumbnailUrl:
        "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80",
      modality: "HYBRID" as const,
      durationMinutes: 60,
      views: 4203,
      endorsements: 521,
    },
  },
  {
    user: {
      email: "jordi@wenex.app",
      username: "taller_jordi",
      name: "Jordi Puig",
      displayName: "Jordi Puig",
      image: "https://i.pravatar.cc/150?img=59",
      city: "Valencia",
      country: "ES",
      reputationScore: 4.7,
      totalReviews: 64,
      evolutionCredits: 12,
    },
    skill: {
      title: "Carpintería: construye tu primera mesa robusta",
      description:
        "De la tabla cruda a una mesa que durará décadas. Uniones, lijado, acabado al aceite.",
      category: "CRAFTS" as const,
      seeking: "Diseño UX/UI para mi web de productos artesanales",
      creditCost: 5,
      thumbnailUrl:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      modality: "IN_PERSON" as const,
      durationMinutes: 300,
      views: 1972,
      endorsements: 248,
    },
  },
  {
    user: {
      email: "lucia@wenex.app",
      username: "lucia_flamenco",
      name: "Lucía Heredia",
      displayName: "Lucía Heredia",
      image: "https://i.pravatar.cc/150?img=44",
      city: "Sevilla",
      country: "ES",
      reputationScore: 4.9,
      totalReviews: 76,
      evolutionCredits: 27,
    },
    skill: {
      title: "Guitarra flamenca: rasgueo y compás por bulerías",
      description:
        "Sesiones uno a uno. Empezamos por el compás de 12 y avanzamos a falsetas reales.",
      category: "MUSIC" as const,
      seeking: "Inglés conversacional avanzado (preparación C1)",
      creditCost: 3,
      thumbnailUrl:
        "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&q=80",
      modality: "ONLINE" as const,
      durationMinutes: 75,
      views: 3104,
      endorsements: 412,
    },
  },
  {
    user: {
      email: "ren@wenex.app",
      username: "ren_sensei",
      name: "Ren Tanaka",
      displayName: "Ren Tanaka",
      image: "https://i.pravatar.cc/150?img=68",
      city: "Madrid",
      country: "ES",
      reputationScore: 4.95,
      totalReviews: 203,
      evolutionCredits: 56,
    },
    skill: {
      title: "Japonés desde cero: hiragana, katakana y conversación",
      description:
        "Método inmersivo basado en frases reales. 12 sesiones estructuradas con material descargable.",
      category: "LANGUAGES" as const,
      seeking: "Clases de cocina española tradicional",
      creditCost: 4,
      thumbnailUrl:
        "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80",
      modality: "ONLINE" as const,
      durationMinutes: 60,
      views: 5847,
      endorsements: 689,
    },
  },
  {
    user: {
      email: "iker@wenex.app",
      username: "iker_sukaldari",
      name: "Iker Etxebarria",
      displayName: "Iker Etxebarria",
      image: "https://i.pravatar.cc/150?img=15",
      city: "Bilbao",
      country: "ES",
      reputationScore: 4.85,
      totalReviews: 58,
      evolutionCredits: 19,
    },
    skill: {
      title: "Cocina vasca: pintxos y bacalao al pil-pil auténticos",
      description:
        "Tres recetas icónicas en una sesión. Aprende los trucos que solo se transmiten en la cuadrilla.",
      category: "COOKING" as const,
      seeking: "Fotografía gastronómica para mi blog",
      creditCost: 3,
      thumbnailUrl:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      modality: "IN_PERSON" as const,
      durationMinutes: 180,
      views: 2418,
      endorsements: 287,
    },
  },
  {
    user: {
      email: "anabelen@wenex.app",
      username: "ana_acuarela",
      name: "Ana Belén Cortés",
      displayName: "Ana Belén Cortés",
      image: "https://i.pravatar.cc/150?img=49",
      city: "Málaga",
      country: "ES",
      reputationScore: 4.7,
      totalReviews: 41,
      evolutionCredits: 14,
    },
    skill: {
      title: "Acuarela botánica: flora mediterránea paso a paso",
      description:
        "Técnica húmedo sobre húmedo, control de pigmento, composición. Material no incluido.",
      category: "ART" as const,
      seeking: "Reparación básica de bicicletas",
      creditCost: 2,
      thumbnailUrl:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
      modality: "HYBRID" as const,
      durationMinutes: 120,
      views: 1654,
      endorsements: 198,
    },
  },
  {
    user: {
      email: "pablo@wenex.app",
      username: "pablo_escala",
      name: "Pablo Mendoza",
      displayName: "Pablo Mendoza",
      image: "https://i.pravatar.cc/150?img=22",
      city: "Granada",
      country: "ES",
      reputationScore: 4.8,
      totalReviews: 72,
      evolutionCredits: 21,
    },
    skill: {
      title: "Escalada deportiva: del pie de vía a tu primer 6a",
      description:
        "Técnica de pies, gestión del peso, lectura de vía. Sesiones en rocódromo o roca real.",
      category: "SPORTS" as const,
      seeking: "Asesoría legal para autónomos",
      creditCost: 3,
      thumbnailUrl:
        "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&q=80",
      modality: "IN_PERSON" as const,
      durationMinutes: 150,
      views: 2891,
      endorsements: 354,
    },
  },
  {
    user: {
      email: "marta@wenex.app",
      username: "marta.growth",
      name: "Marta Solís",
      displayName: "Marta Solís",
      image: "https://i.pravatar.cc/150?img=5",
      city: "Madrid",
      country: "ES",
      reputationScore: 4.75,
      totalReviews: 156,
      evolutionCredits: 38,
    },
    skill: {
      title: "Marketing digital para pequeños negocios locales",
      description:
        "Estrategia, redes, SEO local y email. Plan accionable para tu negocio en 4 sesiones.",
      category: "BUSINESS" as const,
      seeking: "Clases de pintura al óleo",
      creditCost: 4,
      thumbnailUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      modality: "ONLINE" as const,
      durationMinutes: 90,
      views: 6203,
      endorsements: 781,
    },
  },
  {
    user: {
      email: "raul@wenex.app",
      username: "raul_astro",
      name: "Raúl Ferrer",
      displayName: "Raúl Ferrer",
      image: "https://i.pravatar.cc/150?img=11",
      city: "Tenerife",
      country: "ES",
      reputationScore: 4.9,
      totalReviews: 88,
      evolutionCredits: 25,
    },
    skill: {
      title: "Astronomía práctica: leer el cielo nocturno sin telescopio",
      description:
        "Constelaciones, planetas, mecánica celeste básica. Sesión teórica + observación nocturna.",
      category: "SCIENCE" as const,
      seeking: "Clases de salsa cubana",
      creditCost: 2,
      thumbnailUrl:
        "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80",
      modality: "HYBRID" as const,
      durationMinutes: 120,
      views: 3567,
      endorsements: 459,
    },
  },
  {
    user: {
      email: "noa@wenex.app",
      username: "noa_synth",
      name: "Noa Castillo",
      displayName: "Noa Castillo",
      image: "https://i.pravatar.cc/150?img=23",
      city: "Valencia",
      country: "ES",
      reputationScore: 4.85,
      totalReviews: 94,
      evolutionCredits: 32,
    },
    skill: {
      title: "Producción musical electrónica con Ableton Live",
      description:
        "De idea a track terminado: composición, arreglo, mezcla y mastering básico. Ableton Suite.",
      category: "MUSIC" as const,
      seeking: "Meditación guiada para gestionar la ansiedad",
      creditCost: 4,
      thumbnailUrl:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
      modality: "ONLINE" as const,
      durationMinutes: 120,
      views: 4128,
      endorsements: 538,
    },
  },
];

async function main() {
  console.log("🌱 Sembrando Wenex...");

  // Limpiar datos previos en orden de dependencias
  await prisma.review.deleteMany();
  await prisma.exchange.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.user.deleteMany({
    where: { email: { endsWith: "@wenex.app" } },
  });

  for (const seed of SEED_DATA) {
    const user = await prisma.user.create({ data: seed.user });
    await prisma.skill.create({
      data: { ...seed.skill, ownerId: user.id },
    });
    console.log(`  ✓ ${seed.user.displayName} — ${seed.skill.title}`);
  }

  console.log("✅ Seed completado: 12 usuarios + 12 habilidades.");
}

main()
  .catch((e) => {
    console.error("❌ Error en seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
