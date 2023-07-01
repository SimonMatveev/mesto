import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupForDeletion } from '../components/PopupForDeletion.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';
import '../pages/index.css';

const editButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');
const editPopupForm = document.querySelector('#edit-popup').querySelector('.popup__form');
const avatar = document.querySelector('.profile__avatar-container');

const formList = Array.from(document.forms);
const formValidatorItemList = {};

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-70',
  headers: {
    authorization: '74864bef-12cc-4ea3-9372-0b57c4618118',
    'Content-Type': 'application/json'
  }
});

api.getUserInfo()
  .then(data => {
    userInfoObject.setUserInfo(data.name, data.about);
    userInfoObject.setUserAvatar(data.avatar);

    function createCardElement(item, userId) {
      const cardElement = new Card(item, '#photo-grid-item', userId, {
        openImagePopupCallback: () => popupImageElement.open(item.name, item.link),
        openConfirmationPopupCallback: (id, element) => popupDeleteElement.open(id, element),
        likeButtonCallback: id => api.like(id),
        dislikeButtonCallback: id => api.dislike(id)
      });
      return cardElement.generateCard();
    }

    const cardSection = new Section({
      renderer: item => cardSection.addItem(createCardElement(item, data._id))
    }, '.photo-grid');


    api.getInitialCards()
      .then(res => cardSection.renderItems(res.reverse()))
      .catch(err => console.log(err));

    const popupAddElement = new PopupWithForm('#add-popup', (evt, values, btn) => {
      evt.preventDefault();
      btn.value = 'Сохранение...';
      api.addCard(values['card-title'], values['card-link'])
        .then(res => cardSection.addItem(createCardElement(res, data._id)))
        .catch(err => console.log(err))
        .finally(() => btn.value = 'Сохранить');
      popupAddElement.close();
    });
    popupAddElement.setEventListeners();

    function handleAddCardButton() {
      popupAddElement.open();
      formValidatorItemList['add-popup'].disableButton();
    }

    addCardButton.addEventListener('click', handleAddCardButton);

    const popupDeleteElement = new PopupForDeletion('#confirm-popup', (id, element) => {
      api.deleteCard(id)
        .then(cardSection.removeItem(element))
        .catch(err => console.log(err));
    });
    popupDeleteElement.setEventListeners();
  })
  .catch(err => console.log(err));

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
  formValidatorItemList[formElement.closest('.popup').id] = formValidatorItem;
});

const userInfoObject = new UserInfo({
  nameSelector: '.profile__title',
  descriptionSelector: '.profile__text',
  avatarSelector: '.profile__avatar'
});

const popupImageElement = new PopupWithImage('#image-popup');
popupImageElement.setEventListeners();

const popupEditElement = new PopupWithForm('#edit-popup', (evt, values, btn) => {
  evt.preventDefault();
  btn.value = 'Сохранение...';
  api.setUserInfo(values['name'], values['description'])
    .then(res => userInfoObject.setUserInfo(res.name, res.about))
    .catch(err => console.log(err))
    .finally(() => btn.value = 'Сохранить');
  popupEditElement.close();
});
popupEditElement.setEventListeners();

const popupAvatarElement = new PopupWithForm('#avatar-popup', (evt, values, btn) => {
  evt.preventDefault();
  btn.value = 'Сохранение...';
  api.updateAvatar(values['avatar'])
    .then(res => userInfoObject.setUserAvatar(res.avatar))
    .catch(err => console.log(err))
    .finally(() => btn.value = 'Сохранить');
  popupAvatarElement.close();
});
popupAvatarElement.setEventListeners();

function handleEditButton() {
  popupEditElement.open();
  formValidatorItemList['edit-popup'].enableButton();
  formValidatorItemList['edit-popup'].hideAllInputErrors();
  const userInfoData = userInfoObject.getUserInfo()
  editPopupForm.name.value = userInfoData.name;
  editPopupForm.description.value = userInfoData.description;
};

function handleAvatarButton() {
  popupAvatarElement.open();
  formValidatorItemList['avatar-popup'].disableButton();
}

editButton.addEventListener('click', handleEditButton);

avatar.addEventListener('click', handleAvatarButton);