const questionText = document.getElementById('questionText');
const photosList = document.getElementById('photosList');
const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');
const restartButton = document.getElementById('restart');
const funnyPhotos = [
    'https://ru.meming.world/images/ru/thumb/7/73/%D0%A8%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD_%D0%BA%D0%BE%D1%82.jpg/300px-%D0%A8%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD_%D0%BA%D0%BE%D1%82.jpg',
    'https://media.2x2tv.ru/content/images/size/w1440h1440/2021/05/-----5.jpg',
    'https://appleinsider.ru/wp-content/uploads/2023/10/memes_iphone_head-750x477.jpg',
    'https://upload.wikimedia.org/wikipedia/ru/thumb/9/94/%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg/640px-%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg'
];

// Вопросы и варианты ответов с изображениями
const questions = [
    {
        question: 'Какое из этих изображений фейк?',
        options: [
            {src: 'https://britannicaeducation.com/wp-content/uploads/2024/02/Frog.jpg', answer: 'Фото 1'},
            {src: 'https://britannicaeducation.com/wp-content/uploads/2024/02/Blue-frog.jpg', answer: 'Фото 2'}
        ],
        correctAnswer: 'Фото 1'
    },
    {
        question: 'Какое из этих изображений фейк?',
        options: [
            {src: 'https://britannicaeducation.com/wp-content/uploads/2024/02/Titanic-sunset.jpg', answer: 'Фото 1'},
            {src: 'https://britannicaeducation.com/wp-content/uploads/2024/03/Titanic.png', answer: 'Фото 2'}
        ],
        correctAnswer: 'Фото 1'
    },
    {
        question: 'Какое из этих изображений фейк?',
        options: [
            {src: 'https://britannicaeducation.com/wp-content/uploads/2024/02/Students-Activity.jpg', answer: 'Фото 1'},
            {src: 'https://britannicaeducation.com/wp-content/uploads/2024/02/Kids-doing-art.jpg', answer: 'Фото 2'}
        ],
        correctAnswer: 'Фото 2'
    },
    {
        question: 'Какое из этих изображений фейк?',
        options: [
            {src: 'https://britannicaeducation.com/wp-content/uploads/2024/02/Mt-Fuji.jpg', answer: 'Фото 1'},
            {src: 'https://britannicaeducation.com/wp-content/uploads/2024/02/Mount-Fuji.jpg', answer: 'Фото 2'}
        ],
        correctAnswer: 'Фото 1'
    },
    {
        question: 'Какое из этих изображений фейк?',
        options: [
            {src: 'https://britannicaeducation.com/wp-content/uploads/2024/02/Rocket.jpg', answer: 'Фото 1'},
            {src: 'https://britannicaeducation.com/wp-content/uploads/2024/02/Launch.jpg', answer: 'Фото 2'}
        ],
        correctAnswer: 'Фото 2'
    },
    {
        question: 'Какое из этих изображений фейк?',
        options: [
            {src: 'https://britannicaeducation.com/wp-content/uploads/2024/02/Hong-Kong.jpg', answer: 'Фото 1'},
            {src: 'https://britannicaeducation.com/wp-content/uploads/2024/02/HK.jpg', answer: 'Фото 2'}
        ],
        correctAnswer: 'Фото 2'
    },
    {
        question: 'Какое из этих изображений фейк?',
        options: [
            {src: 'https://britannicaeducation.com/wp-content/uploads/2024/02/Northern-Lights.jpg', answer: 'Фото 1'},
            {src: 'https://britannicaeducation.com/wp-content/uploads/2024/02/Aurora.jpg', answer: 'Фото 2'}
        ],
        correctAnswer: 'Фото 1'
    },
    {
        question: 'Какое из этих изображений фейк?',
        options: [
            {src: 'https://britannicaeducation.com/wp-content/uploads/2024/02/Pangolin-HD.jpg', answer: 'Фото 1'},
            {src: 'https://britannicaeducation.com/wp-content/uploads/2024/02/Pangolin-scales.jpg', answer: 'Фото 2'}
        ],
        correctAnswer: 'Фото 1'
    },
    {
        question: 'Какое из этих изображений фейк?',
        options: [
            {src: 'https://britannicaeducation.com/wp-content/uploads/2024/02/Papyrus.jpg', answer: 'Фото 1'},
            {src: 'https://britannicaeducation.com/wp-content/uploads/2024/02/Egyptian.jpg', answer: 'Фото 2'}
        ],
        correctAnswer: 'Фото 2'
    },
    {
        question: 'Какое из этих изображений фейк?',
        options: [
            {src: 'https://britannicaeducation.com/wp-content/uploads/2024/02/suffragettes.jpg', answer: 'Фото 1'},
            {src: 'https://britannicaeducation.com/wp-content/uploads/2024/02/womenssuffrage.jpg', answer: 'Фото 2'}
        ],
        correctAnswer: 'Фото 2'
    },

    // Добавьте здесь еще вопросы, если нужно
];

let currentQuestionIndex = 0;
let score = 0;

// Функция для отображения текущего вопроса и вариантов ответов
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    photosList.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const img = document.createElement('img');
        img.src = option.src;
        img.alt = option.answer;
        img.addEventListener('click', () => checkAnswer(option.answer));
        photosList.appendChild(img);
    });
}

// Функция для проверки выбранного ответа
function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
        resultDiv.textContent = 'Правильно!';
    } else {
        resultDiv.textContent = 'Неправильно :(';
    }
    // Переход к следующему вопросу после задержки
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
            resultDiv.textContent = '';
        } else {
            showFinalScore();
        }
    }, 2000); // 2 секунды задержки перед переходом к следующему вопросу
}

// Функция для показа итогового счета
function showFinalScore() {
    questionText.textContent = 'Викторина завершена!';
    photosList.innerHTML = '';
    resultDiv.textContent = '';
    scoreDiv.textContent = 'Твой счет: ' + score + ' из ' + questions.length;
    scoreDiv.style.display = 'block'; // Показать результат

    // Определение фотографии в зависимости от счета
    let photoIndex = 0;
    if (score >= 1 && score <= 3) {
        photoIndex = 0; // Первая фотография
    } else if (score >= 4 && score <= 6) {
        photoIndex = 1; // Вторая фотография
    } else if (score >= 7 && score <= 9) {
        photoIndex = 2; // Третья фотография
    } else if (score === 10) {
        photoIndex = 3; // Четвертая фотография
    }

    // Показать прикольную фотографию
    const funnyImg = document.createElement('img');
    funnyImg.src = funnyPhotos[photoIndex];
    funnyImg.alt = 'Прикольная фотография';
    // funnyImg.style.width = '50%'; // Установите ширину по вашему желанию
    photosList.appendChild(funnyImg);
    restartButton.style.display = 'block'; // Показать кнопку "Начать заново"
}

// Функция для перезапуска викторины
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultDiv.textContent = '';
    scoreDiv.style.display = 'none';
    restartButton.style.display = 'none';
    displayQuestion();
}

// Добавить обработчик события для кнопки "Начать заново"
restartButton.addEventListener('click', restartQuiz);

// Начать викторину
displayQuestion();