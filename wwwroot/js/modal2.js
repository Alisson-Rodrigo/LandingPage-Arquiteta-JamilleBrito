
document.addEventListener("DOMContentLoaded", function () {
    const viewButtons = document.querySelectorAll(".view-project");
    const parallaxContainer = document.getElementById("parallaxView");
    const parallaxImage = document.getElementById("parallaxImage");
    const closeParallax = document.getElementById("closeParallax");

    // Exibir Parallax ao clicar no botão "Ver Projeto"
    viewButtons.forEach((button) => {
        button.addEventListener("click", function (event) {
            event.stopPropagation();
            const imageContainer = this.closest(".image-container");
            const imageSrc = imageContainer.querySelector("img").src;
            parallaxImage.src = imageSrc;
            parallaxContainer.classList.add("visible");
        });
    });

    // Fechar Parallax ao clicar no botão "✖"
    closeParallax.addEventListener("click", function () {
        parallaxContainer.classList.remove("visible");
    });

    // Fechar ao clicar fora da imagem
    parallaxContainer.addEventListener("click", function (event) {
        if (event.target === parallaxContainer) {
            parallaxContainer.classList.remove("visible");
        }
    });
});
