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

