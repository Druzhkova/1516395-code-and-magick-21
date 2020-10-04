'use strict';

let personageName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
let personageSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
let coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
let eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

let returnsRandomData = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

let personagens = [
  {
    name: `${returnsRandomData(personageName)} ${returnsRandomData(personageSurnames)}`,
    coatColor: returnsRandomData(coatColor),
    eyesColor: returnsRandomData(eyesColor)
  },
  {
    name: `${returnsRandomData(personageName)} ${returnsRandomData(personageSurnames)}`,
    coatColor: returnsRandomData(coatColor),
    eyesColor: returnsRandomData(eyesColor)
  },
  {
    name: `${returnsRandomData(personageName)} ${returnsRandomData(personageSurnames)}`,
    coatColor: returnsRandomData(coatColor),
    eyesColor: returnsRandomData(eyesColor)
  },
  {
    name: `${returnsRandomData(personageName)} ${returnsRandomData(personageSurnames)}`,
    coatColor: returnsRandomData(coatColor),
    eyesColor: returnsRandomData(eyesColor)
  }
];

document.querySelector('.setup-similar').classList.remove('hidden');

let similarListElement = document.querySelector('.setup-similar-list');
let similarPersonagedTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

for (let i = 0; i < personagens.length; i++) {
  let personageElement = similarPersonagedTemplate.cloneNode(true);
  personageElement.querySelector('.setup-similar-label').textContent = personagens[i].name;
  personageElement.querySelector('.wizard-coat').style.fill = personagens[i].coatColor;
  personageElement.querySelector('.wizard-eyes').style.fill = personagens[i].eyesColor;
  similarListElement.appendChild(personageElement);
}

// Учебный проект: одеть Надежду

// Открытие/закрытие окна настройки персонажа
const blockSetUp = document.querySelector('.setup');
const setUpOpen = document.querySelector('.setup-open');
const setupOpenIcon = document.querySelector('.setup-open-icon');
const setUpClose = document.querySelector('.setup-close');

const onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

const openPopup = function () {
  blockSetUp.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

const closePopup = function () {
  blockSetUp.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setUpOpen.addEventListener('click', function () {
  openPopup();
});

setupOpenIcon.addEventListener('keydown', function (evt) { // открытие окна по нажатию кнопки ENTER, когда кнопка в фокусе
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setUpClose.addEventListener('click', function () {
  closePopup();
});

setUpClose.addEventListener('keydown', function (evt) { // закрытие окна по нажатию кнопки ENTER, когда кнопка закрытия в фокусе
  if (evt.key === 'Enter') {
    closePopup();
  }
});

// Изменение цвета мантии персонажа по нажатию
const wizardCoat = document.querySelector('.setup-wizard .wizard-coat');

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = returnsRandomData(coatColor);
});

// Изменение цвета глаз персонажа по нажатию
const wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = returnsRandomData(eyesColor);
});

// Изменение цвета фаерболов по нажатию
const setupFireballWrap = document.querySelector('.setup-fireball-wrap');
const colorFireball = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

setupFireballWrap.addEventListener('click', function () {
  setupFireballWrap.querySelector('input').value = returnsRandomData(colorFireball);
  setupFireballWrap.style.background = setupFireballWrap.querySelector('input').value;
});
