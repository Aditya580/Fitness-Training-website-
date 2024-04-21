let subMenu=document.getElementById("subMenu");

function toggleMenu(){
    subMenu.classList.toggle("open-menu");

}


var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});