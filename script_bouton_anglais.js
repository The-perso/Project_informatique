// Sélectionner le bouton par son ID
const redirectButtonanglais = document.getElementById('redirectButtonanglais');

// Ajouter un écouteur d'événement pour le clic
redirectButtonanglais.addEventListener('click', function() {
    // Rediriger vers le fichier HTML spécifié
    window.location.href = 'quiz_english.html'; // redirection vers index.html en arabe
});