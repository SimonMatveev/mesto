export class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addItem(element) {
        this._container.prepend(element);
    }

    clear() {
        this._container.innerHTML = '';
    }

    _reverseItems(initialItems) {
        return initialItems.reverse();
    }

    renderItems(initialItems) {
        this.clear();

        this._reverseItems(initialItems).forEach(item => {
            this._renderer(item);
        })
    }
}