import {Image} from './image.js';
import {Button} from "./button.js";
import {Page} from '../framework/page.js';

import {application} from '../app.js';

export class HomePage extends  Page {
  constructor() {
    super('Home');
  }

  createElement() {
    super.createElement();

    const image = new Image('../images/drone.jpg');
    image .appendElementTo(this.element);

    const styleString = 'width: 300px; height: 80px. font-size: 16px';
    const btnCars = new Button('Self Driving Cars');
    btnCars.setStyleString(styleString);
    btnCars.appendElementTo(this.element);
    btnCars.element.click(()=> {
      application.activateRoute('Cars');
    });

    const btnDrones = new Button('Drones');
    btnDrones.setStyleString(styleString);
    btnDrones.appendElementTo(this.element);
    btnDrones.element.click(()=> {
      application.activateRoute('Drones');
    });
  }

  getElementString() {
    return '<div style="text-align: center"></div>'
  }
}