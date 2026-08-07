/* ==========================================================
   JESUSILLAN.COM
   SITE.JS
   v4.0
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

   initHeader();

initReveal();

initSmoothAnchors();

initScrollIndicator();

});
/* ==========================================================
SCROLL INDICATOR
========================================================== */

function initScrollIndicator(){

    const indicator = document.querySelector(".scroll-indicator");

    if(!indicator) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>40){

            indicator.classList.add("hidden");

        }else{

            indicator.classList.remove("hidden");

        }

    });

}

/* ==========================================================
   HEADER AL HACER SCROLL
========================================================== */

function initHeader(){

    const header = document.querySelector(".site-header");

    if(!header) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>40){

            header.classList.add("scrolled");

        }else{

            header.classList.remove("scrolled");

        }

    });

}


/* ==========================================================
   ANIMACIONES AL APARECER
========================================================== */

function initReveal(){

    const elements=document.querySelectorAll(".fade-up");

    if(!elements.length) return;

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("visible");

            }

        });

    },{
        threshold:.15
    });

    elements.forEach(el=>observer.observe(el));

}


/* ==========================================================
   SCROLL SUAVE
========================================================== */

function initSmoothAnchors(){

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            const target=document.querySelector(this.getAttribute("href"));

            if(!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        });

    });

}
