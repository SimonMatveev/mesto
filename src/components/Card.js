export class Card {
  constructor(item, template, userId, { openImagePopupCallback, openConfirmationPopupCallback, likeButtonCallback, dislikeButtonCallback }) {
    this._name = item.name;
    this._link = item.link;
    this._likes = item.likes;
    this._id = item._id;
    this._owner = item.owner._id;
    this._userId = userId;
    this._template = template;
    this._openElement = openImagePopupCallback;
    this._openConfirmationPopup = openConfirmationPopupCallback;
    this._like = likeButtonCallback;
    this._dislike = dislikeButtonCallback;
  }

  _getTemplate() {
    return document.querySelector(this._template).content.cloneNode(true).querySelector('.photo-grid__item');
  }

  _isLiked() {
    return this._likes.some(item => item._id === this._userId);
  }

  _likeUpdate(res) {
    this._cardLikeButton.classList.toggle('photo-grid__like-button_active');
    this._cardLikeNumber.textContent = res.likes.length;
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => this._openElement());

    this._cardLikeButton.addEventListener('click', () => {
      if (this._isLiked()) {
        this._dislike(this._id)
          .then(res => {
            this._likeUpdate(res);
          })
          .catch(err => console.log(err));
      } else {
        this._like(this._id)
          .then(res => {
            this._likeUpdate(res);
          })
          .catch(err => console.log(err));
      }

    });

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

    if (this._isLiked()) {
      this._cardLikeButton.classList.add('photo-grid__like-button_active');
    }

    if (this._userId === this._owner) {
      this._enableDeletion();
    }

    this._setEventListeners();

    return this._cardElement;
  }
};