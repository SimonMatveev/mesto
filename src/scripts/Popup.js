class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') this.close();
    }

    open() {
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose.bind(this));
    }

    close() {
        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose.bind(this));
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

class PopupWithImage extends Popup {
    open(title, link) {
        super.open();
        this._popupElement.querySelector('.popup__image').src = link;
        this._popupElement.querySelector('.popup__image').alt = `${title}. Фотография`;;
        this._popupElement.querySelector('.popup__caption').textContent = title;
    }
}

class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popupElement.querySelector('.popup__form');
    }

    _getInputValues() {
        return Array.from(this._form.elements).filter(item => item.classList.contains('popup__input')).map(item => item.value);
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

export { PopupWithImage, PopupWithForm };