document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       LAZY LOADING IMAGES
       ========================= */
    const images = document.querySelectorAll("img[data-src]");

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute("data-src");
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: "0px 0px 200px 0px"
    });

    images.forEach(img => imageObserver.observe(img));


    /* =========================
       LIGHTBOX
       ========================= */
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);

    const lightboxImage = document.createElement("img");
    lightbox.appendChild(lightboxImage);

    document.querySelectorAll("img").forEach(img => {
        img.addEventListener("click", () => {
            lightbox.classList.add("active");
            lightboxImage.src = img.src;
        });
    });

    lightbox.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });


    /* =========================
       SCROLL TO TOP BUTTON
       ========================= */
    const scrollBtn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            scrollBtn.classList.add("show");
        } else {
            scrollBtn.classList.remove("show");
        }
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});
