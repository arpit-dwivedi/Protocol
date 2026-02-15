document.addEventListener("DOMContentLoaded", () => {
  /* ================= POPUP ================= */
  const popup = document.getElementById("popupOverlay");
  const closePopup = document.querySelector(".close-popup");

  setTimeout(() => {
    popup.classList.add("show");
  }, 800);

  closePopup.onclick = () => popup.classList.remove("show");

  popup.onclick = (e) => {
    if (e.target === popup) popup.classList.remove("show");
  };

  /* ================= HAMBURGER ================= */
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  hamburger.onclick = () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
  };

  document.querySelectorAll(".menu a").forEach((link) => {
    link.onclick = () => {
      hamburger.classList.remove("active");
      menu.classList.remove("active");
    };
  });

  /* ================= CALENDLY ================= */
  const calendlyModal = document.getElementById("calendlyModal");
  const closeCalendly = document.querySelector(".close-calendly");

  const openCalendly = () => calendlyModal.classList.add("show");

  document.querySelectorAll(".open-calendly").forEach((btn) => {
    btn.onclick = openCalendly;
  });

  closeCalendly.onclick = () => calendlyModal.classList.remove("show");

  calendlyModal.onclick = (e) => {
    if (e.target === calendlyModal) {
      calendlyModal.classList.remove("show");
    }
  };

  /* ================= PROGRAM DETAILS POPUP ================= */
  const detailsModal = document.getElementById("programDetailsModal");
  const detailsTitle = document.getElementById("programModalTitle");
  const detailsDescription = document.getElementById("programModalDescription");
  const detailsPoints = document.getElementById("programModalPoints");
  const detailsGallery = document.getElementById("programGallery");
  const closeDetails = document.querySelector(".close-program-popup");

  const programContent = {
    "14": {
      title: "14 DAYS • 5 KG PROGRAM",
      description:
        "Perfect for a focused reset. This plan is built for guests who want a structured, high-accountability kickstart with measurable fat-loss outcomes in just two weeks.",
      points: [
        "Stay format: Single Accommodation / Shared Accommodation.",
        "Daily rhythm includes guided workouts, monitored walks, and coach-led check-ins.",
        "Every meal is controlled and planned for consistency and metabolic response.",
        "Lifestyle discipline rules are actively monitored to maintain program outcomes.",
      ],
      images: [
        {
          src: "assets/image.png",
          alt: "Hotel stay and facility view for 14-day program",
        },
        {
          src: "assets/person-1.jpeg",
          alt: "14-day transformation result",
        },
      ],
    },
    "30": {
      title: "30 DAYS • 10 KG PROGRAM",
      description:
        "Designed for deep transformation. This month-long protocol helps you build long-term habits, improve fitness endurance, and achieve visible fat-to-fit lifestyle results.",
      points: [
        "Stay format: Single Accommodation / Shared Accommodation.",
        "Progressive movement plan from low baseline to high-capacity walk endurance.",
        "Strict routine, high supervision, and accountability-led daily structure.",
        "Comprehensive transformation support focused on lifestyle and measurable health markers.",
      ],
      images: [
        {
          src: "assets/WhatsApp Image 2026-02-12 at 3.07.20 PM.jpeg",
          alt: "Hotel and hillside stay view for 30-day program",
        },
        {
          src: "assets/person-3.jpeg",
          alt: "30-day transformation result",
        },
      ],
    },
  };

  document.querySelectorAll(".open-program-details").forEach((btn) => {
    btn.onclick = () => {
      const key = btn.dataset.program;
      const content = programContent[key];
      if (!content) return;

      detailsTitle.textContent = content.title;
      detailsDescription.textContent = content.description;

      detailsPoints.innerHTML = content.points.map((point) => `<li>${point}</li>`).join("");

      detailsGallery.innerHTML = content.images
        .map((image) => `<img src="${image.src}" alt="${image.alt}" />`)
        .join("");

      detailsModal.classList.add("show");
    };
  });

  closeDetails.onclick = () => detailsModal.classList.remove("show");

  detailsModal.onclick = (e) => {
    if (e.target === detailsModal) {
      detailsModal.classList.remove("show");
    }
  };
});
