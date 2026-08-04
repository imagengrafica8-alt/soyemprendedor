(() => {
  "use strict";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-nav");

  const closeMobileMenu = () => {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    mobileMenu.hidden = true;
  };

  menuToggle?.addEventListener("click", () => {
    const willOpen = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(willOpen));
    menuToggle.setAttribute("aria-label", willOpen ? "Cerrar menú" : "Abrir menú");
    if (mobileMenu) mobileMenu.hidden = !willOpen;
  });

  mobileMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMobileMenu));

  document.querySelectorAll(".nav-group > button").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.closest(".nav-group");
      const willOpen = !group?.classList.contains("is-open");

      document.querySelectorAll(".nav-group.is-open").forEach((openGroup) => {
        openGroup.classList.remove("is-open");
        openGroup.querySelector("button")?.setAttribute("aria-expanded", "false");
      });

      group?.classList.toggle("is-open", willOpen);
      button.setAttribute("aria-expanded", String(willOpen));
    });
  });

  document.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest(".nav-group")) return;
    document.querySelectorAll(".nav-group.is-open").forEach((group) => {
      group.classList.remove("is-open");
      group.querySelector("button")?.setAttribute("aria-expanded", "false");
    });
  });

  const carousel = document.querySelector("[data-carousel]");
  const track = document.querySelector("[data-carousel-track]");
  const slides = Array.from(document.querySelectorAll(".carousel-slide"));
  const dots = Array.from(document.querySelectorAll("[data-carousel-dots] button"));
  const currentLabel = document.querySelector("[data-carousel-current]");
  let activeSlide = 0;
  let autoplayId;
  let pointerStart = 0;

  const showSlide = (index) => {
    if (!track || slides.length === 0) return;
    activeSlide = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${activeSlide * 100}%)`;
    slides.forEach((slide, slideIndex) => {
      const isInactive = slideIndex !== activeSlide;
      slide.setAttribute("aria-hidden", String(isInactive));
      slide.toggleAttribute("inert", isInactive);
    });
    dots.forEach((dot, dotIndex) => {
      if (dotIndex === activeSlide) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });
    if (currentLabel) currentLabel.textContent = String(activeSlide + 1).padStart(2, "0");
  };

  const stopAutoplay = () => window.clearInterval(autoplayId);
  const startAutoplay = () => {
    stopAutoplay();
    if (!reducedMotion && !document.hidden) autoplayId = window.setInterval(() => showSlide(activeSlide + 1), 6500);
  };

  document.querySelector("[data-carousel-prev]")?.addEventListener("click", () => {
    showSlide(activeSlide - 1);
    startAutoplay();
  });
  document.querySelector("[data-carousel-next]")?.addEventListener("click", () => {
    showSlide(activeSlide + 1);
    startAutoplay();
  });
  dots.forEach((dot, index) => dot.addEventListener("click", () => {
    showSlide(index);
    startAutoplay();
  }));
  carousel?.addEventListener("mouseenter", stopAutoplay);
  carousel?.addEventListener("mouseleave", startAutoplay);
  carousel?.addEventListener("focusin", stopAutoplay);
  carousel?.addEventListener("focusout", startAutoplay);
  carousel?.addEventListener("pointerdown", (event) => { pointerStart = event.clientX; });
  carousel?.addEventListener("pointerup", (event) => {
    const distance = event.clientX - pointerStart;
    if (Math.abs(distance) > 50) showSlide(activeSlide + (distance < 0 ? 1 : -1));
    startAutoplay();
  });
  document.addEventListener("visibilitychange", () => document.hidden ? stopAutoplay() : startAutoplay());
  showSlide(0);
  startAutoplay();

  const revealElements = document.querySelectorAll("[data-reveal]");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px" });
    revealElements.forEach((element) => revealObserver.observe(element));
  }

  const dialog = document.querySelector("[data-contact-dialog]");
  const form = document.querySelector("#contact-form");
  const storageKey = "egresados-v2-contacto";
  const dialogContent = {
    proyecto: ["Cuéntanos sobre tu proyecto", "Comparte estos datos y la Coordinación de Emprendedores te orientará para postular tu idea."],
    mentoria: ["Agenda una mentoría", "Déjanos saber quién eres y qué necesitas resolver para conectarte con la orientación adecuada."],
    titulacion: ["Postúlate para titulación", "Revisaremos tu situación académica y el avance de tu Plan de Negocios para indicarte el siguiente paso."],
    orientacion: ["Solicita orientación", "Describe brevemente tu caso y la Coordinación podrá ayudarte a identificar una ruta clara."],
    empresa: ["Registra tu empresa", "Conecta tu organización con el ecosistema emprendedor y las iniciativas de vinculación UVP."],
  };

  const saveForm = () => {
    if (!(form instanceof HTMLFormElement)) return;
    const values = Object.fromEntries(new FormData(form).entries());
    sessionStorage.setItem(storageKey, JSON.stringify(values));
  };

  const restoreForm = () => {
    if (!(form instanceof HTMLFormElement)) return;
    try {
      const values = JSON.parse(sessionStorage.getItem(storageKey) || "{}");
      Object.entries(values).forEach(([name, value]) => {
        const field = form.elements.namedItem(name);
        if (field instanceof HTMLInputElement || field instanceof HTMLSelectElement || field instanceof HTMLTextAreaElement) field.value = String(value);
      });
    } catch {
      sessionStorage.removeItem(storageKey);
    }
  };

  const openDialog = (interest) => {
    if (!(dialog instanceof HTMLDialogElement) || !(form instanceof HTMLFormElement)) return;
    const content = dialogContent[interest] || dialogContent.proyecto;
    const title = dialog.querySelector("[data-dialog-title]");
    const copy = dialog.querySelector("[data-dialog-copy]");
    const interestField = form.elements.namedItem("interest");
    if (title) title.textContent = content[0];
    if (copy) copy.textContent = content[1];
    if (interestField instanceof HTMLInputElement) interestField.value = interest;
    saveForm();
    dialog.showModal();
    document.body.classList.add("is-locked");
  };

  document.querySelectorAll("[data-open-modal]").forEach((button) => {
    button.addEventListener("click", () => {
      closeMobileMenu();
      openDialog(button.getAttribute("data-open-modal") || "proyecto");
    });
  });
  dialog?.querySelector("[data-close-modal]")?.addEventListener("click", () => dialog.close());
  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog?.addEventListener("close", () => document.body.classList.remove("is-locked"));

  restoreForm();
  form?.addEventListener("input", saveForm);
  form?.addEventListener("change", saveForm);

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!(form instanceof HTMLFormElement)) return;
    const fields = ["name", "email", "profile", "message"];
    let firstInvalid = null;

    fields.forEach((name) => {
      const field = form.elements.namedItem(name);
      const error = form.querySelector(`[data-error-for="${name}"]`);
      if (!(field instanceof HTMLInputElement || field instanceof HTMLSelectElement || field instanceof HTMLTextAreaElement)) return;

      let message = "";
      if (!field.value.trim()) message = "Este campo es obligatorio.";
      else if (field instanceof HTMLInputElement && field.type === "email" && !field.value.includes("@")) message = "Falta el @ en el correo electrónico.";
      else if (field instanceof HTMLInputElement && field.type === "email" && !field.validity.valid) message = "Escribe un correo válido, por ejemplo nombre@dominio.com.";

      field.setAttribute("aria-invalid", String(Boolean(message)));
      if (error) error.textContent = message;
      if (message && !firstInvalid) firstInvalid = field;
    });

    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    const status = form.querySelector(".form-status");
    if (status) {
      status.textContent = "Solicitud preparada correctamente. La integración de envío se conectará con el CRM institucional.";
      status.classList.add("is-success");
    }
    sessionStorage.removeItem(storageKey);
  });
})();
