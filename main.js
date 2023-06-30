(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e,r,n,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._title=e,this._link=r,this._template=n,this._openElement=o}var r,n;return r=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._template).content.cloneNode(!0).querySelector(".photo-grid__item")}},{key:"_like",value:function(){this._cardLikeButton.classList.toggle("photo-grid__like-button_active")}},{key:"_deleteCard",value:function(){this._cardElement.remove(),this._cardElement=null}},{key:"_setEventListeners",value:function(){var t=this;this._cardImage.addEventListener("click",(function(){return t._openElement(t._title,t._link)})),this._cardLikeButton.addEventListener("click",(function(){return t._like()})),this._cardElement.querySelector(".photo-grid__item-delete").addEventListener("click",(function(){return t._deleteCard()}))}},{key:"generateCard",value:function(){return this._cardElement=this._getTemplate(),this._cardImage=this._cardElement.querySelector(".photo-grid__image"),this._cardTitle=this._cardElement.querySelector(".photo-grid__item-title"),this._cardLikeButton=this._cardElement.querySelector(".photo-grid__like-button"),this._cardTitle.textContent=this._title,this._cardImage.src=this._link,this._cardImage.alt="".concat(this._title,". Фотография"),this._setEventListeners(),this._cardElement}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formObject=e,this._form=r}var e,r;return e=t,(r=[{key:"_getErrorElement",value:function(t){return this._form.querySelector(".".concat(t.id,"-error"))}},{key:"_showInputError",value:function(t,e){this._errorElement=this._getErrorElement(t),t.classList.add(this._formObject.inputErrorClass),this._errorElement.textContent=e,this._errorElement.classList.add(this._formObject.errorClass)}},{key:"_hideInputError",value:function(t){this._errorElement=this._getErrorElement(t),t.classList.remove(this._formObject.inputErrorClass),this._errorElement.textContent="",this._errorElement.classList.remove(this._formObject.errorClass)}},{key:"hideAllInputErrors",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"_checkValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"disableButton",value:function(){this._submitButtonElement.classList.add(this._formObject.inactiveButtonClass),this._submitButtonElement.setAttribute("disabled",!0)}},{key:"enableButton",value:function(){this._submitButtonElement.classList.remove(this._formObject.inactiveButtonClass),this._submitButtonElement.removeAttribute("disabled")}},{key:"_toggleButton",value:function(){this._submitButtonElement=this._form.querySelector(this._formObject.submitButtonSelector),this._hasInvalidInput()?this.disableButton():this.enableButton()}},{key:"_enableListeners",value:function(){var t=this;this._inputList=Array.from(this._form.querySelectorAll(this._formObject.inputSelector)),this._toggleButton(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkValidity(e),t._toggleButton()}))})),this._form.addEventListener("reset",(function(){t._inputList.forEach((function(e){t._hideInputError(e)}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(t){t.preventDefault()})),this._enableListeners()}}])&&o(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===u(o)?o:String(o)),n)}var o}var l=function(){function t(e,r){var n=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=n,this._renderer=o,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(){var t=this;this.clear(),this._items.forEach((function(e){t._renderer(e)}))}}])&&c(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===a(o)?o:String(o)),n)}var o}var p=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupElement=document.querySelector(e),this._handleEscCloseBind=this._handleEscClose.bind(this)}var e,r;return e=t,(r=[{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscCloseBind)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscCloseBind)}},{key:"setEventListeners",value:function(){var t=this;this._popupElement.addEventListener("click",(function(e){e.target===t._popupElement&&t.close()})),this._popupCloseButton=this._popupElement.querySelector(".popup__close"),this._popupCloseButton.addEventListener("click",(function(){t.close()}))}}])&&s(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===f(o)?o:String(o)),n)}var o}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=v(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},m.apply(this,arguments)}function d(t,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},d(t,e)}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=v(n);if(o){var r=v(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===f(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._image=e._popupElement.querySelector(".popup__image"),e._title=e._popupElement.querySelector(".popup__caption"),e}return e=u,(r=[{key:"open",value:function(t,e){m(v(u.prototype),"open",this).call(this),this._image.src=e,this._image.alt="".concat(t,". Фотография"),this._title.textContent=t}}])&&y(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function _(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===b(o)?o:String(o)),n)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},E.apply(this,arguments)}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(n);if(o){var r=S(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._handleFormSubmit=e,r._form=r._popupElement.querySelector(".popup__form"),r._values=r._form.querySelectorAll(".popup__input"),r}return e=u,(r=[{key:"_getInputValues",value:function(){var t=this;return this._inputValueObject={},Array.from(this._values).forEach((function(e){t._inputValueObject[e.name]=e.value})),this._inputValueObject}},{key:"setEventListeners",value:function(){var t=this;E(S(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){t._handleFormSubmit(e,t._getInputValues())}))}},{key:"close",value:function(){E(S(u.prototype),"close",this).call(this),this._form.reset()}}])&&_(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function j(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===w(o)?o:String(o)),n)}var o}var O=function(){function t(e){var r=e.nameSelector,n=e.descriptionSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(r),this._description=document.querySelector(n)}var e,r;return e=t,(r=[{key:"setUserInfo",value:function(t,e){this._name.textContent=t,this._description.textContent=e}},{key:"getUserInfo",value:function(){return{name:this._name.textContent,description:this._description.textContent}}}])&&j(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),P=document.querySelector(".profile__edit-button"),L=document.querySelector(".profile__add-button"),C=document.querySelector("#edit-popup").querySelector(".popup__form"),B=Array.from(document.forms),I={};B.forEach((function(t){var e=new i({formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__btn",inactiveButtonClass:"popup__btn_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},t);e.enableValidation(),I[t.closest(".popup").id]=e}));var T=new O({nameSelector:".profile__title",descriptionSelector:".profile__text"}),q=new k("#add-popup",(function(t,e){t.preventDefault(),A.addItem(V(e["card-title"],e["card-link"])),q.close()}));q.setEventListeners();var x=new h("#image-popup");x.setEventListeners();var R=new k("#edit-popup",(function(t,e){t.preventDefault(),T.setUserInfo(e.name,e.description),R.close()}));R.setEventListeners();var A=new l({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(t){return A.addItem(V(t.name,t.link))}},".photo-grid");function V(t,e){return new r(t,e,"#photo-grid-item",(function(){x.open(t,e)})).generateCard()}A.renderItems(),P.addEventListener("click",(function(){R.open(),I["edit-popup"].enableButton(),I["edit-popup"].hideAllInputErrors();var t=T.getUserInfo();C.name.value=t.name,C.description.value=t.description})),L.addEventListener("click",(function(){q.open(),I["add-popup"].disableButton()}))})();