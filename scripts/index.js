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

const addCardButton = document.querySelector('.profile__add-button')
const popupAddCardElement = document.querySelector('#add-popup');
const popupAddCardForm = popupAddCardElement.querySelector('.popup__form');
const popupAddCardTitle = popupAddCardElement.querySelector('#card-title');
const popupAddCardLink = popupAddCardElement.querySelector('#card-link');
const popupAddCardButton = popupAddCardElement.querySelector('.popup__btn');

const formList = Array.from(document.forms);

const formValidatorItemList = {};

formList.forEach(formElement => {
  const formValidatorItem = new FormValidator({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__btn',
    inactiveButtonClass: 'popup__btn_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }, formElement);
  formValidatorItem.enableValidation();
  formValidatorItemList[formElement.parentElement.parentElement.id] = formValidatorItem;
});

function closeElementOnEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closeElement(openedPopup);
  }
};

function openElement(element) {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', closeElementOnEsc);
}

function closeElement(element) {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeElementOnEsc);
}

function handleEditButton() {
  openElement(popupProfileElement);
  formValidatorItemList['edit-popup'].enableButton();
  formValidatorItemList['edit-popup'].hideAllInputErrors();
  popupProfileNameInput.value = profileName.textContent;
  popupProfileDesc.value = profileDescription.textContent;
}

function handleAddCardButton() {
  openElement(popupAddCardElement);
  formValidatorItemList['add-popup'].disableButton();
  popupAddCardForm.reset();
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupProfileNameInput.value;
  profileDescription.textContent = popupProfileDesc.value;
  closeElement(popupProfileElement);
}

function createCardElement(name, link) {
  const cardElement = new Card(name, link, '#photo-grid-item', openElement);
  return cardElement.generateCard();
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  gridContainer.prepend(createCardElement(popupAddCardTitle.value, popupAddCardLink.value));
  closeElement(popupAddCardElement);
  evt.target.reset()
}

function addClosePopupListeners(popupElement) {
  popupElement.addEventListener('click', evt => {
    if (evt.target === popupElement) {
      closeElement(popupElement);
    }
  });

  const popupCloseButton = popupElement.querySelector('.popup__close');
  popupCloseButton.addEventListener('click', () => {
    closeElement(popupElement);
  });
};

const popupElementList = Array.from(document.querySelectorAll('.popup'));

popupElementList.forEach(popupElement => {
  addClosePopupListeners(popupElement);
});

initialCards.forEach(item => {
  gridContainer.prepend(createCardElement(item.name, item.link));
});

editButton.addEventListener('click', handleEditButton);

addCardButton.addEventListener('click', handleAddCardButton);

popupProfileForm.addEventListener('submit', handleEditFormSubmit);

popupAddCardForm.addEventListener('submit', handleAddFormSubmit);
