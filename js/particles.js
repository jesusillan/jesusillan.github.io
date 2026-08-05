/* ==========================================================
   JESUSILLAN.COM
   PARTICLES.JS
   v1.0
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    createParticles();

});

function createParticles() {

    const container = document.querySelector(".hero");

    if (!container) return;

    const particleCount = 18;

    for (let i = 0; i < particleCount; i++) {

        const p = document.createElement("span");

        p.className = "spark";

        randomParticle(p);

        container.appendChild(p);

        animateParticle(p);

    }

}

function randomParticle(el) {

    el.style.left = Math.random() * 100 + "%";

    el.style.top = Math.random() * 100 + "%";

    el.style.animationDelay = (Math.random() * 6) + "s";

    el.style.animationDuration = (4 + Math.random() * 6) + "s";

}

function animateParticle(el){

    setInterval(()=>{

        el.style.left=(15+Math.random()*70)+"%";

        el.style.top=(10+Math.random()*80)+"%";

    },7000+Math.random()*4000);

}
