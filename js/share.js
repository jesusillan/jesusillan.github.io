/* ==========================================================
   JESUSILLAN.COM
   SHARE.JS
   v4.0
========================================================== */

function sharePage(title = document.title) {

    const url = window.location.href;

    // Compartir nativo (móviles)
    if (navigator.share) {

        navigator.share({
            title: title,
            url: url
        });

        return;
    }

    // Escritorio → copiar enlace
    navigator.clipboard.writeText(url)
        .then(() => showToast("✔ Enlace copiado al portapapeles"))
        .catch(() => alert("No ha sido posible copiar el enlace."));
}


/* ==========================================================
   TOAST
========================================================== */

function showToast(message) {

    let toast = document.getElementById("site-toast");

    if (!toast) {

        toast = document.createElement("div");

        toast.id = "site-toast";

        document.body.appendChild(toast);

    }

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 2200);

}
/* ==========================================================
   BOTONES DE COMPARTIR
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".btn-share").forEach(button => {

        button.addEventListener("click", () => {

            sharePage(
                button.dataset.title || document.title
            );

        });

    });

});
