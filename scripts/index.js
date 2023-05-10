const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__text');
const gridContainer = document.querySelector('.photo-grid');

const editButton = document.querySelector('.profile__edit-button');
const popupProfileElement = document.querySelector('#edit-popup');
const popupProfileForm = popupProfileElement.querySelector('.popup__form');
const popupProfileNameInput = popupProfileElement.querySelector('#name');
const popupProfileDesc = popupProfileElement.querySelector('#description');
const popupProfileButton = popupProfileElement.querySelector('.popup__btn')

const popupImgElement = document.querySelector('#image-popup')
const popupImgFrame = popupImgElement.querySelector('.popup__image');
const popupImgCaption = popupImgElement.querySelector('.popup__caption');

const addCardButton = document.querySelector('.profile__add-button')
const popupAddCardElement = document.querySelector('#add-popup');
const popupAddCardForm = popupAddCardElement.querySelector('.popup__form');
const popupAddCardTitle = popupAddCardElement.querySelector('#card-title');
const popupAddCardLink = popupAddCardElement.querySelector('#card-link');
const popupAddCardButton = popupAddCardElement.querySelector('.popup__btn')

function handleClosingOnEsc (evt) {
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
  gridContainer.prepend(createCard(popupAddCardTitle.value, popupAddCardLink.value));
  handleClosing(popupAddCardElement);
  evt.target.reset()
}

function handlePopupImage(link, title, altText) {
  handleOpening(popupImgElement);
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
  gridContainer.prepend(createCard(item.name, item.link));
});

editButton.addEventListener('click', handleEditButton);

addCardButton.addEventListener('click', handleAddCardButton);

popupProfileForm.addEventListener('submit', handleEditFormSubmit);

popupAddCardForm.addEventListener('submit', handleAddFormSubmit);