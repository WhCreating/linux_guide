document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card_linux');
    const root = document.documentElement;
    
    cards.forEach(card => {
        
        card.addEventListener('mouseenter', function() {
            // Устанавливаем новое изображение для второго слоя
            root.style.setProperty("--back-blur", "10px")
            root.style.setProperty('--img-back-hover', `url("${card.querySelector("img").src}")`);
        });
        
        card.addEventListener('mouseleave', function() {
            // Сбрасываем второе изображение
            root.style.setProperty("--back-blur", "0px")
            root.style.setProperty('--img-back-hover', 'none');
        });
    });
});