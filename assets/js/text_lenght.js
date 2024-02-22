// Максимальное количество символов
const maxLength = 128;

// Текст
const originalText = "Популярность электронных сигарет стремительно растет по всему миру. По данным ВОЗ, девять из десяти курильщиков начинают курить в возрасте до 18 лет, а некоторые – уже в 11 лет.";

// Получаем элемент p
const paragraph = document.getElementById("truncated-text");

// Обрезаем текст до максимальной длины
const truncatedText = originalText.slice(0, maxLength);

// Устанавливаем обрезанный текст в элемент p
paragraph.textContent = truncatedText;