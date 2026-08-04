Este documento constituye un Project Brief técnico y estratégico para el desarrollo de la plataforma digital Egresados UVP. Está diseñado para que un agente de desarrollo de software ejecute el diseño y la implementación basándose en hallazgos de investigación sobre usabilidad, tendencias 2026 y el contexto socioeconómico regional.
1. Objetivo del proyecto
Egresados UVP es un ecosistema digital de alto rendimiento destinado a transformar la relación entre la Universidad del Valle de Puebla y sus egresados. El sitio resuelve el problema de la desconexión institucional y la precariedad laboral en una región con un 70.9% de informalidad, actuando como un puente hacia el empleo formal, la mentoría experta y el crecimiento de negocios locales. La visión es convertir la plataforma en un socio profesional de por vida mediante una experiencia personalizada y sin fricciones.
2. Público objetivo

    Alumni Junior (Salud/Ingeniería): Graduados recientes que buscan estabilidad, prestaciones de ley y guía de marca personal para superar la informalidad.
    Líderes de Industria: Gerentes en corredores industriales (Cuautlancingo/Huejotzingo) que requieren reclutamiento ágil de talento técnico validado y formación ejecutiva.
    Alumni Emprendedores: Propietarios de negocios (sectores gastronómico/servicios) que necesitan visibilidad B2B y una red de proveeduría circular dentro de la comunidad.

3. Objetivos de negocio

    Reducir la brecha de informalidad: Validar legalmente a todas las empresas reclutadoras mediante la carga de RFC.
    Fomentar la Economía Circular: Impulsar el consumo entre egresados mediante un directorio geolocalizado.
    Incrementar la Educación Continua: Personalizar la oferta de posgrados y micro-credenciales apilables (vía Coursera) según el perfil del usuario.
    Maximizar el Engagement: Medir el éxito mediante el Alumni Engagement Score (CASE), priorizando la participación sobre las métricas de vanidad.

4. Arquitectura del sitio
Se requiere un diseño de baja densidad jerárquica y estructura plana para optimizar el acceso móvil.

    Inicio (Público): Onboarding visual, propuesta de valor y prueba social.
    Conexión Profesional: Bolsa de empleo (validada), panel de mentorías y recursos de empleabilidad.
    Soy Emprendedor UVP: Directorio B2B, incubadora de empresas y mapa de negocios.
    Formación Continua: Catálogo de posgrados híbridos y rutas de aprendizaje UVP-Coursera.
    Beneficios y Agenda: Credencial digital QR, descuentos comerciales y calendario de eventos generacionales.

5. Página de inicio
Orden de bloques recomendado para maximizar la retención según el Principio de Reciprocidad:

    Header Global: Sticky header con logotipo vectorial y botón naranja "Mi Red / Iniciar Sesión".
    Espacio Héroe: Video inmersivo de egresados reales; texto de impacto "Tu historia en la UVP continúa"; CTA: "Regístrate e Inicia tu Experiencia".
    Widget de Actividad: Carrusel tipo "Stories" con fotos de egresados y anillos de actividad (ej. "Nueva vacante publicada") para generar prueba social.
    Bloque Profesional: Tarjetas Bento con las 3 vacantes más recientes (sueldo neto visible) y perfiles de mentores destacados.
    Lifelong Learning: Ofertas educativas con contadores de urgencia ética para inscripciones.
    Footer Extendido: 4 columnas (Soporte, Negocios, Legal, Comunicación). Debe incluir el botón destacado "Registra tu empresa".

6. Funcionalidades
MVP (Lanzamiento Fase 1)

    Acceso Público: Navegación por noticias, beneficios y eventos sin login.
    Registro Social (SSO): Autenticación en un clic con LinkedIn o Google.
    Credencial Digital QR: Código de alta seguridad para validar descuentos en locales físicos.
    Bolsa de Empleo Básica: Visualización de vacantes con filtros por sector industrial de Puebla.
    Validación Empresarial: Formulario de carga de RFC en PDF para reclutadores.

Futuras versiones

    AI Career Coach: Motor que analiza el CV del usuario y sugiere cursos para cerrar brechas técnicas.
    Spatial UI Map: Mapa 3D inmersivo (WebGL) de emprendimientos y egresados globales.
    Sincronización API LinkedIn: Actualización automática del perfil profesional del usuario.
    Gamificación: Sistema de insignias digitales (Mentor Estrella, Donador).

7. Requisitos UX

    Prohibición de Login Walls: No bloquear el contenido de valor inicial; pedir registro solo para transacciones avanzadas.
    Flujos Lineales: Procesos de registro e inscripción "aburridamente claros" con indicadores de progreso.
    Preservación de Datos: Ante errores de validación, nunca limpiar los campos ya llenados.
    Navegación Intuitiva: Soportar el botón "atrás" del navegador sin romper el flujo de datos.

8. Requisitos UI

    Estilo Visual: Minimalismo reductor de carga cognitiva centrado en la legibilidad.
    Paleta de Colores: Azul Marino (#1A365D), Naranja CRO (#F25F22), Neo-Mint (#00F5D4) y fondo Cloud Dancer (#F8F9FA) para reducir fatiga visual.
    Tipografía Variable: Montserrat (Títulos) y Merriweather (Cuerpo) para legibilidad en pantallas OLED.
    Layout: Uso de Bento Grids para organizar información densa de forma modular.
    Fotografía: Estrictamente auténtica; prohibido el uso de imágenes de stock.
    Componentes: Botones táctiles responsivos con elevación háptica y tarjetas con efecto glassmorphism.

9. Requisitos técnicos

    Núcleo de Datos: Integración bidireccional con HubSpot CRM para automatización de campañas.
    Responsive: Diseño prioritario para móviles (60% del tráfico superior esperado).
    Accesibilidad: Cumplimiento de estándares 2026 (alto contraste, navegación por teclado, lectores de pantalla).
    Rendimiento: Lean code y optimización de activos para una carga web sostenible y rápida.
    Seguridad: Implementación de OAuth 2.0 y validación Luhn para campos de tarjeta.

10. Prioridades

    Fase 1: Configurar infraestructura de HubSpot, implementar Home pública, Credencial QR y SSO.
    Fase 2: Desarrollar módulo de validación de empresas y plataforma de mentorías asistida por correo.
    Fase 3: Integrar motor de IA de carrera y mapa tridimensional geolocalizado.

11. Restricciones

    Evitar botones genéricos: No usar CTAs vagos como "Empezar"; ser explícito con "Postularme" o "Reservar Lugar".
    No formularios extensos: Limitar la captura inicial de datos a un máximo de 4 campos.
    Sin silos de datos: Toda interacción (clics, descargas, asistencia) debe registrarse en el perfil central del CRM.

12. Resumen ejecutivo
La plataforma Egresados UVP debe ser diseñada no como un portal académico tradicional, sino como una herramienta de utilidad diaria. En 2026, el éxito depende de la capacidad de la universidad para ofrecer valor real antes de exigir compromiso. El agente de desarrollo debe priorizar la validación de empleo formal para proteger al egresado de la informalidad laboral masiva en Puebla y fomentar el emprendimiento circular. La interfaz debe ser limpia, táctil y de alta legibilidad, eliminando cualquier barrera técnica (Login Walls) que detenga la exploración orgánica del valor institucional. El núcleo técnico será la integración con HubSpot, permitiendo que la universidad escale su comunicación de forma hiper-personalizada