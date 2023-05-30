export class Card {
  constructor(title, link, template, handleOpening) {
    this._title = title;
    this._link = link;
    this._template = template;
    this._handleOpening = handleOpening;
  }

  _getTemplate() {
    return document.querySelector(this._template).content.cloneNode(true);
  }

  _handlePopupImage() {
    this.popupElement = document.querySelector('#image-popup');
    this._handleOpening(this.popupElement);
    this.popupElement.querySelector('.popup__image').src = this._link;
    this.popupElement.querySelector('.popup__image').alt = this._cardImage.alt;
    this.popupElement.querySelector('.popup__caption').textContent = this._title;
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => {
      this._handlePopupImage();
    });

    this._cardElement.querySelector('.photo-grid__like-button').addEventListener('click', evt => {
      evt.target.classList.toggle('photo-grid__like-button_active');
    });

    this._cardElement.querySelector('.photo-grid__item-delete').addEventListener('click', evt => {
      evt.target.parentNode.remove();
    });
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._cardImage = this._cardElement.querySelector('.photo-grid__image');
    this._cardTitle = this._cardElement.querySelector('.photo-grid__item-title');

    this._cardTitle.textContent = this._title;
    this._cardImage.src = this._link;
    this._cardImage.alt = `${this._title}. Фотография`;

    this._setEventListeners();

    return this._cardElement;
  }
};