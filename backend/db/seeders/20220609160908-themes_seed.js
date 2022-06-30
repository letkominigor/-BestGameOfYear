module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Themes', [
      {
        title: 'IT',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Cinema',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Animals',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert('Questions', [
      {
        questions: '1. Что такое DNS ?',
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questions: '2.Какая максимальная длина кабеля UTP?',
        theme_id: 1,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questions: '3. Как проверить значение NaN',
        theme_id: 1,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questions: '4. Что возвращает typeof null ?',
        theme_id: 1,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questions: '5. К чему приведёт такой код ?',
        theme_id: 1,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questions: '6. Какие режимы передачи данных бывают?',
        theme_id: 1,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questions: '1.Собака какой породы была главным героем в фильме "Бетховен"?',
        theme_id: 2,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questions: '2.На кабриолете какой марки ехали в Вегас герои фильма "Мальчишник в Вегасе"?',
        theme_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questions: '3.Откуда плыл "Титаник"?',
        theme_id: 2,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questions: '4.Сколько раз сбегала из-под алтаря героиня Джулии Робертс в мелодраме "Сбежавшая невеста"?',
        theme_id: 2,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questions: '5.Кем был герой Бреда Питта в драме "Знакомьтесь, Джо Блэк"?',
        theme_id: 2,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questions: '6.В комедии «Брюс Всемогущий» был показан реально существующий телефонный номер, и его владелица начала судебный процесс против кинокомпании, так как ее стали донимать фанаты, которые безустанно звонили и спрашивали .....',
        theme_id: 2,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questions: '1.Как быстро страусы могут бегать?',
        theme_id: 3,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questions: '2.Какого цвета кожа полярного медведя?',
        theme_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questions: '3.Как быстро колибри машет крыльями?',
        theme_id: 3,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questions: '4.Какой мощности электрический заряд угря?',
        theme_id: 3,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questions: '5.Что отличает морского конька от других представителей животного мира?',
        theme_id: 3,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questions: '6.Без какой важной вещи кенгуровые прыгуны спокойно могут прожить?',
        theme_id: 3,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert('Answers', [
      {
        answers: 'Это система доменных имен.',
        question_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'Онлайн магазин.',
        question_id: 1,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'Протокол.',
        question_id: 1,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: '10 метров',
        question_id: 2,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: '50',
        question_id: 2,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: '100',
        question_id: 2,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'console.log(isNaN())',
        question_id: 3,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'Number.isNaN',
        question_id: 3,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'function checkIsNan(value) {return NaN === NaN}',
        question_id: 3,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'null',
        question_id: 4,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'true',
        question_id: 4,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'object',
        question_id: 4,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'приведёт к Hello!',
        question_id: 5,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'приведёт к маме на борщ',
        question_id: 5,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'приведёт к undefined is not a function',
        question_id: 5,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'симплексный',
        question_id: 6,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'архивный',
        question_id: 6,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'спектральный',
        question_id: 6,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'Ньюфаундленд',
        question_id: 7,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'Лабрадор',
        question_id: 7,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'Сербернар',
        question_id: 7,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'Мерседес',
        question_id: 8,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'Кадилак',
        question_id: 8,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'Лада Гранта',
        question_id: 8,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'Дублин',
        question_id: 9,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'Лондон',
        question_id: 9,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'Хогвардс',
        question_id: 9,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'Два',
        question_id: 10,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'Четыре',
        question_id: 10,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'Три',
        question_id: 10,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'Лузером',
        question_id: 11,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'Смертью',
        question_id: 11,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'Адвокатом',
        question_id: 11,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'Джима Керри',
        question_id: 12,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'Телестудию',
        question_id: 12,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'Бога',
        question_id: 12,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: '60 км/ч',
        question_id: 13,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: '70 км/ч',
        question_id: 13,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: '80 км/ч',
        question_id: 13,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'Бежевого',
        question_id: 14,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'Чёрного',
        question_id: 14,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'Розового',
        question_id: 14,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: '300 взмахов в минуту',
        question_id: 15,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: '200 взмахов в секунду',
        question_id: 15,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: '50 взмахов в секунду',
        question_id: 15,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: '260 вольт',
        question_id: 16,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: '600 вольт',
        question_id: 16,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: '1200 вольт',
        question_id: 16,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'Самцы могут рожать',
        question_id: 17,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'Самки умирают после родов',
        question_id: 17,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'Может прожить без воды до суток',
        question_id: 17,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'Без воды',
        question_id: 18,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'Без света',
        question_id: 18,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'Без палева >:)',
        question_id: 18,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Themes');
    await queryInterface.bulkDelete('Questions');
    await queryInterface.bulkDelete('Answers');
  },
};
