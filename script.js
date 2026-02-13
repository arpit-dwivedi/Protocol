const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.opacity=1
entry.target.style.transform="translateY(0px)"
}
})
})

document.querySelectorAll("section").forEach(sec=>{
sec.style.opacity=0
sec.style.transform="translateY(60px)"
sec.style.transition="1s"
observer.observe(sec)
})
document.addEventListener("DOMContentLoaded", () => {

const popup = document.getElementById("popupOverlay");
const closeBtn = document.querySelector(".close-popup");

setTimeout(() => {
  popup.classList.add("show");
}, 800);

closeBtn.onclick = () => popup.classList.remove("show");

popup.onclick = (e) => {
  if(e.target === popup){
    popup.classList.remove("show");
  }
};

});

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", ()=>{
menu.classList.toggle("show");
});

/* close menu after clicking link */
document.querySelectorAll(".menu a").forEach(link=>{
link.addEventListener("click", ()=>{
menu.classList.remove("show");
});
});
