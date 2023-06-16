import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popupElement.querySelector('.popup__form');
    }

    _getInputValues() {
        this._inputValueObject = {};
        this._values = this._form.querySelectorAll('.popup__input');
        Array.from(this._values).forEach(item => {
            this._inputValueObject[item.name] = item.value;
        });
        return this._inputValueObject;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', evt => {
            this._handleFormSubmit(evt, this._getInputValues());
        });
    }

    close() {
        super.close();
        this._form.reset();
    }
}