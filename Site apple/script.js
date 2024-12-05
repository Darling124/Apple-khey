// Ajoute une alerte quand on clique sur un bouton "En savoir plus"
document.querySelector('.btn').addEventListener('click', function (event) {
    event.preventDefault();
    alert("Découvrez bientôt nos produits !");
});