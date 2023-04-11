let editButton = document.querySelector('.content-header__edit-button');
let form = document.querySelector('.popup__container');
let popup = document.querySelector('.popup');
let popupNameInput = document.getElementById('name');
let popupDesc = document.getElementById('description');
let popupClose = document.querySelector('.popup__close');
let popupSave = document.querySelector('.popup__btn');
let page = document.querySelector('.page');
let profileName = document.querySelector('.content-header__title');
let profileDescription = document.querySelector('.content-header__text');

function handleFormSubmit(evt) {
  evt.preventDefault();
  popup.classList.remove('popup_opened');
  page.classList.remove('page_locked');

  profileName.textContent = popupNameInput.value;
  profileDescription.textContent = popupDesc.value;
}

function handleEditButton() {
  popup.classList.add('popup_opened');
  page.classList.add('page_locked');

  popupNameInput.value = profileName.textContent;
  popupDesc.value = profileDescription.textContent;
}

function handleCloseButton(evt) {
  evt.preventDefault();
  popup.classList.remove('popup_opened');
  page.classList.remove('page_locked');
}

editButton.addEventListener('click', handleEditButton);
form.addEventListener('submit', handleFormSubmit);
popupClose.addEventListener('click', handleCloseButton);
