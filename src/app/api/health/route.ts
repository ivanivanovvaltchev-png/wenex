// =====================================================
//  Health check — útil para verificar conexión a BD
//  Visita /api/health tras desplegar para confirmar.
// =====================================================

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const userCount = await prisma.user.count();
    const skillCount = await prisma.skill.count();
    return NextResponse.json({
      status: "ok",
      database: "connected",
      users: userCount,
      skills: skillCount,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        database: "disconnected",
        message: error instanceof Error ? error.message : "unknown",
      },
      { status: 500 }
    );
  }
}
