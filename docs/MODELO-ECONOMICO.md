# Wenex — Modelo económico y reglas de la plataforma

> Documento de referencia interna. Contiene el ADN económico de Wenex, las reglas del sistema de WeCoins y la economía dual.
> Última actualización: Mayo 2026 · Versión 1.0

---

## 1. La visión en una frase

Wenex es un marketplace híbrido de habilidades donde los mentores eligen cómo cobran por cada curso, construyen reputación global heredable, y donde el conocimiento de calidad acaba siendo recompensado con euros reales.

---

## 2. Las dos economías de Wenex

Wenex opera dos canales de valor que **nunca se mezclan entre sí**:

### Canal 1 — Trueque (WeCoins)

Los WeCoins son la moneda interna de Wenex. Sirven para:

- Aprender habilidades de otros mentores.
- Construir reputación a través de las reseñas que se generan en cada intercambio.
- Acceder a contenido educativo de la plataforma sin necesidad de aportar dinero.

Los WeCoins **no se convierten en euros bajo ninguna circunstancia**. Son combustible interno, no salario.

### Canal 2 — Pagado (Euros)

Cuando un mentor decide cobrar por su contenido, lo hace en euros directamente. Wenex actúa como pasarela de pago a través de Stripe Connect:

- El aprendiz paga en euros al inscribirse.
- Wenex retiene una comisión del 20%.
- El mentor recibe el 80% restante en su cuenta bancaria, retirable mensualmente.

---

## 3. Los tres modos de cobro

Cada habilidad publicada tiene **uno** de estos tres modos, elegido por el mentor en el momento de la publicación:

### Modo Trueque

- Solo se cobra con WeCoins.
- 0% de comisión para Wenex.
- Pensado para construir reputación, captar audiencia, ofrecer demos o contenido comunitario.
- Es el modo recomendado para mentores que están empezando.

### Modo Pagado

- Solo se cobra con euros.
- El mentor decide el precio.
- Wenex retiene un 20% de comisión.
- Pensado para mentores con reputación ya establecida que quieren monetizar su conocimiento.

### Modo Híbrido

- El mentor define un precio en euros y un precio equivalente en WeCoins.
- El aprendiz elige cómo pagar al inscribirse.
- Wenex retiene el 20% solo cuando el pago es en euros.
- Pensado para mentores que quieren cobrar pero también seguir captando audiencia desde el canal de trueque.

---

## 4. La reputación es global, no por curso

Esta es una decisión clave de diseño:

> Cuando un aprendiz deja una reseña en cualquier curso de un mentor, esa reseña **suma al perfil global del mentor**, no solo al curso concreto.

Consecuencias prácticas:

- Si un mentor tiene 4.8⭐ con 47 reseñas en su curso de trueque y publica un curso pagado, ese nuevo curso pagado **hereda** la reputación del perfil. El aprendiz nuevo ve "Mentor con 4.8⭐ (47 reseñas)" desde el primer minuto.
- La reputación es un activo del mentor, no del curso. Si un curso queda obsoleto, la reputación viaja con el mentor a su siguiente publicación.
- Esto incentiva a los mentores a mantener al menos un curso de "demo eterna" en modo trueque, porque cada nueva reseña sigue alimentando su perfil global y por tanto sus cursos pagados.

---

## 5. El recorrido natural del mentor

El camino esperado para un mentor en Wenex es progresivo:

1. **Llegada**. Se registra. Recibe 15 WeCoins de bienvenida.
2. **Cursos demo**. Publica su primera habilidad en modo trueque. Enseña a varios aprendices, recibe reseñas.
3. **Reputación construida**. Después de varias reseñas (4.5⭐ o más, mínimo 10 reseñas), su perfil tiene credibilidad demostrable.
4. **Modo híbrido**. Publica un nuevo curso aceptando ambos modos. Empieza a recibir euros mientras mantiene el canal de captación.
5. **Mentor establecido**. Mantiene una mezcla: cursos en trueque para captar audiencia + cursos pagados para monetizar.

El mentor puede saltarse pasos si llega con reputación externa demostrable (canal de YouTube, certificación profesional, etc.).

---

## 6. La economía de los WeCoins

### Cómo se ganan WeCoins

| Acción | WeCoins |
|---|---|
| Registrarse en Wenex | 15 |
| Publicar la primera habilidad | 5 (incentivo único) |
| Enseñar 30 minutos confirmados | 1 |
| Recibir reseña de 5⭐ | 2 extra |
| Recibir reseña de 4⭐ | 1 extra |
| Recibir reseña ≤3⭐ | 0 |

### Cómo se gastan WeCoins

| Acción | Coste |
|---|---|
| Aprender 30 minutos en modo trueque | 1 |
| Cancelar un intercambio aceptado tarde | 2 (penalización) |

### Reglas de equilibrio

Para evitar inflación y abuso del sistema:

