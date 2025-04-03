document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector(".services__card"); // Le conteneur du modal
    const modalContent = document.querySelector(".services__modal-content"); // Le contenu du modal
    const openButton = document.querySelector(".open-modal-button"); // Bouton qui ouvre le modal

    if (!modal || !modalContent || !openButton) return;

    // Ouvrir le modal
    openButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Empêche la propagation du clic
        modal.style.display = "block"; // Affiche le modal
    });

    // Fermer le modal en cliquant en dehors de .services__modal-content
    modal.addEventListener("click", function (event) {
        if (!modalContent.contains(event.target)) {
            modal.style.display = "none"; // Cache le modal
        }
    });

    // Empêcher la fermeture quand on clique sur le contenu du modal
    modalContent.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});
