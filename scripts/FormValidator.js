export class FormValidator {
    constructor(formObject, form) {
        this._formObject = formObject;
        this._form = form;
    }

    _getErrorElement(inputElement) {
        return this._form.querySelector(`.${inputElement.id}-error`)
    }

    _showInputError(inputElement, errorMessage) {
        this._errorElement = this._getErrorElement(inputElement);
        inputElement.classList.add(this._formObject.inputErrorClass);
        this._errorElement.textContent = errorMessage;
        this._errorElement.classList.add(this._formObject.errorClass);
    };

    hideInputError(inputElement) {
        this._errorElement = this._getErrorElement(inputElement);
        inputElement.classList.remove(this._formObject.inputErrorClass);
        this._errorElement.textContent = '';
        this._errorElement.classList.remove(this._formObject.errorClass);
    };

    _checkValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this.hideInputError(inputElement);
        }
    };

    _hasInvalidInput() {
        return this._inputList.some(input => !input.validity.valid);
    }

    disableButton() {
        this._submitButtonElement.classList.add(this._formObject.inactiveButtonClass);
        this._submitButtonElement.setAttribute('disabled', true);
    }

    enableButton() {
        this._submitButtonElement.classList.remove(this._formObject.inactiveButtonClass);
            this._submitButtonElement.removeAttribute('disabled');
    }

    _toggleButton() {
        this._submitButtonElement = this._form.querySelector(this._formObject.submitButtonSelector);
        if (this._hasInvalidInput()) {
            this.disableButton();
        } else {
            this.enableButton();
        };
    };

    _enableListeners() {
        this._inputList = Array.from(this._form.querySelectorAll(this._formObject.inputSelector));
        this._toggleButton();
        this._inputList.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this._checkValidity(inputElement);
                this._toggleButton();
            });
        });

        this._form.addEventListener('reset', () => {
            this._inputList.forEach(inputElement => {
                this.hideInputError(inputElement);
            });
        });
    };

    enableValidation() {
        this._form.addEventListener('submit', evt => {
            evt.preventDefault();
        });
        this._enableListeners();
    };
}