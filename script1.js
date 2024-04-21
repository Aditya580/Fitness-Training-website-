 var crsr=document.querySelector("#cursor")
 var blur=document.querySelector("#cursor-blur")
 document.addEventListener("mousemove",function(dets){
     crsr.style.left = dets.x +"px"
     crsr.style.top = dets.y + "px" 
     blur.style.left = dets.x -250 +"px"
     blur.style.top = dets.y -250 + "px" 
})


var tl = gsap.timeline({scrollTrigger:{
  trigger:"#two",
  start:"0% 95%",
  end:"70% 60%",
  scrub:true, //reverse animation
  
}})

tl.to("#db",{

  top:"110%",
  left:"-5%",
},'dum')


tl.to("#db-1",{
  top:"140%",
  left:"19%"

},'dum')

gsap.to(".imagecontainer",{
    ease:Expo.easeInOut,
    width:"100%",
    duration:2,
    stagger:2,
    repeat: -1 
})


gsap.to(".text h1",
{
    
    ease:Expo.easeInOut,
    stagger:3,
    top:"0"
})
gsap.to(".text h1",
{
    delay:2,
    ease:Expo.easeInOut,

    top:"-100%"
})
// gsap.to("#main", {
//     backgroundColor: "#000",
//     scrollTrigger: {
//       trigger: "#main",
//       scroller: "body",
//       // markers: true,
//       start: "top -25%",
//       end: "top -70%",
//       scrub: 2,
//     },
//   });

  
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

function animateText() {
  gsap.to(".text h1", {
     
      duration:2,
      ease: Expo.easeInOut,
      stagger:0.2,
      top: "0",
      onComplete: function() {
          gsap.to(".text h1", {
            duration:0.8, 
            delay:4,  
            ease: Expo.easeInOut,
             top: "-100%",
              onComplete: animateText // Restart the animation
          });
      }
  });
}

// Start the animation
animateText();

var swiper = new Swiper(".mySwiper", {
  speed: 600,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




