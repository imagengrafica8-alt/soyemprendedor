import Image from "next/image";

const ArrowIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
);

const SparkIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 32 32"><path d="M16 2c.5 8.6 4.9 13 13 14-8.1 1-12.5 5.4-13 14-.5-8.6-4.9-13-13-14 8.1-1 12.5-5.4 13-14Z" /></svg>
);

const PlayIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 7 8 5-8 5V7Z" /></svg>
);

const slides = [
  {
    tag: "Convocatoria abierta",
    title: "Expo Emprende 2026",
    copy: "Presenta tu proyecto, valida tu propuesta y conecta con aliados que pueden llevarla más lejos.",
    action: "Consultar convocatoria",
    image: "/images/expo.webp",
  },
  {
    tag: "Titulación",
    title: "Tu emprendimiento puede ser tu proyecto profesional",
    copy: "Convierte tu idea en un Plan de Negocios sólido con acompañamiento especializado.",
    action: "Conocer la ruta de titulación",
    image: "/images/titulacion.webp",
  },
  {
    tag: "Historia UVP",
    title: "Ideas locales, impacto que trasciende",
    copy: "Conoce a quienes ya transforman su profesión en soluciones para Puebla y el mundo.",
    action: "Conocer al emprendedor del mes",
    image: "/images/emprendedor.webp",
  },
  {
    tag: "Incuba UVP",
    title: "Tu siguiente paso no tienes que darlo solo",
    copy: "Recibe mentoría y herramientas de negocio sin costo para la comunidad universitaria.",
    action: "Postular mi proyecto",
    image: "/images/convocatorias.webp",
  },
];

const subjects = [
  ["01", "Descubrir", "Emprendimiento e Innovación", "Desarrolla soluciones sociales y económicas a partir de oportunidades, metodologías de innovación y los ODS de la Agenda 2030."],
  ["02", "Diseñar", "Diseño y Formulación", "Construye propuestas de valor que mejoran los resultados de organizaciones y responden al contexto económico y social."],
  ["03", "Validar", "Desarrollo y Evaluación", "Evalúa la viabilidad legal, financiera y social de un negocio antes de iniciar operaciones."],
];

const thesisSteps = [
  "Elegir terminales de Proyecto Emprendedor",
  "Solicitar un director de proyecto",
  "Desarrollar el Plan de Negocios",
  "Obtener la liberación del asesor",
  "Recibir la liberación de dos lectores",
  "Presentar el examen profesional",
];

