document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalText = document.getElementById("modal-text");
    const closeModal = document.querySelector(".close");
    const prevArrow = document.getElementById("prev");
    const nextArrow = document.getElementById("next");

    let currentIndex = 0;
    let currentProjectImages = [];

    const projetos = [
        {
            titulo: "Projeto Residencial",
            imagens: ["images/Residencial/residencial1.jpg", "images/Residencial/residencial2.jpg", "images/Residencial/residencial3.jpg"],
            descricao: "Este é um projeto Residencial moderno, com um design inovador e funcionalidade excepcional."
        },
        {
            titulo: "Projeto Comercial",
            imagens: ["images/comercial/Comercial1.jpg", "images/Comercial/comercial2.jpg", "images/Comercial/comercial3.jpg"],
            descricao: "Projeto comercial que combina elegância e eficiência para ambientes de trabalho sofisticados."
        },
        {
            titulo: "Projeto de Escritório",
            imagens: ["images/Escritorio/escritorio1.jpg", "images/Escritorio/escritorio2.jpg", "images/Escritorio/escritorio3.jpg"],
            descricao: "Design exclusivo para escritórios, promovendo um ambiente de trabalho confortável e produtivo."
        }
    ];

    window.abrirModal = function (index) {
        currentIndex = 0;
        currentProjectImages = projetos[index].imagens;
        modalTitle.innerText = projetos[index].titulo;
        modalText.innerText = projetos[index].descricao;
        modal.style.display = "flex";
        atualizarImagem();
    };

    function atualizarImagem() {
        modalImg.src = currentProjectImages[currentIndex];
    }

    window.fecharModal = function () {
        modal.style.display = "none";
    };

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            fecharModal();
        }
    });

    window.anteriorImagem = function () {
        currentIndex = (currentIndex - 1 + currentProjectImages.length) % currentProjectImages.length;
        atualizarImagem();
    };

    window.proximaImagem = function () {
        currentIndex = (currentIndex + 1) % currentProjectImages.length;
        atualizarImagem();
    };
});