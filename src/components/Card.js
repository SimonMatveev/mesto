export class Card {
  constructor(title, link, template, openElement) {
    this._title = title;
    this._link = link;
    this._template = template;
    this._openElement = openElement;
    this._popupElement = document.querySelector('#image-popup');
  }

  _getTemplate() {
    return document.querySelector(this._template).content.firstElementChild.cloneNode(true);
  }

  _like() {
    this._cardLikeButton.classList.toggle('photo-grid__like-button_active');
  }

  _deleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => this._openElement(this._title, this._link));

    this._cardLikeButton.addEventListener('click', () => this._like());

    this._cardElement.querySelector('.photo-grid__item-delete').addEventListener('click', () => this._deleteCard())
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._cardImage = this._cardElement.querySelector('.photo-grid__image');
    this._cardTitle = this._cardElement.querySelector('.photo-grid__item-title');
    this._cardLikeButton = this._cardElement.querySelector('.photo-grid__like-button');
    this._cardTitle.textContent = this._title;
    this._cardImage.src = this._link;
    this._cardImage.alt = `${this._title}. Фотография`;

    this._setEventListeners();

    return this._cardElement;
  }
};