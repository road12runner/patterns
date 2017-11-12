import $ from 'jquery';


export class BaseElement {
  constructor() {
    this.element = null; // jquery object
  }
  createElement() {
    const s = this.getElementString();
    this.element = $(s);
  }
  appendElementTo(el) {
    this.createElement();
    el.append(this.element);
    this.enableJs();
  }

  getElementString() {
    throw 'Please override get() in BaseElement';
  }

  enableJs() {
    componentHandler.upgradeElement(this.element[0]);
  }
}
