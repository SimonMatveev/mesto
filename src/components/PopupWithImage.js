import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = this._popupElement.querySelector('.popup__image');
        this._title = this._popupElement.querySelector('.popup__caption');
    }

    open(title, link) {
        super.open();
        this._image.src = link;
        this._image.alt = `${title}. Фотография`;;
        this._title.textContent = title;
    }
}