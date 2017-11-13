import {Page} from "../framework/page.js";
import {DataTable} from "./data-table.js";
import {application} from '../app.js';

export class CarPage extends  Page {
  constructor() {
    super('Cars');
  }

  createElement() {
    super.createElement();

    const headers = 'License Make Model Miles'.split(' ');
    const data = new DataTable(headers, application.dataService.cars);
    data.appendElementTo(this.element);
  }

  getElementString() {
    return '<div style="margin: 20px"><h3>Cars</h3></div>';
  }
}