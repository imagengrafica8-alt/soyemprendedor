# Design System — Egresados UVP

## 1. Principios de diseño

*   **Reciprocidad prioritaria:** Ofrecer valor tangible (descuentos, vacantes, noticias) antes de solicitar cualquier registro o inicio de sesión.
*   **Claridad funcional:** Evitar etiquetas vagas como "Empezar"; los botones y flujos deben ser "aburridamente claros" y predecibles.
*   **Puente a la formalidad:** Diseñar cada interacción profesional para validar la legalidad y seriedad del empleo frente a la informalidad regional.
*   **Orgullo y Raíces:** Integrar la identidad institucional (Quetzalcóatl) con una estética moderna de 2026 que proyecte trascendencia.
*   **Accesibilidad radical:** La plataforma debe ser funcional por defecto para cualquier capacidad, siguiendo los estándares mínimos de 2026.

## 2. Personalidad visual

*   **Atributos:** Profesional, auténtica, tecnológica, cálida y orientada al crecimiento.
*   **Estilo:** "Minimalismo reductor de carga cognitiva" que utiliza el espacio en blanco y rejillas modulares para organizar información densa.
*   **Evitar:** Fotografías de stock rígidas, muros de inicio de sesión (login walls) restrictivos, interfaces saturadas de texto y procesos no lineales.

## 3. Paleta de colores

| Rol | Nombre | HEX | Uso recomendado |
| :--- | :--- | :--- | :--- |
| **Primario** | Azul Marino UVP | `#1A365D` | Estructura, cabeceras, footers y tipografía de títulos. |
| **Secundario** | Pastel Blue | `#E2E8F0` | Bordes finos, separadores y fondos de tarjetas neutrales. |
| **Acento CRO** | Naranja UVP | `#F25F22` | Exclusivo para CTAs primarios, alertas de urgencia y estados activos. |
| **Indicador** | Neo-Mint | `#00F5D4` | Badges de gamificación, estados "en línea" y micro-interacciones de éxito. |
| **Fondo (Canvas)** | Cloud Dancer | `#F8F9FA` | Fondo principal para reducir fatiga visual en pantallas OLED. |
| **Superficie** | Blanco Puro | `#FFFFFF` | Fondos de tarjetas y contenedores elevados. |
| **Texto Pral.** | Dark Slate | `#1A1A1A` | Cuerpo de texto y lectura prolongada. |
| **Éxito** | Emerald | `#10B981` | Validaciones positivas y confirmaciones. |
| **Error** | Crimson | `#EF4444` | Errores de validación y campos obligatorios. |

## 4. Tipografía

*   **Display / Títulos:** *Montserrat Variable* (Sans Serif).
    *   **H1:** 40px / Bold / 1.2 line-height. Uso: Títulos de sección impactantes.
    *   **H2:** 32px / SemiBold / 1.3 line-height. Uso: Subtítulos principales.
    *   **H3:** 24px / Medium / 1.4 line-height. Uso: Títulos de tarjetas Bento.
*   **Cuerpo / Narrativa:** *Merriweather* (Serif).
    *   **Body:** 16px / Regular / 1.7 line-height. Uso: Descripciones, noticias y artículos.
    *   **Small:** 14px / Regular. Uso: Microcopy, leyendas de fotos.
*   **Interfaz:** *Montserrat*.
    *   **Labels:** 14px / SemiBold / All caps sutil. Uso: Etiquetas de formulario fijas.
    *   **Botones:** 16px / Bold. Uso: Texto dentro de botones.

## 5. Espaciado y layout

*   **Sistema base:** 8px (todos los márgenes y paddings deben ser múltiplos de 8).
*   **Ancho máximo:** 1280px para contenido central.
*   **Grid:**
    *   **Escritorio:** 12 columnas / 24px gutter / 80px márgenes laterales.
    *   **Tablet:** 8 columnas / 16px gutter / 40px márgenes.
    *   **Móvil:** 4 columnas / 12px gutter / 16px márgenes.
*   **Radios de borde:** 8px constante para botones y tarjetas ("Tactile UI").
*   **Sombras (Elevation):**
    *   **Low:** `0 2px 4px rgba(0,0,0,0.05)` (Tarjetas estáticas).
    *   **High:** `0 10px 20px rgba(0,0,0,0.1)` (Hover de botones y modales).

