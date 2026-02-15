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

  document.querySelectorAll(".menu a").forEach(link=>{
    link.onclick = () => {
      hamburger.classList.remove("active");
      menu.classList.remove("active");
    }
  });


  /* ================= CALENDLY ================= */
  const calendlyModal = document.getElementById("calendlyModal");
  const openBtns = document.querySelectorAll(".open-calendly");
  const closeCalendly = document.querySelector(".close-calendly");

  openBtns.forEach(btn=>{
    btn.onclick = () => calendlyModal.classList.add("show");
  });

  closeCalendly.onclick = () => calendlyModal.classList.remove("show");

  calendlyModal.onclick = (e)=>{
    if(e.target === calendlyModal){
      calendlyModal.classList.remove("show");
    }
  };

});
