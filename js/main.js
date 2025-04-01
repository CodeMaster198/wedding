// Gestion du formulaire d'inscription
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('inscription-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des données du formulaire
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Simulation d'envoi des données
            console.log('Données du formulaire:', data);
            
            // Afficher un message de confirmation
            alert('Merci pour votre inscription ! Nous vous contacterons bientôt.');
            form.reset();
        });
    }
});

// Animation du scroll pour la navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation des cartes d'événements au scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.event-card').forEach(card => {
    observer.observe(card);
});

// Gestion du menu mobile
const createMobileMenu = () => {
    const nav = document.querySelector('.main-nav');
    const navLinks = document.querySelector('.nav-links');
    
    // Créer le bouton menu mobile
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-btn';
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    
    // Ajouter le bouton à la navigation
    nav.insertBefore(menuButton, navLinks);
    
    // Gérer le clic sur le bouton
    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
};

// Appeler la fonction de création du menu mobile
createMobileMenu(); 