const faqItems = [
  ["Tengo una idea de negocio, ¿cómo puedo empezar?", "El primer paso ya lo diste. La Coordinación de Emprendedores te ayuda a ordenar la idea, reconocer oportunidades y definir una ruta clara para convertirla en un proyecto."],
  ["¿Los servicios de incubación o mentoría tienen costo?", "No. Para estudiantes y egresados UVP, la asesoría, mentoría y el programa de Incubadora de Empresas son completamente gratuitos."],
  ["¿La universidad otorga financiamiento directo?", "La UVP no otorga financiamiento directo, pero te vincula con convocatorias, fondos gubernamentales, inversionistas e instancias financieras."],
  ["¿Puedo titularme por proyecto si egresé hace tiempo?", "Sí. Se revisará tu situación académica y el estado del proyecto para determinar si necesitas actualizar el Plan de Negocios o cubrir requisitos adicionales."],
  ["¿Es obligatorio contar con un Director de Proyecto?", "Sí. Te brinda guía metodológica y técnica, y valida que el proyecto cumpla con los estándares del proceso de titulación."],
  ["Mi proyecto ya fue aprobado, ¿cuál es el siguiente paso?", "Tu Director deberá enviarlo a la Coordinación de Emprendedores para validar la etapa final e iniciar los trámites administrativos de titulación."],
  ["¿Cómo solicito un curso de regularización?", "Las convocatorias se publican durante el ciclo escolar. La Coordinación revisará tu historial y te indicará si corresponde un extraordinario, recurso o curso de actualización."],
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido principal</a>

      <header className="site-header" data-header>
        <div className="header-shell">
          <a className="brand" href="#inicio" aria-label="Soy Emprendedor UVP">
            <span className="brand-mark">UVP</span>
            <span className="brand-copy"><strong>SOY EMPRENDEDOR</strong><small>EMPRENDE Y DEJA HUELLA</small></span>
          </a>

          <nav className="desktop-nav" aria-label="Navegación principal">
            <div className="nav-group">
              <button type="button" aria-expanded="false">Yo soy emprendedor <span>⌄</span></button>
              <div className="nav-panel">
                <a href="#programa">¿Qué es un Emprendedor UVP?</a>
                <a href="#formacion">Programas académicos</a>
                <a href="#titulacion">Titulación para emprendedores</a>
              </div>
            </div>
            <div className="nav-group">
              <button type="button" aria-expanded="false">Inspírate <span>⌄</span></button>
              <div className="nav-panel">
                <a href="#historias">Emprendedor del mes</a>
                <a href="#historias">Podcast y multimedia</a>
                <a href="#actualidad">Noticias y convocatorias</a>
              </div>
            </div>
            <a href="#ecosistema">Ecosistema</a>
            <a href="#incubadora">Incubadora</a>
          </nav>

          <button className="header-cta" type="button" data-open-modal="proyecto">Postular proyecto <ArrowIcon /></button>
          <button className="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Abrir menú">
            <span /><span /><span />
          </button>
        </div>

        <nav className="mobile-nav" id="mobile-menu" aria-label="Navegación móvil" hidden>
          <a href="#programa">Programa emprendedores</a>
          <a href="#formacion">Programas académicos</a>
          <a href="#titulacion">Titulación</a>
          <a href="#historias">Inspírate y aprende</a>
          <a href="#ecosistema">Ecosistema UVP</a>
          <a href="#incubadora">Incubadora</a>
          <button type="button" data-open-modal="proyecto">Postular mi proyecto</button>
        </nav>
      </header>

      <main id="contenido">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-shell">
            <div className="hero-copy" data-reveal>
              <p className="eyebrow"><span>Programa Emprendedores UVP</span></p>
              <h1 id="hero-title">Tu idea no es solo un proyecto escolar. <em>Es tu próxima empresa.</em></h1>
              <p>Sacamos tu carácter de pantera para transformar tus proyectos en negocios reales. Emprende y deja huella.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#programa">Explorar el programa <ArrowIcon /></a>
                <button className="button button-ghost" type="button" data-open-modal="mentoria">Agendar una mentoría</button>
              </div>
            </div>
            <div className="hero-orbit" aria-label="Una idea conectada con iniciativa, creatividad e impacto" data-reveal>
              <span className="orbit-line orbit-one" />
              <span className="orbit-line orbit-two" />
              <span className="orbit-label label-one">Iniciativa</span>
              <span className="orbit-label label-two">Creatividad</span>
              <span className="orbit-label label-three">Impacto</span>
              <div className="orbit-center"><SparkIcon /><strong>Tu idea</strong><small>puede avanzar</small></div>
            </div>
          </div>
          <div className="impact-bar" aria-label="Accesos rápidos">
            <a className="quick-access" href="#titulacion"><strong>Quiero titularme</strong><span>Con mi proyecto emprendedor</span></a>
            <button className="quick-access" type="button" data-open-modal="proyecto"><strong>Quiero emprender</strong><span>Una idea de negocio</span></button>
            <button className="quick-access" type="button" data-open-modal="empresa"><strong>Tengo una empresa</strong><span>Quiero difusión y vinculación</span></button>
            <button className="quick-access quick-access-primary" type="button" data-open-modal="proyecto">Comenzar mi camino <ArrowIcon /></button>
          </div>
        </section>

        <section className="spotlight section-shell" aria-labelledby="spotlight-title" data-reveal>
          <div className="section-heading split-heading">
            <div><p className="kicker">Ahora en UVP</p><h2 id="spotlight-title">Oportunidades para poner tu idea en movimiento.</h2></div>
            <div className="carousel-controls">
              <button type="button" data-carousel-prev aria-label="Anterior">←</button>
              <p><span data-carousel-current>01</span> / 04</p>
              <button type="button" data-carousel-next aria-label="Siguiente">→</button>
            </div>
          </div>
          <div className="carousel" data-carousel aria-roledescription="carrusel" aria-label="Oportunidades destacadas">
            <div className="carousel-track" data-carousel-track>
              {slides.map((slide, index) => (
                <article className="carousel-slide" key={slide.title} aria-hidden={index !== 0}>
                  <Image src={slide.image} alt="" fill sizes="(max-width: 820px) 100vw, 1280px" priority={index === 0} />
                  <div className="slide-shade" />
                  <div className="slide-copy"><p>{slide.tag}</p><h3>{slide.title}</h3><span>{slide.copy}</span><a href={index === 1 ? "#titulacion" : index === 2 ? "#historias" : "#incubadora"}>{slide.action} <ArrowIcon /></a></div>
                </article>
              ))}
            </div>
            <div className="carousel-dots" data-carousel-dots>{slides.map((slide, index) => <button key={slide.title} type="button" aria-label={`Mostrar: ${slide.title}`} aria-current={index === 0 ? "true" : undefined} />)}</div>
          </div>
        </section>

        <section className="program section-shell" id="programa" aria-labelledby="program-title">
          <div className="program-intro" data-reveal>
            <div><p className="kicker">Programa Emprendedores</p><h2 id="program-title">Deja de imaginar.<br />Empieza a crear.</h2></div>
            <p className="large-copy">El emprendimiento no es solo una materia: es la chispa para transformar tu pasión en soluciones valientes, empleos con propósito y propuestas que mejoran la vida.</p>
          </div>
          <div className="capability-grid">
            <article data-reveal><span>01</span><SparkIcon /><h3>Iniciativa</h3><p>Da el primer paso y transforma los retos de tu entorno en oportunidades con propósito.</p></article>
            <article data-reveal><span>02</span><svg aria-hidden="true" viewBox="0 0 32 32"><path d="M6 22 16 5l10 17M10 22h12M8 27h16" /></svg><h3>Creatividad</h3><p>Diseña soluciones innovadoras, relevantes y capaces de marcar una diferencia real.</p></article>
            <aside data-reveal><p>Te acompañamos desde</p><strong>Vinculación</strong><strong>Coordinación de Emprendedores</strong><strong>Centro de Innovación Empresarial</strong></aside>
          </div>
        </section>

        <section className="learning" id="formacion" aria-labelledby="learning-title">
          <div className="section-shell">
            <div className="section-heading split-heading" data-reveal>
              <div><p className="kicker kicker-mint">Formación emprendedora</p><h2 id="learning-title">Aprender haciendo.</h2></div>
              <p>Todos los estudiantes UVP desarrollan competencias alineadas con la misión institucional y los retos del entorno global.</p>
            </div>
            <div className="subject-grid">
              {subjects.map(([number, tag, title, copy]) => (
                <article key={number} data-reveal><span className="subject-number">{number}</span><p className="subject-tag">{tag}</p><h3>{title}</h3><p>{copy}</p><i aria-hidden="true" /></article>
              ))}
            </div>
          </div>
        </section>

        <section className="thesis" id="titulacion" aria-labelledby="thesis-title">
          <div className="thesis-copy" data-reveal>
            <p className="kicker">Titulación emprendedora</p>
            <h2 id="thesis-title">Tu proyecto también puede abrirte la puerta al título.</h2>
            <p>Desarrolla una investigación con formato de Plan de Negocios: innovadora, vinculada con tu carrera y capaz de generar impacto en el entorno.</p>
            <div className="button-row"><button className="button button-primary" type="button" data-open-modal="titulacion">Postularme para titularme <ArrowIcon /></button><a className="text-link" href="#preguntas">Resolver mis dudas</a></div>
          </div>
          <div className="plan-map" aria-label="Componentes del Plan de Negocios" data-reveal>
            <span>Naturaleza</span><span>Impacto</span><span>Marketing</span><span>Marco legal</span><span>Producción</span><span>Finanzas</span><span>Organización</span>
            <div><svg aria-hidden="true" viewBox="0 0 32 32"><path d="M5 7c4 0 8 1 11 4 3-3 7-4 11-4v18c-4 0-8 1-11 4-3-3-7-4-11-4V7Zm11 4v18" /></svg><strong>Proyecto<br />Emprendedor</strong><small>Plan de Negocios</small></div>
          </div>
        </section>

        <section className="route section-shell" aria-labelledby="route-title">
          <div className="route-intro" data-reveal><p className="kicker">Una meta, seis pasos</p><h2 id="route-title">Tu ruta hacia el examen profesional.</h2><p>Requieres todas las materias acreditadas, un proyecto con la estructura institucional y 24 asesorías liberadas.</p></div>
          <ol className="route-list">
            {thesisSteps.map((step, index) => <li key={step} data-reveal><span>0{index + 1}</span><p>{step}</p><i aria-hidden="true">↗</i></li>)}
          </ol>
        </section>

        <section className="stories" id="historias" aria-labelledby="stories-title">
          <div className="section-shell">
            <div className="section-heading split-heading" data-reveal><div><p className="kicker">Inspírate y aprende</p><h2 id="stories-title">Una comunidad que ya está creando el futuro.</h2></div><a className="text-link" href="#actualidad">Ver todas las historias <ArrowIcon /></a></div>
            <div className="story-grid">
              <article className="featured-story" data-reveal>
                <Image src="/images/emprendedor.webp" alt="Ponente compartiendo su experiencia ante una comunidad emprendedora" width={1024} height={683} sizes="(max-width: 820px) 100vw, 60vw" />
                <div><p>Emprendedora del mes · Agosto</p><h3>Diseñar soluciones empieza por escuchar.</h3><span>Conoce la historia de una egresada que transformó una necesidad local en una empresa con propósito.</span><button type="button" aria-label="Reproducir testimonio"><PlayIcon /></button></div>
              </article>
              <article className="story-card podcast" data-reveal><p>Podcast · Ep. 18</p><h3>Cómo validar una idea sin perder meses en el intento</h3><span>24 min</span><button type="button" aria-label="Reproducir episodio"><PlayIcon /></button></article>
              <article className="story-card alumni" data-reveal><p>Egresados UVP</p><h3>Profesionales que marcan nuevas directrices.</h3><a href="#actualidad">Descubrir perfiles <ArrowIcon /></a></article>
            </div>
          </div>
        </section>

        <section className="news section-shell" id="actualidad" aria-labelledby="news-title">
          <div className="section-heading split-heading" data-reveal><div><p className="kicker">Temas de interés</p><h2 id="news-title">Ideas, herramientas y oportunidades.</h2></div><p>Noticias, conferencias y recursos para tomar mejores decisiones en cada etapa de tu proyecto.</p></div>
          <div className="news-grid">
            <article data-reveal><Image src="/images/expo.webp" alt="Ponente durante un encuentro de emprendimiento" width={1024} height={683} sizes="(max-width: 820px) 100vw, 33vw" /><p>Convocatoria · Expo Emprende</p><h3>Presenta tu proyecto ante la comunidad UVP</h3><a href="#incubadora">Consultar detalles <ArrowIcon /></a></article>
            <article data-reveal><Image src="/images/titulacion.webp" alt="Sesión de formación para jóvenes emprendedores" width={1024} height={683} sizes="(max-width: 820px) 100vw, 33vw" /><p>Herramientas · Propuesta de valor</p><h3>Cinco señales para validar tu idea de negocio</h3><a href="#programa">Leer artículo <ArrowIcon /></a></article>
            <article data-reveal><Image src="/images/convocatorias.webp" alt="Conferencia con una comunidad emprendedora" width={1024} height={683} sizes="(max-width: 820px) 100vw, 33vw" /><p>Vinculación · Ecosistema UVP</p><h3>Aliados que conectan talento, empresa e impacto</h3><a href="#ecosistema">Conocer el ecosistema <ArrowIcon /></a></article>
          </div>
        </section>

        <section className="ecosystem" id="ecosistema" aria-labelledby="ecosystem-title">
          <div className="section-shell">
            <div className="ecosystem-heading" data-reveal><p className="kicker kicker-mint">Ecosistema emprendedor UVP</p><h2 id="ecosystem-title">Las ideas crecen mejor conectadas.</h2><p>Articulamos comunidad, empresas y aliados para fortalecer la economía local y convertir oportunidades en proyectos sostenibles.</p></div>
            <div className="bento-grid">
              <article className="bento-main" data-reveal><p>Economía circular</p><h3>Market UVPlace</h3><span>Descubre y consume productos y servicios creados por la comunidad UVP.</span><a href="#contacto">Explorar el directorio <ArrowIcon /></a></article>
              <article data-reveal><p>Vinculación</p><h3>Aliados que abren caminos</h3><span>CANACO, Coparmex y organizaciones de los sectores público, social y privado.</span></article>
              <article className="bento-mint" data-reveal><p>Entorno UVP</p><h3>Proyectos para transformar lo local.</h3><span>Alianzas estratégicas y programas alineados al ambiente emprendedor de la región.</span></article>
              <article data-reveal><p>Incubadora social</p><h3>Competencias que amplían oportunidades</h3><span>Capacitación para el trabajo, innovación y productividad competitiva.</span></article>
              <article data-reveal><p>Comité empresarial</p><h3>Universidad y sector productivo</h3><span>Programas co-diseñados para responder a necesidades laborales reales.</span></article>
            </div>
            <div className="allies" data-reveal><p>Impulsamos conexiones con</p><div><span>CANACO</span><span>COPARMEX</span><span>CCE</span><span>CANACINTRA</span><span>RED CIE</span><span>PUEBLA EMPRENDE</span></div></div>
          </div>
        </section>

        <section className="incubator section-shell" id="incubadora" aria-labelledby="incubator-title">
          <div className="incubator-visual" data-reveal>
            <Image src="/images/titulacion.webp" alt="Jóvenes emprendedores participando en una sesión de trabajo" width={1024} height={683} sizes="(max-width: 820px) 100vw, 45vw" />
            <span><strong>01</strong>Idea</span><span><strong>02</strong>Modelo</span><span><strong>03</strong>Validación</span><span><strong>04</strong>Impacto</span>
          </div>
          <div className="incubator-copy" data-reveal><p className="kicker">Centro de Innovación Empresarial</p><h2 id="incubator-title">Incuba UVP: estructura para avanzar.</h2><p>Un espacio para articular pequeños negocios con herramientas, facilitadores especializados y un modelo innovador de desarrollo de competencias.</p><ul><li>Diagnóstico inicial de tu proyecto</li><li>Mentoría con experiencia en negocios de impacto</li><li>Herramientas para validar y tomar decisiones</li></ul><div className="button-row"><button className="button button-primary" type="button" data-open-modal="proyecto">Postular mi proyecto <ArrowIcon /></button><button className="text-link button-link" type="button" data-open-modal="mentoria">Agendar mentoría</button></div></div>
        </section>

        <section className="faq section-shell" id="preguntas" aria-labelledby="faq-title">
          <div className="faq-heading" data-reveal><p className="kicker">Preguntas frecuentes</p><h2 id="faq-title">Antes de dar el siguiente paso.</h2><p>Si tu caso necesita una revisión particular, puedes solicitar orientación directamente con la Coordinación.</p><button className="button button-secondary" type="button" data-open-modal="orientacion">Solicitar orientación</button></div>
          <div className="faq-list">
            {faqItems.map(([question, answer], index) => <details key={question} data-reveal><summary><span>0{index + 1}</span>{question}<i aria-hidden="true">+</i></summary><p>{answer}</p></details>)}
          </div>
        </section>

        <section className="closing" id="contacto" aria-labelledby="closing-title">
          <div data-reveal><SparkIcon /><p className="kicker kicker-mint">Tu siguiente paso</p><h2 id="closing-title">Una idea cambia las cosas cuando alguien decide ponerla en marcha.</h2><button className="button button-primary" type="button" data-open-modal="proyecto">Quiero impulsar mi proyecto <ArrowIcon /></button></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div><a className="brand footer-brand" href="#inicio"><span className="brand-mark">UVP</span><span className="brand-copy"><strong>SOY EMPRENDEDOR</strong><small>EMPRENDE Y DEJA HUELLA</small></span></a><p>Formación, acompañamiento y conexiones para convertir ideas en valor para la sociedad.</p></div>
          <div><h2>Programa</h2><a href="#programa">Qué es</a><a href="#formacion">Materias</a><a href="#titulacion">Titulación</a></div>
          <div><h2>Ecosistema</h2><a href="#ecosistema">Vinculación</a><a href="#ecosistema">Market UVPlace</a><a href="#incubadora">Incuba UVP</a></div>
          <div><h2>Comunicación</h2><a href="#historias">Historias</a><a href="#actualidad">Noticias</a><a href="#preguntas">Preguntas frecuentes</a></div>
          <div><h2>Universidad</h2><a href="https://www.uvp.mx">Sitio UVP</a><button type="button" data-open-modal="empresa">Registrar mi empresa</button><a href="#contenido">Accesibilidad</a></div>
        </div>
        <div className="footer-bottom"><p>© 2026 Universidad del Valle de Puebla.</p><div><a href="https://www.uvp.mx">Aviso de privacidad</a><span>Puebla, México</span></div></div>
      </footer>

      <dialog className="contact-dialog" data-contact-dialog aria-labelledby="dialog-title">
        <button className="dialog-close" type="button" data-close-modal aria-label="Cerrar formulario">×</button>
        <div className="dialog-intro"><p className="kicker">Conecta con UVP</p><h2 id="dialog-title" data-dialog-title>Cuéntanos sobre tu proyecto</h2><p data-dialog-copy>Completa estos datos y la Coordinación de Emprendedores podrá orientarte sobre el siguiente paso.</p></div>
        <form id="contact-form" noValidate>
          <input type="hidden" name="interest" value="proyecto" />
          <div className="field"><label htmlFor="name">Nombre completo</label><input id="name" name="name" type="text" autoComplete="name" required /><small data-error-for="name" /></div>
          <div className="field"><label htmlFor="email">Correo electrónico</label><input id="email" name="email" type="email" autoComplete="email" required /><small data-error-for="email" /></div>
          <div className="field"><label htmlFor="profile">Soy</label><select id="profile" name="profile" required defaultValue=""><option value="" disabled>Selecciona una opción</option><option>Estudiante UVP</option><option>Egresado UVP</option><option>Empresa o aliado</option><option>Comunidad externa</option></select><small data-error-for="profile" /></div>
          <div className="field"><label htmlFor="message">¿En qué etapa te encuentras?</label><textarea id="message" name="message" rows={3} required /><small data-error-for="message" /></div>
          <p className="form-note">Tus datos se guardan temporalmente en este navegador para evitar que los pierdas.</p>
          <button className="button button-primary form-submit" type="submit">Enviar solicitud de orientación <ArrowIcon /></button>
          <p className="form-status" role="status" aria-live="polite" />
        </form>
      </dialog>
    </>
  );
}