- **Cap diario**: máximo 8 WeCoins ganables por persona en 24 horas.
- **Decay**: los WeCoins no usados pierden un 5% mensual. Esto incentiva la circulación, evita la acumulación pasiva.
- **Confirmación dual**: una sesión solo cuenta como completada (y por tanto solo genera reseña + WeCoins) cuando ambas partes la confirman.
- **Cuentas nuevas**: las primeras 3 reseñas que recibe un mentor cuentan a la mitad en su promedio, para evitar inflación inicial con cuentas falsas.

---

## 7. La regla de oro del modelo

> **Los WeCoins no son convertibles a euros. NUNCA. Bajo ninguna circunstancia.**

Esta regla es innegociable porque:

- Si los WeCoins fuesen convertibles, Wenex sería un esquema piramidal: mucha gente acumularía WeCoins esperando convertirlos en euros que **no existen** en el sistema.
- Al ser inconvertibles, los WeCoins se mantienen como lo que son: créditos de aprendizaje y reputación. Quien quiere euros, publica en modo pagado desde el principio.
- Esta regla es la diferencia entre un marketplace sano y un Ponzi.

---

## 8. Comisiones y costes operativos

### Lo que cobra Wenex

- **20% del valor de cada transacción en euros**. Cero comisión en transacciones de WeCoins.
- En una sesión de 40€:
  - El aprendiz paga 40€.
  - Stripe se queda 0,85€ (1,5% + 0,25€ por transacción).
  - Wenex retiene 7,15€ netos.
  - El mentor recibe 32€ en su balance, retirable a banco.

### Costes que cubre Wenex

- Hosting en Vercel.
- Base de datos en Neon.
- Almacenamiento de vídeos en UploadThing.
- Comisiones de Stripe (cuando suben los volúmenes, se renegocian).
- Email transaccional, dominios, etc.

### Punto de equilibrio teórico

Con 1.000 mentores activos generando una media de 200€/mes cada uno:

- Volumen mensual: 200.000€.
- Ingresos brutos de Wenex (20%): 40.000€/mes.
- Costes operativos estimados: 3.000€/mes.
- Margen neto disponible: 37.000€/mes.

Este margen permite reinvertir en captación, mejoras técnicas, equipo y crecimiento internacional.

---

## 9. Defensas contra el abuso

### Reseñas falsas

- Solo cuentan reseñas verificadas (ambas partes confirmaron la sesión).
- Detección de patrones: cuentas creadas el mismo día con interacciones cruzadas, mismo IP, etc.
- Penalización: cuentas detectadas pierden todas sus reseñas y son suspendidas.

### Inflación de WeCoins

- Cap diario de generación.
- Decay mensual del 5%.
- Wenex puede "quemar" WeCoins en eventos especiales o sorteos.

### Mentores que abusan del modo trueque para evitar pagar comisión

- Si un mentor consistentemente cobra euros fuera de la plataforma (por ejemplo, mediante Bizum personal), pierde la cuenta.
- El badge de "Mentor Verificado" requiere actividad en ambos canales.

---

## 10. Captación de los primeros mentores

La estrategia inicial es contactar manualmente con creadores de contenido de Facebook, YouTube, Instagram y similares. La oferta es clara:

- Llegan a Wenex como **early movers**.
- Su posición en el feed se reserva con prioridad.
- Empiezan acumulando reputación desde el día 1, antes del lanzamiento masivo.
- Cuando Wenex lanza públicamente, ya están establecidos.

El argumento principal: **construye tu audiencia en una plataforma que te paga directamente, sin depender del algoritmo de YouTube ni de la publicidad**.

---

## 11. El rol del aprendiz

Un aprendiz puede entrar a Wenex con tres motivaciones:

- **Aprender gratis** (con sus 15 WeCoins iniciales y los que vaya ganando enseñando algo).
- **Aprender pagando** directamente con euros sin necesidad de enseñar nada.
- **Combinar ambos**: aprender en trueque cuando pueda, pagar cuando el mentor solo acepte euros.

El aprendiz también puede convertirse en mentor en cualquier momento, sin restricciones.

---

## 12. Glosario rápido

- **WeCoins**: moneda interna de Wenex. No convertible a euros.
- **Modo Trueque**: cobro solo en WeCoins.
- **Modo Pagado**: cobro solo en euros.
- **Modo Híbrido**: cobro en cualquiera de los dos, a elección del aprendiz.
- **Reputación global**: rating del mentor que se hereda entre todos sus cursos.
- **SkillFlow**: el algoritmo que empareja oferta y demanda recíproca.
- **Endorsement**: validación comunitaria de que un mentor sabe lo que dice saber.
- **Proof of Skill**: vídeo de 60 segundos demostrando que el mentor puede hacer lo que enseña.
- **Tribu**: el conjunto de usuarios de Wenex.
- **Mentor Verificado**: badge que se obtiene con 4.5⭐, mínimo 20 reseñas y al menos un curso pagado activo.

---

*Este documento es la fuente de verdad del modelo económico de Wenex. Si en el futuro alguna decisión técnica o de producto entra en conflicto con lo aquí descrito, primero hay que actualizar este documento.*
