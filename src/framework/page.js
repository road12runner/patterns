import {BaseElement} from "../ui/base-element.js";

export class Page extends  BaseElement {
  constructor(pageTitle) {
    super(pageTitle);
    this.pageTitle = pageTitle;
  }
}