## 6. Componentes

*   **Botones:** 
    *   *Primario:* Fondo Naranja UVP, texto blanco. Reacciona con elevación al hover.
    *   *Secundario:* Borde Azul Marino, fondo transparente.
*   **Inputs:** Etiquetas siempre superiores (no placeholder solo). Borde gris claro que cambia a Azul Marino en Focus.
*   **Tarjetas (Bento Grid):** Contenedores modulares que agrupan información por contexto (ej. Vacante + Sueldo + Ubicación).
*   **Tarjetas de Empleo:** Deben incluir logo de empresa, sueldo neto visible y badge de "Validada por UVP".
*   **Buscador:** Predictivo con icono de lupa artesanal; accesible vía teclado.
*   **Credencial Digital:** Formato vertical, código QR dinámico de alta seguridad y efecto de brillo al inclinar el móvil.
*   **Alertas:** Inline (adyacentes al campo) para errores de formulario. No borrar datos tras el error.
*   **Navegación:** Sticky header con efecto *glassmorphism* (desenfoque de fondo).
*   **Footer:** 4 columnas (Soporte, Negocios, Legal, Comunicación). Incluye botón "Registra tu empresa".

## 7. Imágenes e iconografía

*   **Fotografía:** 100% auténtica. Egresados reales en entornos laborales de Puebla y Tlaxcala. Ángulos naturales y grano sutil.
*   **Iconografía:** Trazo artesanal (*handcrafted*) que evoca raíces prehispánicas y calidez humana.
*   **Proporciones:** 16:9 para videos de héroe; 1:1 para fotos de perfil y testimonios.

## 8. Movimiento

*   **Micro-interacciones:** Confirmaciones sutiles (check marcándose) al completar acciones. Duración: 200ms - 300ms.
*   **Kinetic Typography:** Títulos que ajustan su peso óptico sutilmente al hacer scroll.
*   **Restricciones:** No usar animaciones que distraigan de la lectura o que pesen más de 50kb en scripts. Soportar `prefers-reduced-motion`.

## 9. Accesibilidad

*   **Contraste:** Mínimo WCAG AA (4.5:1) para todo el texto.
*   **Navegación:** Enfoque visual claro (*Focus Ring*) en todos los elementos interactivos.
*   **Formularios:** Errores específicos (ej. "Falta el @ en el correo") en lugar de "Entrada inválida".
*   **Multimedia:** Todos los videos de egresados deben incluir subtítulos opcionales.

## 10. Responsive

*   **Mobile-First:** Los formularios deben ser de una sola columna obligatoriamente en móvil para facilitar el tap.
*   **Adaptación:**
    *   Menú global se convierte en "Hamburgo" con acceso directo a "Mi Red".
    *   Tarjetas Bento se apilan verticalmente manteniendo la jerarquía de información.
    *   CTAs se vuelven "Sticky" en la parte inferior durante flujos de inscripción.

## 11. Tokens (Variables CSS)

```css
:root {
  /* Colors */
  --color-primary: #1A365D;
  --color-accent: #F25F22;
  --color-indicator: #00F5D4;
  --color-bg: #F8F9FA;
  --color-surface: #FFFFFF;
  
  /* Typography */
  --font-header: 'Montserrat Variable', sans-serif;
  --font-body: 'Merriweather', serif;
  
  /* Spacing */
  --space-unit: 8px;
  --space-md: 24px;
  
  /* Elevation */
  --radius-tactile: 8px;
  --shadow-low: 0 2px 4px rgba(0,0,0,0.05);
  
  /* Breakpoints */
  --bp-mobile: 480px;
  --bp-tablet: 768px;
  --bp-desktop: 1280px;
}
```

## 12. Reglas para desarrollo

1.  **Componentes Reutilizables:** No crear nuevos estilos de botones; usar variantes del sistema.
2.  **Preservación de Estado:** Es obligatorio que los formularios guarden los datos ingresados en el `sessionStorage` para evitar pérdidas por errores de validación.
3.  **Carga Sostenible:** Optimizar imágenes y usar fuentes variables para mantener el rendimiento y la sostenibilidad web.
4.  **Validación RFC:** El módulo de empresas debe validar que el archivo cargado sea un PDF y no exceda 2MB.