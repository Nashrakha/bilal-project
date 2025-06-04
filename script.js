// // Mobile menu toggle
// const menuBtn = document.getElementById('menu-btn');
// const mobileMenu = document.getElementById('mobile-menu');

// menuBtn.addEventListener('click', () => {
//     mobileMenu.classList.toggle('hidden');
//     mobileMenu.classList.toggle('show');
// });

// // Close mobile menu when clicking on a link
// document.querySelectorAll('#mobile-menu a').forEach(link => {
//     link.addEventListener('click', () => {
//         mobileMenu.classList.add('hidden');
//         mobileMenu.classList.remove('show');
//     });
// });

//cursor animation
// var main = document.querySelector("#main")
// var cursor = document.querySelector("#cursor")
// main.addEventListener("mousemove",function(dets){
//     gsap.to(cursor,{
//         x:dets.x,
//         y:dets.y,
//         duration:1,
//     })
// })
// imageDiv.addEventListener("mouseenter",function(){
//     cursor.innerHTML="View More"
// gsap.to(cursor,{
//     scale:4,
//    backgroundColor:"#edd6d682"
// })
// })
// imageDiv.addEventListener("mouseleave",function(){
//     cursor.innerHTML=""
//     gsap.to(cursor,{
//         scale:1,
//            backgroundColor:"#fff"
//     })
//     })

// website animation 


//marquee Project
const marquee = gsap.to(".marquee-track", {
  xPercent: -50,
  repeat: -1,
  duration: 20,
  ease: "linear"
});

// Mouse enter = pause
document.querySelector(".marquee-track").addEventListener("mouseenter", () => {
  marquee.pause();
});

// Mouse leave = play
document.querySelector(".marquee-track").addEventListener("mouseleave", () => {
  marquee.play();
});

const fullText = "Bilal ali";
const typeEl = document.getElementById("typewriter");
let index = 0; // Start after the first "B"

function typeWriter() {
  if (index < fullText.length) {
    typeEl.textContent += fullText.charAt(index);
    index++;
    setTimeout(typeWriter, 150); // typing speed
  }
}

typeWriter();
