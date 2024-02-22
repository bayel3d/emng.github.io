 document.addEventListener("DOMContentLoaded", function() {
        // Получаем изображение внутри элемента с классом "image main"
        var image = document.querySelector('.image.main img');

        // Устанавливаем максимальные размеры
        if (image) {
            image.style.maxWidth = '100%';
            image.style.maxHeight = '512px';

            image.style.objectFit = 'cover';
            image.style.objectPosition = 'center center';
        }
    });