import { Card } from './Card.js';
import { initialCards } from './initialCards.js';
import { FormValidator } from './FormValidator.js';
import { Section } from './Section.js';
import { PopupWithForm, PopupWithImage } from './Popup.js';
import { UserInfo } from './UserInfo.js';
import '../pages/index.css';

const editButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');

const editPopupForm = document.querySelector('#edit-popup').querySelector('.popup__form');

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

const userInfoObject = new UserInfo({
  nameSelector: '.profile__title',
  descriptionSelector: '.profile__text'
});

const popupAddElement = new PopupWithForm('#add-popup', (evt, values) => {
  evt.preventDefault();
  cardSection.addItem(createCardElement(values[0], values[1]));
  popupAddElement.close();
});
popupAddElement.setEventListeners();

const popupImageElement = new PopupWithImage('#image-popup');
popupImageElement.setEventListeners();

const popupEditElement = new PopupWithForm('#edit-popup', (evt, values) => {
  evt.preventDefault();
  userInfoObject.setUserInfo(values[0], values[1]);
  popupEditElement.close();
});
popupEditElement.setEventListeners();

const cardSection = new Section({
  items: initialCards,
  renderer: item => cardSection.addItem(createCardElement(item.name, item.link))
}, '.photo-grid');

cardSection.renderItems();

function createCardElement(name, link) {
  const cardElement = new Card(name, link, '#photo-grid-item', () => {
    popupImageElement.open(name, link);
  });
  return cardElement.generateCard();
}

function handleEditButton() {
  popupEditElement.open();
  formValidatorItemList['edit-popup'].enableButton();
  formValidatorItemList['edit-popup'].hideAllInputErrors();
  const userInfoData = userInfoObject.getUserInfo()
  editPopupForm.name.value = userInfoData.name;
  editPopupForm.description.value = userInfoData.description;
}

function handleAddCardButton() {
  popupAddElement.open();
  formValidatorItemList['add-popup'].disableButton();
}

editButton.addEventListener('click', handleEditButton);

addCardButton.addEventListener('click', handleAddCardButton);
