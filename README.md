# Wenex — La red de evolución humana

> El YouTube de las habilidades. Intercambia conocimiento real, gana Créditos de Evolución, construye tu Tribu.

---

## Stack

- **Next.js 14** (App Router, Server Components)
- **TypeScript** estricto
- **PostgreSQL** + **Prisma** (ORM)
- **Tailwind CSS** (tema oscuro)
- **Neon** (Postgres serverless, plan gratis)
- **Vercel** (hosting, plan gratis)

---

## Guía de despliegue (30-45 minutos)

Lee esta guía de principio a fin antes de tocar nada. Si te atascas, dímelo en el chat y lo resolvemos.

### Paso 1 — Crear repositorio en GitHub (3 min)

1. Entra en https://github.com/new
2. Nombre del repo: `wenex` (o el que prefieras)
3. Privado o público, da igual
4. **No** marques "Initialize with README", `.gitignore` ni licencia (los traemos nosotros)
5. Clica **Create repository**
6. GitHub te mostrará una URL tipo `https://github.com/TU_USUARIO/wenex.git` — guárdala

### Paso 2 — Subir el código a GitHub (5 min)

Descomprime el `.zip` que te he dado en una carpeta. Abre una terminal **dentro de esa carpeta** y ejecuta:

```bash
git init
git add .
git commit -m "Wenex Fase 1: cimientos productivos"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/wenex.git
git push -u origin main
```

Si pide login, usa tu usuario y un **Personal Access Token** (no la contraseña). Para crearlo: GitHub > Settings > Developer settings > Personal access tokens > Tokens (classic) > Generate new token, marca el scope `repo`, copia el token y úsalo como contraseña.

### Paso 3 — Crear base de datos en Neon (5 min)

1. Entra en https://neon.tech y regístrate (puedes usar tu cuenta de GitHub)
2. Crea un nuevo proyecto:
   - **Project name**: `wenex`
   - **Database name**: `wenex`
   - **Region**: la más cercana (Frankfurt para España)
3. Cuando esté creado, copia la **Connection string** que aparece en el dashboard. Tendrá esta forma:
   ```
   postgresql://usuario:password@ep-xxx.eu-central-1.aws.neon.tech/wenex?sslmode=require
   ```
4. Guárdala — la usaremos en el siguiente paso.

### Paso 4 — Desplegar en Vercel (10 min)

1. Entra en https://vercel.com/new
2. Importa el repo `wenex` que acabas de subir a GitHub
3. **Framework Preset**: Next.js (lo detecta automáticamente)
4. Despliega las **Environment Variables** (clave-valor):

   | Variable | Valor |
   |---|---|
   | `DATABASE_URL` | (la connection string de Neon del paso anterior) |
   | `NEXTAUTH_SECRET` | (genera uno con `openssl rand -base64 32` o usa cualquier cadena aleatoria de 40+ caracteres) |
   | `NEXTAUTH_URL` | (déjalo vacío de momento; lo añadimos después con la URL real) |

5. Clica **Deploy**. Tarda 2-3 minutos.
6. Cuando termine, Vercel te dará una URL tipo `https://wenex-tuusuario.vercel.app`. Cópiala.
7. Vuelve a **Settings → Environment Variables** y añade:
   - `NEXTAUTH_URL` = la URL que te dio Vercel
8. Re-despliega: **Deployments → últimos tres puntos → Redeploy**.

### Paso 5 — Sembrar la base de datos (5 min)

Con la BD vacía, Wenex no muestra nada. Hay que sembrar las 12 habilidades. Tienes dos opciones:

**Opción A — desde tu ordenador (recomendado)**

```bash
# Dentro de la carpeta del proyecto
npm install
echo 'DATABASE_URL="<la URL de Neon>"' > .env.local
npx prisma db push
npm run db:seed
```

`prisma db push` crea las tablas en Neon a partir de `schema.prisma`. `npm run db:seed` mete los 12 usuarios y habilidades.

**Opción B — solo si no quieres tocar tu terminal**

Vercel no permite ejecutar seeds en producción de forma nativa. Si prefieres no tocar tu terminal local, dímelo en el chat y monto un endpoint protegido `/api/seed` que puedes llamar una sola vez con un token secreto.

### Paso 6 — Verificar que todo funciona (2 min)

1. Abre `https://tu-url.vercel.app/api/health` — debe devolver `users: 12, skills: 12`
2. Abre `https://tu-url.vercel.app/` — debes ver las 12 habilidades en el feed
3. Prueba a buscar "Granada" o "Python" en la barra superior
4. Prueba a clicar una categoría en el sidebar

**Si todo funciona: enhorabuena, Wenex está vivo en producción 24/7.**

---

## Comandos útiles para desarrollo local

```bash
npm install              # Instala dependencias
npm run dev              # Servidor local en http://localhost:3000
npm run db:studio        # GUI para ver/editar la BD (Prisma Studio)
npm run db:push          # Aplica cambios del schema a la BD
npm run db:seed          # Resembra la BD (borra y vuelve a crear)
npm run build            # Build de producción
```

---

## Estructura del proyecto

```
wenex/
├── prisma/
│   ├── schema.prisma      # Modelo de datos (User, Skill, Review, Exchange)
│   └── seed.ts            # Carga inicial de 12 usuarios + 12 habilidades
├── src/
│   ├── app/
│   │   ├── layout.tsx     # Layout raíz: AppShell + metadata
│   │   ├── page.tsx       # Home: feed conectado a BD
│   │   ├── globals.css    # Tailwind + scrollbar oscura
│   │   └── api/health/    # Endpoint de salud
│   ├── components/
│   │   ├── layout/        # Header, Sidebar, AppShell
│   │   └── skills/        # SkillCard, SkillGrid, CategoryChips
│   └── lib/
│       ├── prisma.ts      # Cliente Prisma singleton
│       ├── skills.ts      # Queries de skills (filtro/búsqueda)
│       └── types.ts       # Tipos compartidos + labels UI
└── ...                    # Configs (tailwind, ts, next, etc.)
```

---

## Qué viene en Fase 2

- Subida de **Proof of Skill** (vídeo de 60s) con UploadThing
- Página de detalle `/skill/[id]` con reseñas
- Formulario `/publish` para que usuarios logueados publiquen habilidades
- Página de perfil `/profile/[username]`
- Login con Google + email mágico (NextAuth completo)

Cuando hayas verificado que la Fase 1 funciona en `tu-url.vercel.app`, dímelo en el chat y arrancamos la Fase 2.
