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
initReviews(); 
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
========================================================= */
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
/* ==========================================================
   RESEÑAS — EXPANDIR / CONTRAER
========================================================== */
function initReviews(){
    const reviews = document.querySelectorAll(".review-card");
    if(!reviews.length) return;
    reviews.forEach(review => {
        const text = review.querySelector(".review-text");
        const button = review.querySelector(".review-expand");
        if(!text || !button) return;

        /* --------------------------------------------------
           Detectar si el texto es suficientemente largo
        -------------------------------------------------- */
        const lineHeight = parseFloat(
            window.getComputedStyle(text).lineHeight
        );
        const maxHeight = lineHeight * 5;
        /* --------------------------------------------------
           Si no necesita expansión, ocultamos el botón
        -------------------------------------------------- */
        if(text.scrollHeight <= maxHeight + 5){
            button.style.display = "none";
            return;
        }
        /* --------------------------------------------------
           El botón sí necesita funcionar
        -------------------------------------------------- */
        button.addEventListener("click", function(){
            const isExpanded =
                review.classList.toggle("expanded");
            this.setAttribute(
                "aria-expanded",
                isExpanded ? "true" : "false"
            );
            this.setAttribute(
                "aria-label",
                isExpanded
                    ? "Contraer reseña"
                    : "Leer reseña completa"
            );
        });
    });

}
