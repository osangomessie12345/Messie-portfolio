AOS.init({ duration: 1000 });

function closeAlert() {    
    document.getElementById("overlay").style.display = "none"; // Cache l'alerte
    document.getElementById("content").style.display = "block"; // Affiche le contenu
    document.body.style.overflow = "auto"; // Réactive le scroll
    AOS.refresh(); // Recharge AOS pour bien appliquer les animations
}
