export default class Card {
    constructor({data, selector}) {
        this._title = data.title;
        this._linkCard = data.linkCard;
        this._cardDescription = data.cardDescription
        this._avatar = data.avatar;
        this._name = data.name;
        this._rarity = data.rarity;
        this._price = data.price;
        this._template = selector;
    }

    _getTemplate() {
        const placeElement = document.querySelector(this._template).content.querySelector('.element').cloneNode(true);
        return placeElement;
    }

    createCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.element__title').textContent = this._title;
        this._element.querySelector('.element__photo').alt = this._cardDescription;
        this._element.querySelector('.element__photo').setAttribute("src", this._linkCard)
        this._element.querySelector('.element__about-star_type_photo').setAttribute("src", this._avatar)
        this._element.querySelector('.element__about-star_type_photo').alt = this._name;
        this._element.querySelector('.element__about-star_type_name').textContent = this._name;
        this._element.querySelector('.element__feature-value_type_rarity').textContent = this._rarity;
        this._element.querySelector('.element__feature-value_type_price').textContent = this._price;
        console.log(this._element)
        return this._element;
    }
    
}
