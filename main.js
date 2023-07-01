(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n,r,o){var i=o.openImagePopupCallback,u=o.openConfirmationPopupCallback,a=o.likeButtonCallback,c=o.dislikeButtonCallback;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._likes=e.likes,this._id=e._id,this._owner=e.owner._id,this._userId=r,this._template=n,this._openElement=i,this._openConfirmationPopup=u,this._like=a,this._dislike=c}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._template).content.cloneNode(!0).querySelector(".photo-grid__item")}},{key:"_isLiked",value:function(){var t=this;return this._likes.some((function(e){return e._id===t._userId}))}},{key:"_likeUpdate",value:function(t){this._cardLikeButton.classList.toggle("photo-grid__like-button_active"),this._cardLikeNumber.textContent=t.likes.length}},{key:"_setEventListeners",value:function(){var t=this;this._cardImage.addEventListener("click",(function(){return t._openElement()})),this._cardLikeButton.addEventListener("click",(function(){t._isLiked()?t._dislike(t._id).then((function(e){t._likeUpdate(e)})).catch((function(t){return console.log(t)})):t._like(t._id).then((function(e){t._likeUpdate(e)})).catch((function(t){return console.log(t)}))})),this._deleteButton.addEventListener("click",(function(){return t._openConfirmationPopup(t._id,t._cardElement)}))}},{key:"_enableDeletion",value:function(){this._deleteButton.classList.add("photo-grid__item-delete_visible")}},{key:"generateCard",value:function(){return this._cardElement=this._getTemplate(),this._cardImage=this._cardElement.querySelector(".photo-grid__image"),this._cardTitle=this._cardElement.querySelector(".photo-grid__item-title"),this._cardLikeButton=this._cardElement.querySelector(".photo-grid__like-button"),this._cardLikeNumber=this._cardElement.querySelector(".photo-grid__like-number"),this._deleteButton=this._cardElement.querySelector(".photo-grid__item-delete"),this._cardTitle.textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt="".concat(this._name,". Фотография"),this._cardLikeNumber.textContent=this._likes.length,this._isLiked()&&this._cardLikeButton.classList.add("photo-grid__like-button_active"),this._userId===this._owner&&this._enableDeletion(),this._setEventListeners(),this._cardElement}},{key:"deleteCard",value:function(){this._cardElement.remove(),this._cardElement=null}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formObject=e,this._form=n}var e,n;return e=t,(n=[{key:"_getErrorElement",value:function(t){return this._form.querySelector(".".concat(t.id,"-error"))}},{key:"_showInputError",value:function(t,e){this._errorElement=this._getErrorElement(t),t.classList.add(this._formObject.inputErrorClass),this._errorElement.textContent=e,this._errorElement.classList.add(this._formObject.errorClass)}},{key:"_hideInputError",value:function(t){this._errorElement=this._getErrorElement(t),t.classList.remove(this._formObject.inputErrorClass),this._errorElement.textContent="",this._errorElement.classList.remove(this._formObject.errorClass)}},{key:"hideAllInputErrors",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"_checkValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"disableButton",value:function(){this._submitButtonElement.classList.add(this._formObject.inactiveButtonClass),this._submitButtonElement.setAttribute("disabled",!0)}},{key:"enableButton",value:function(){this._submitButtonElement.classList.remove(this._formObject.inactiveButtonClass),this._submitButtonElement.removeAttribute("disabled")}},{key:"_toggleButton",value:function(){this._submitButtonElement=this._form.querySelector(this._formObject.submitButtonSelector),this._hasInvalidInput()?this.disableButton():this.enableButton()}},{key:"_enableListeners",value:function(){var t=this;this._inputList=Array.from(this._form.querySelectorAll(this._formObject.inputSelector)),this._toggleButton(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkValidity(e),t._toggleButton()}))})),this._form.addEventListener("reset",(function(){t._inputList.forEach((function(e){t._hideInputError(e)}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(t){t.preventDefault()})),this._enableListeners()}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var c=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"_reverseItems",value:function(t){return t.reverse()}},{key:"renderItems",value:function(t){var e=this;this.clear(),this._reverseItems(t).forEach((function(t){e._renderer(t)}))}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupElement=document.querySelector(e),this._handleEscCloseBind=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscCloseBind)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscCloseBind)}},{key:"setEventListeners",value:function(){var t=this;this._popupElement.addEventListener("click",(function(e){e.target===t._popupElement&&t.close()})),this._popupCloseButton=this._popupElement.querySelector(".popup__close"),this._popupCloseButton.addEventListener("click",(function(){t.close()}))}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=v(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},h.apply(this,arguments)}function d(t,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},d(t,e)}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}var m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=v(r);if(o){var n=v(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===p(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._image=e._popupElement.querySelector(".popup__image"),e._title=e._popupElement.querySelector(".popup__caption"),e}return e=u,(n=[{key:"open",value:function(t,e){h(v(u.prototype),"open",this).call(this),this._image.src=e,this._image.alt="".concat(t,". Фотография"),this._title.textContent=t}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},g.apply(this,arguments)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(r);if(o){var n=S(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleFormSubmit=e,n._form=n._popupElement.querySelector(".popup__form"),n._values=n._form.querySelectorAll(".popup__input"),n._btn=n._popupElement.querySelector(".popup__btn"),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputValueObject={},Array.from(this._values).forEach((function(e){t._inputValueObject[e.name]=e.value})),this._inputValueObject}},{key:"setEventListeners",value:function(){var t=this;g(S(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){t._handleFormSubmit(e,t._getInputValues(),t._btn)}))}},{key:"close",value:function(){g(S(u.prototype),"close",this).call(this),this._form.reset()}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},j.apply(this,arguments)}function P(t,e){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},P(t,e)}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&P(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(r);if(o){var n=C(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._deleteElement=e,n._confirmButton=n._popupElement.querySelector(".popup__btn"),n}return e=u,(n=[{key:"open",value:function(t,e){j(C(u.prototype),"open",this).call(this),this._id=t,this._cardElement=e}},{key:"setEventListeners",value:function(){var t=this;j(C(u.prototype),"setEventListeners",this).call(this),this._confirmButton.addEventListener("click",(function(){t._deleteElement(t._id,t._confirmButton)}))}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}var T=function(){function t(e){var n=e.nameSelector,r=e.descriptionSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(n),this._description=document.querySelector(r),this._avatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"setUserInfo",value:function(t,e){this._name.textContent=t,this._description.textContent=e}},{key:"setUserAvatar",value:function(t){this._avatar.src=t}},{key:"getUserInfo",value:function(){return{name:this._name.textContent,description:this._description.textContent,avatar:this._avatar.src}}}])&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}var U=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var e,n;return e=t,(n=[{key:"_testData",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getUserInfo",value:function(){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return t._testData(e)}))}},{key:"setUserInfo",value:function(t,e){var n=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:e})}).then((function(t){return n._testData(t)}))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return t._testData(e)}))}},{key:"addCard",value:function(t,e){var n=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:e})}).then((function(t){return n._testData(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return e._testData(t)}))}},{key:"like",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then((function(t){return e._testData(t)}))}},{key:"dislike",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then((function(t){return e._testData(t)}))}},{key:"updateAvatar",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then((function(t){return e._testData(t)}))}}])&&R(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),D=document.querySelector(".profile__edit-button"),x=document.querySelector(".profile__add-button"),A=document.querySelector("#edit-popup").querySelector(".popup__form"),V=document.querySelector(".profile__avatar-container"),N=Array.from(document.forms),H={},J=new U({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-70",headers:{authorization:"74864bef-12cc-4ea3-9372-0b57c4618118","Content-Type":"application/json"}});Promise.all([J.getUserInfo(),J.getInitialCards()]).then((function(t){F.setUserInfo(t[0].name,t[0].about),F.setUserAvatar(t[0].avatar);var e={};function r(t,r){var o=new n(t,"#photo-grid-item",r,{openImagePopupCallback:function(){return M.open(t.name,t.link)},openConfirmationPopupCallback:function(t,e){return u.open(t,e)},likeButtonCallback:function(t){return J.like(t)},dislikeButtonCallback:function(t){return J.dislike(t)}});return e[t._id]=o,o.generateCard()}var o=new c({renderer:function(e){return o.addItem(r(e,t[0]._id))}},".photo-grid");o.renderItems(t[1]);var i=new k("#add-popup",(function(e,n,u){e.preventDefault(),u.value="Сохранение...",J.addCard(n["card-title"],n["card-link"]).then((function(e){o.addItem(r(e,t[0]._id)),i.close()})).catch((function(t){return console.log(t)})).finally((function(){return u.value="Сохранить"}))}));i.setEventListeners(),x.addEventListener("click",(function(){i.open(),H["add-popup"].disableButton()}));var u=new L("#confirm-popup",(function(t,n){n.textContent="Удаление...",J.deleteCard(t).then((function(){e[t].deleteCard(),u.close()})).catch((function(t){return console.log(t)})).finally((function(){return n.textContent="Удалить"}))}));u.setEventListeners()})).catch((function(t){return console.log(t)})),N.forEach((function(t){var e=new i({formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__btn",inactiveButtonClass:"popup__btn_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},t);e.enableValidation(),H[t.closest(".popup").id]=e}));var F=new T({nameSelector:".profile__title",descriptionSelector:".profile__text",avatarSelector:".profile__avatar"}),M=new m("#image-popup");M.setEventListeners();var z=new k("#edit-popup",(function(t,e,n){t.preventDefault(),n.value="Сохранение...",J.setUserInfo(e.name,e.description).then((function(t){F.setUserInfo(t.name,t.about),z.close()})).catch((function(t){return console.log(t)})).finally((function(){return n.value="Сохранить"}))}));z.setEventListeners();var G=new k("#avatar-popup",(function(t,e,n){t.preventDefault(),n.value="Сохранение...",J.updateAvatar(e.avatar).then((function(t){F.setUserAvatar(t.avatar),G.close()})).catch((function(t){return console.log(t)})).finally((function(){return n.value="Сохранить"}))}));G.setEventListeners(),D.addEventListener("click",(function(){z.open(),H["edit-popup"].enableButton(),H["edit-popup"].hideAllInputErrors();var t=F.getUserInfo();A.name.value=t.name,A.description.value=t.description})),V.addEventListener("click",(function(){G.open(),H["avatar-popup"].disableButton()}))})();