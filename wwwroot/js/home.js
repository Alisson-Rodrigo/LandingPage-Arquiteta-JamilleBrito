document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function changeSlide() {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }

    setInterval(changeSlide, 5000); // Troca de imagem a cada 5 segundos

    document.querySelector(".btn-portfolio").addEventListener("click", function () {
        document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
    });
});
