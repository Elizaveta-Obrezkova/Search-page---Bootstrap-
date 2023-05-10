import './index.css';
import { initialCards } from './utils/constants.js';
import Card from './components/Card.js';
import Section from './components/Section.js';


// Создание карточки

function createCard(item) {
  const card = new Card({
    data: item,
    selector: '#element-template'
  });
  const placeElement = card.createCard();
  return placeElement
};

// Добавить карточки на страницу
const cardList = new Section({
  renderer: (carditem) => {
    const placeElement = createCard(carditem);
    cardList.addItem(placeElement);
  }
},
  '.elements');

cardList.renderItems(initialCards);

function getVals() {
  // Get slider values
  var parent = this.parentNode;
  var slides = parent.getElementsByTagName("input");
  var slide1 = parseFloat(slides[0].value);
  var slide2 = parseFloat(slides[1].value);
  // Neither slider will clip the other, so make sure we determine which is larger
  if (slide1 > slide2) { var tmp = slide2; slide2 = slide1; slide1 = tmp; }

  var displayElement1 = parent.getElementsByClassName("rangeValue1")[0];
  displayElement1.innerHTML = slide1 + " ₽";
  var displayElement2 = parent.getElementsByClassName("rangeValue2")[0];
  displayElement2.innerHTML = slide2 + " ₽";
}

window.onload = function () {
  // Initialize Sliders
  var sliderSections = document.getElementsByClassName("range-slider");
  for (var x = 0; x < sliderSections.length; x++) {
    var sliders = sliderSections[x].getElementsByTagName("input");
    for (var y = 0; y < sliders.length; y++) {
      if (sliders[y].type === "range") {
        sliders[y].oninput = getVals;
        // Manually trigger event first time to display values
        sliders[y].oninput();
      }
    }
  }
}