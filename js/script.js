// Filtrado de categorías
document.addEventListener('DOMContentLoaded', function() {
    // Esta función se ejecutará cuando todos los componentes estén cargados
    setTimeout(initFilters, 100);
    
    function initFilters() {
        const categoryButtons = document.querySelectorAll('.category-btn');
        const productCards = document.querySelectorAll('.product-card');
        
        if (categoryButtons.length === 0 || productCards.length === 0) {
            // Reintentar si los elementos no están cargados aún
            setTimeout(initFilters, 100);
            return;
        }
        
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remover clase active de todos los botones
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                
                // Añadir clase active al botón clickeado
                button.classList.add('active');
                
                const category = button.getAttribute('data-category');
                
                // Mostrar u ocultar productos según la categoría
                productCards.forEach(card => {
                    if (category === 'all' || card.getAttribute('data-category') === category) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
        
        // Smooth scroll para enlaces internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
});