// Sélectionner le bouton par son ID
const redirectButtonfrancais = document.getElementById('redirectButtonfrancais');

// Ajouter un écouteur d'événement pour le clic
redirectButtonfrancais.addEventListener('click', function() {
    // Rediriger vers le fichier HTML spécifié
    window.location.href = 'index_french.html'; // redirection vers index.html en francais
});
