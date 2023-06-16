export class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscCloseBind = this._handleEscClose.bind(this);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') this.close();
    }

    open() {
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscCloseBind);
    }

    close() {
        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscCloseBind);
    }

    setEventListeners() {
        this._popupElement.addEventListener('click', evt => {
            if (evt.target === this._popupElement) this.close();
        });

        this._popupCloseButton = this._popupElement.querySelector('.popup__close');
        this._popupCloseButton.addEventListener('click', () => {
            this.close();
        });
    }
}


