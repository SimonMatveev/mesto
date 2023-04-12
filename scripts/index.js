let editButton = document.querySelector('.profile__edit-button');
let form = document.querySelector('.popup__form');
let popup = document.querySelector('.popup');
let popupNameInput = document.getElementById('name');
let popupDesc = document.getElementById('description');
let popupClose = document.querySelector('.popup__close');
let profileName = document.querySelector('.profile__title');
let profileDescription = document.querySelector('.profile__text');

function handleCloseButton() {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupNameInput.value;
  profileDescription.textContent = popupDesc.value;
  handleCloseButton();
}

function handleEditButton() {
  popup.classList.add('popup_opened');
  popupNameInput.value = profileName.textContent;
  popupDesc.value = profileDescription.textContent;
}

editButton.addEventListener('click', handleEditButton);
form.addEventListener('submit', handleFormSubmit);
popupClose.addEventListener('click', handleCloseButton);
