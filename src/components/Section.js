export class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addItem(element) {
        this._container.prepend(element);
    }

    removeItem(element) {
        this._container.removeChild(element);
    }

    clear() {
        this._container.innerHTML = '';
    }

    renderItems(initialItems) {
        this.clear();

        initialItems.forEach(item => {
            this._renderer(item);
        })
    }
}