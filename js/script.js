// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour calculer la date de fin du mois
    function getEndOfMonth() {
        const now = new Date();
        const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        endOfMonth.setHours(23, 59, 59, 999);
        return endOfMonth;
    }

    // Fonction pour mettre à jour le compte à rebours
    function updateCountdown() {
        const now = new Date();
        const endOfMonth = getEndOfMonth();
        const diff = endOfMonth - now;

        if (diff <= 0) {
            clearInterval(countdownInterval);
            const container = document.querySelector('.countdown-container');
            if (container) {
                container.style.display = 'none';
            }
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // Mise à jour des éléments avec animation
        updateElement('days', days);
        updateElement('hours', hours);
        updateElement('minutes', minutes);
        updateElement('seconds', seconds);
    }

    // Fonction pour mettre à jour un élément avec animation
    function updateElement(id, value) {
        const element = document.getElementById(id);
        if (!element) return;

        const currentValue = parseInt(element.textContent);
        
        if (currentValue !== value) {
            element.style.transform = 'scale(1.2)';
            element.style.color = '#c19b2e';
            
            setTimeout(() => {
                element.textContent = value.toString().padStart(2, '0');
                element.style.transform = 'scale(1)';
                element.style.color = '';
            }, 200);
        }
    }

    // Démarrer le compte à rebours
    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Mise à jour immédiate
}); 