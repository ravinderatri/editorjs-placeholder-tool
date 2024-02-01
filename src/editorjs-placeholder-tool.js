'use strict';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

let PlaceholderTool$1 = class PlaceholderTool {
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
};

var placeholderTool = PlaceholderTool$1;

const PlaceholderTool = placeholderTool;

var src = PlaceholderTool;

var index = /*@__PURE__*/getDefaultExportFromCjs(src);

module.exports = index;
