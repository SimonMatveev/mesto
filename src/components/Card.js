export class Card {
  constructor(item, template, userId, openElement, openConfirmationPopup) {
    this._name = item.name;
    this._link = item.link;
    this._likes = item.likes;
    this._id = item._id;
    this._owner = item.owner._id;
    this._userId = userId;
    this._template = template;
    this._openElement = openElement;
    this._openConfirmationPopup = openConfirmationPopup;
  }

  _getTemplate() {
    return document.querySelector(this._template).content.cloneNode(true).querySelector('.photo-grid__item');
  }

  _like() {
    this._cardLikeButton.classList.toggle('photo-grid__like-button_active');
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => this._openElement(this._name, this._link));

    this._cardLikeButton.addEventListener('click', () => this._like());

    this._deleteButton.addEventListener('click', () => this._openConfirmationPopup(this._id, this._cardElement));
  }

  _enableDeletion() {
    this._deleteButton.classList.add('photo-grid__item-delete_visible');
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._cardImage = this._cardElement.querySelector('.photo-grid__image');
    this._cardTitle = this._cardElement.querySelector('.photo-grid__item-title');
    this._cardLikeButton = this._cardElement.querySelector('.photo-grid__like-button');
    this._cardLikeNumber = this._cardElement.querySelector('.photo-grid__like-number');
    this._deleteButton = this._cardElement.querySelector('.photo-grid__item-delete')
    this._cardTitle.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = `${this._name}. Фотография`;
    this._cardLikeNumber.textContent = this._likes.length;
    
    if (this._userId === this._owner) {
      this._enableDeletion();
    }

    this._setEventListeners();

    return this._cardElement;
  }
};