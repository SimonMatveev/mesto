const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__text');
const gridContainer = document.querySelector('.photo-grid');

const editButton = document.querySelector('.profile__edit-button');
const popupProfileElement = document.querySelector('#edit-popup');
const popupProfileForm = popupProfileElement.querySelector('.popup__form');
const popupProfileNameInput = popupProfileElement.querySelector('#name');
const popupProfileDesc = popupProfileElement.querySelector('#description');
const popupProfileClose = popupProfileElement.querySelector('.popup__close');

const popupImgElement = document.querySelector('#image-popup')
const popupImgFrame = popupImgElement.querySelector('.popup__image');
const popupImgCaption = popupImgElement.querySelector('.popup__caption');
const popupImgClose = popupImgElement.querySelector('.popup__close');

const addButton = document.querySelector('.profile__add-button')
const popupCardElement = document.querySelector('#add-popup');
const popupCardForm = popupCardElement.querySelector('.popup__form');
const popupCardTitle = popupCardElement.querySelector('#card-title');
const popupCardLink = popupCardElement.querySelector('#card-link');
const popupCardClose = popupCardElement.querySelector('.popup__close');

function handleOpenButton(element) {
  element.classList.add('popup_opened');
}

function handleCloseButton(element) {
  element.classList.remove('popup_opened');
}

function handleEditButton() {
  handleOpenButton(popupProfileElement);
  popupProfileNameInput.value = profileName.textContent;
  popupProfileDesc.value = profileDescription.textContent;
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupProfileNameInput.value;
  profileDescription.textContent = popupProfileDesc.value;
  handleCloseButton(popupProfileElement);
}

function handleAddButton() {
  handleOpenButton(popupCardElement);
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  gridContainer.prepend(createCard(popupCardTitle.value, popupCardLink.value));
  handleCloseButton(popupCardElement);
  popupCardTitle.value = '';
  popupCardLink.value = '';
}

function handlePopupImage(link, title, altText) {
  handleOpenButton(popupImgElement);
  popupImgFrame.src = link;
  popupImgFrame.alt = altText;
  popupImgCaption.textContent = title;
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
  cardImage.alt = `${title}. Фотография`;

  cardImage.addEventListener('click', () => {
    handlePopupImage(link, title, cardImage.alt);
  });

  cardLike.addEventListener('click', evt => {
    evt.target.classList.toggle('photo-grid__like-button_active');
  });

  cardDelete.addEventListener('click', () => {
    cardElement.remove();
  });

  return cardElement;
}

initialCards.forEach(item => {
  gridContainer.prepend(createCard(item.name, item.link));
});

editButton.addEventListener('click', handleEditButton);

popupProfileForm.addEventListener('submit', handleEditFormSubmit);

popupProfileClose.addEventListener('click', () => {
  handleCloseButton(popupProfileElement);
});

addButton.addEventListener('click', handleAddButton);

popupCardForm.addEventListener('submit', handleAddFormSubmit);

popupCardClose.addEventListener('click', () => {
  handleCloseButton(popupCardElement);
});

popupImgClose.addEventListener('click', () => {
  handleCloseButton(popupImgElement);
});


