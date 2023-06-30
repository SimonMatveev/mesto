import { Popup } from "./Popup";

export class PopupForDeletion extends Popup {
  constructor(popupSelector, deleteFunc) {
    super(popupSelector);
    this._deleteElement = deleteFunc;
    this._confirmButton = this._popupElement.querySelector('.popup__btn');
  }

  open(id, element) {
    super.open();
    this._id = id;
    this._cardElement = element;
  }

  setEventListeners() {
    super.setEventListeners();

    this._confirmButton.addEventListener('click', () => {
      this._deleteElement(this._id, this._cardElement);
      this.close();
    });

  }
}