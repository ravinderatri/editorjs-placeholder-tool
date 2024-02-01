'use strict';


class PlaceholderTool {
    constructor({ data, config, api }) {
        this.api = api;
        this.placeholderText = data.text || 'Type your text here...';
        this.element = this.createPlaceholderElement();
    }

    createPlaceholderElement() {
        const container = document.createElement('div');
        container.classList.add('placeholder-tool');
        container.textContent = this.placeholderText;
        container.contentEditable = 'true';

        return container;
    }

    render() {
        return this.element;
    }

    save() {
        return {
            text: this.element.textContent
        };
    }
}

module.exports = PlaceholderTool;