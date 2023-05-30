import { Card } from './Card.js';
import { initialCards } from './initialCards.js';
import { FormValidator } from './FormValidator.js';

const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__text');
const gridContainer = document.querySelector('.photo-grid');

const editButton = document.querySelector('.profile__edit-button');
const popupProfileElement = document.querySelector('#edit-popup');
const popupProfileForm = popupProfileElement.querySelector('.popup__form');
const popupProfileNameInput = popupProfileElement.querySelector('#name');
const popupProfileDesc = popupProfileElement.querySelector('#description');
const popupProfileButton = popupProfileElement.querySelector('.popup__btn')

const addCardButton = document.querySelector('.profile__add-button')
const popupAddCardElement = document.querySelector('#add-popup');
const popupAddCardForm = popupAddCardElement.querySelector('.popup__form');
const popupAddCardTitle = popupAddCardElement.querySelector('#card-title');
const popupAddCardLink = popupAddCardElement.querySelector('#card-link');
const popupAddCardButton = popupAddCardElement.querySelector('.popup__btn')

function handleClosingOnEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    handleClosing(openedPopup);
  }
};

function handleOpening(element) {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', handleClosingOnEsc);
}

function handleClosing(element) {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleClosingOnEsc);
  if (element.querySelector('.popup__form')) element.querySelector('.popup__form').reset();
}

function handleEditButton() {
  handleOpening(popupProfileElement);
  popupProfileNameInput.value = profileName.textContent;
  popupProfileDesc.value = profileDescription.textContent;
  if (popupProfileButton.classList.contains('popup__btn_disabled')) {
    popupProfileButton.classList.remove('popup__btn_disabled');
    popupProfileButton.removeAttribute('disabled');
  }
}

function handleAddCardButton() {
  handleOpening(popupAddCardElement);
  popupAddCardButton.classList.add('popup__btn_disabled');
  popupAddCardButton.setAttribute('disabled', true);
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupProfileNameInput.value;
  profileDescription.textContent = popupProfileDesc.value;
  handleClosing(popupProfileElement);
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const cardElement = new Card(popupAddCardTitle.value, popupAddCardLink.value, '#photo-grid-item', handleOpening);
  gridContainer.prepend(cardElement.generateCard());
  handleClosing(popupAddCardElement);
  evt.target.reset()
}

function addClosePopupListeners(popupElement) {
  popupElement.addEventListener('click', evt => {
    if (evt.target === popupElement) {
      handleClosing(popupElement);
    }
  });

  const popupCloseButton = popupElement.querySelector('.popup__close');
  popupCloseButton.addEventListener('click', () => {
    handleClosing(popupElement);
  });
};

const popupElementList = Array.from(document.querySelectorAll('.popup'));

popupElementList.forEach(popupElement => {
  addClosePopupListeners(popupElement);
});

initialCards.forEach(item => {
  const cardElement = new Card(item.name, item.link, '#photo-grid-item', handleOpening);
  gridContainer.prepend(cardElement.generateCard());
});

editButton.addEventListener('click', handleEditButton);

addCardButton.addEventListener('click', handleAddCardButton);

popupProfileForm.addEventListener('submit', handleEditFormSubmit);

popupAddCardForm.addEventListener('submit', handleAddFormSubmit);

const formList = Array.from(document.forms);

formList.forEach(formElement => {
  const FormValidatorItem = new FormValidator({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__btn',
    inactiveButtonClass: 'popup__btn_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }, formElement);
  FormValidatorItem.enableValidation();
});