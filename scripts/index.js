const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__text');
const gridContainer = document.querySelector('.photo-grid');

const editButton = document.querySelector('.profile__edit-button');
const editPopupElement = document.querySelector('#edit-popup');
const editPopupForm = editPopupElement.querySelector('.popup__form');
const editPopupNameInput = editPopupElement.querySelector('#name');
const editPopupDesc = editPopupElement.querySelector('#description');
const editPopupClose = editPopupElement.querySelector('.popup__close');

const imgPopupElement = document.querySelector('#image-popup')
const imgPopupFrame = imgPopupElement.querySelector('.popup__image');
const imgPopupCaption = imgPopupElement.querySelector('.popup__caption');
const imgPopupClose = imgPopupElement.querySelector('.popup__close');

const addButton = document.querySelector('.profile__add-button')
const addPopupElement = document.querySelector('#add-popup');
const addPopupForm = addPopupElement.querySelector('.popup__form');
const addPopupTitle = addPopupElement.querySelector('#card-title');
const addPopupLink = addPopupElement.querySelector('#card-link');
const addPopupClose = addPopupElement.querySelector('.popup__close');

function handleOpenButton(element) {
  element.closest('.popup').classList.add('popup_opened');
}

function handleCloseButton(element) {
  element.closest('.popup').classList.remove('popup_opened');
}

function handleEditButton() {
  handleOpenButton(editPopupElement);
  editPopupNameInput.value = profileName.textContent;
  editPopupDesc.value = profileDescription.textContent;
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editPopupNameInput.value;
  profileDescription.textContent = editPopupDesc.value;
  handleCloseButton(evt.target);
}

function handleAddButton() {
  handleOpenButton(addPopupElement);
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  createCard(addPopupTitle.value, addPopupLink.value);
  handleCloseButton(evt.target);
  addPopupTitle.value = '';
  addPopupLink.value = '';
}

function handlePopupImage(element) {
  handleOpenButton(imgPopupElement);
  imgPopupFrame.src = element.src;
  imgPopupCaption.textContent = element.parentElement.querySelector('.photo-grid__item-title').textContent;
}

function createCard(title, link) {
  const cardTemplate = document.querySelector('#photo-grid-item').content;
  const cardElement = cardTemplate.querySelector('.photo-grid__item').cloneNode(true);
  const cardImage = cardElement.querySelector('.photo-grid__image');
  const cardTitle = cardElement.querySelector('.photo-grid__item-title');
  const cardLike = cardElement.querySelector('.photo-grid__like-button');
  const cardDelete = cardElement.querySelector('.photo-grid__item-delete');

  cardTitle.textContent = title;
  cardImage.src = link;

  cardImage.addEventListener('click', evt => {
    handlePopupImage(evt.target);
  });

  cardLike.addEventListener('click', evt => {
    evt.target.classList.toggle('photo-grid__like-button_active');
  });

  cardDelete.addEventListener('click', () => {
    cardElement.remove();
  });

  gridContainer.prepend(cardElement);
}

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.forEach(item => {
  createCard(item.name, item.link);
});

editButton.addEventListener('click', handleEditButton);

editPopupForm.addEventListener('submit', handleEditFormSubmit);

editPopupClose.addEventListener('click', evt => {
  handleCloseButton(evt.target);
});

addButton.addEventListener('click', handleAddButton);

addPopupForm.addEventListener('submit', handleAddFormSubmit);

addPopupClose.addEventListener('click', evt => {
  handleCloseButton(evt.target);
});

imgPopupClose.addEventListener('click', evt => {
  handleCloseButton(evt.target);
});


