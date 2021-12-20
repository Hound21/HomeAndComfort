const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
   const visibility = primaryNav.getAttribute("data-visible");

   if (visibility === "false"){
      primaryNav.setAttribute("data-visible", true);
      navToggle.setAttribute("aria-expanded", true);
   } else {
      primaryNav.setAttribute("data-visible", false);
      navToggle.setAttribute("aria-expanded", false);
   }
})

/* Scroll reveal effect */
window.addEventListener('scroll', reveal);

function reveal(){
   var reveals = document.querySelectorAll('.reveal, .reveal2, .reveal3');

   for(var i = 0; i < reveals.length; i++){

      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 0;

      if(revealtop < windowheight - revealpoint){
         reveals[i].classList.add('active');
      }
      else{
         reveals[i].classList.remove('active');
      }
   }

}


/* Smooth Scroll */
/*
function smoothScroll(target, duration){
   var target = document.querySelector(target);
   var targetPosition = target.getBoundingClientRect().top;
   var startPosition = window.pageYOffset;
   var distance = targetPosition - startPosition;
   var startTime = null;

   function animation(currentTime){
      if(startTime===null){
         startTime = currentTime;
      } 
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if(timeElapsed < duration){
         requestAnimationFrame(animation);
      }
   }
   
   function ease(t, b, c , d){
      t /= d/2;
      if(t < 1) return c/2*t*t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
   }

   requestAnimationFrame(animation);
}

var spezial = document.querySelector('.hero-button');
spezial.addEventListener('click', function(){
   smoothScroll('.products', 1000);
});
var spezial = document.querySelector('.products-button');
spezial.addEventListener('click', function(){
   smoothScroll('.products', 1000);
});
var spezial = document.querySelector('.about-button');
spezial.addEventListener('click', function(){
   smoothScroll('.about', 1000);
});
var spezial = document.querySelector('.spezial-button');
spezial.addEventListener('click', function(){
   smoothScroll('.spezial', 1000);
});
var spezial = document.querySelector('.contact-button');
spezial.addEventListener('click', function(){
   smoothScroll('.container-contact-box', 1000);
});
var spezial = document.querySelector('.spezial-button2');
spezial.addEventListener('click', function(){
   smoothScroll('.spezial', 1000);
});
*/

/* Scroll to top Button */
const buttonScrollToTop = document.querySelector("#ButtonScrollToTop");

window.onscroll = function() {showScrollButton()};

function showScrollButton() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    buttonScrollToTop.style.visibility = "visible";
    buttonScrollToTop.style.opacity = "1";
  } else {
    buttonScrollToTop.style.visibility = "hidden";
    buttonScrollToTop.style.opacity = "0";
  }
}
buttonScrollToTop.addEventListener("click", function () {
   $("html, body").animate({ scrollTop: 0 }, "slow");
});


/* New Scrolling */

$(document).ready(function(){
   // Add smooth scrolling to all links
   $("a").on('click', function(event) {
 
     // Make sure this.hash has a value before overriding default behavior
     if (this.hash !== "") {
       // Prevent default anchor click behavior
       event.preventDefault();
 
       // Store hash
       var hash = this.hash;
 
       // Using jQuery's animate() method to add smooth page scroll
       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
       $('html, body').animate({
         scrollTop: $(hash).offset().top
       }, 800, function(){
    
         // Add hash (#) to URL when done scrolling (default click behavior)
         window.location.hash = hash;
       });
     } // End if
   });
 });

 /* Refresh Scroll */
 $(document).ready(function(){
   $(this).scrollTop(0);
});

/* Contact Form */
var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
         form.reset()
         status.classList.add('success');
        status.innerHTML = "Danke für deine Nachricht";
      }).catch(error => {
         status.classList.add('error');
        status.innerHTML = "Ups! Da hat etwas nicht richtig funktioniert"
      });
    }
    form.addEventListener("submit", handleSubmit)