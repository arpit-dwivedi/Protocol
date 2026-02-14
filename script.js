/* =====================================
   WAIT UNTIL PAGE LOADS
===================================== */
document.addEventListener("DOMContentLoaded", function () {

  /* =====================================
     SECTION SCROLL REVEAL ANIMATION
  ===================================== */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0px)";
      }
    });
  });

  document.querySelectorAll("section").forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(60px)";
    section.style.transition = "1s ease";
    observer.observe(section);
  });


  /* =====================================
     POPUP MODAL
  ===================================== */
  const popup = document.getElementById("popupOverlay");
  const closeBtn = document.querySelector(".close-popup");

  if (popup) {
    setTimeout(() => {
      popup.classList.add("show");
    }, 800);
  }

  if (closeBtn) {
    closeBtn.onclick = () => popup.classList.remove("show");
  }

  if (popup) {
    popup.onclick = (e) => {
      if (e.target === popup) {
        popup.classList.remove("show");
      }
    };
  }


  /* =====================================
     HAMBURGER MENU
  ===================================== */
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  if (hamburger && menu) {

    // toggle menu
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("active");
      hamburger.classList.toggle("active"); // optional animation
    });

    // close menu when link clicked
    document.querySelectorAll(".menu a").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
        hamburger.classList.remove("active");
      });
    });

  }

});
