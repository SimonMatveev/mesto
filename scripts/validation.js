const showInputError = (formElement, inputElement, errorMessage, formObject) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(formObject.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(formObject.errorClass);
};

const hideInputError = (formElement, inputElement, formObject) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(formObject.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(formObject.errorClass);
};

const checkValidity = (formElement, inputElement, formObject) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, formObject);
    } else {
        hideInputError(formElement, inputElement, formObject);
    }
};

const hasInvalidInput = inputList => inputList.some(input => !input.validity.valid);

const toggleButton = (inputList, submitButtonElement, formObject) => {
    if (hasInvalidInput(inputList)) {
        submitButtonElement.classList.add(formObject.inactiveButtonClass);
        submitButtonElement.setAttribute('disabled', true);
    } else {
        submitButtonElement.classList.remove(formObject.inactiveButtonClass);
        submitButtonElement.removeAttribute('disabled');
    };
};

const enableListeners = (formElement, formObject) => {
    const inputList = Array.from(formElement.querySelectorAll(formObject.inputSelector));
    const submitButtonElement = formElement.querySelector(formObject.submitButtonSelector);
    toggleButton(inputList, submitButtonElement, formObject);
    inputList.forEach(inputElement => {
        inputElement.addEventListener('input', () => {
            checkValidity(formElement, inputElement, formObject);
            toggleButton(inputList, submitButtonElement, formObject);
        });
    });

};

const enableValidation = formObject => {
    const formList = Array.from(document.querySelectorAll(formObject.formSelector));
    formList.forEach(formElement => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        enableListeners(formElement, formObject);
    });
};

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__btn',
    inactiveButtonClass: 'popup__btn_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}); 