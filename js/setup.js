'use strict';

let personageName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
let personageSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
let coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
let eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

let blockSetUp = document.querySelector('.setup');
blockSetUp.classList.remove('hidden');

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
