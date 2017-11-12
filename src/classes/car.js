import {Vehicle} from  './vehicle.js';

export class Car extends Vehicle {
  constructor(data) {
    super(data.license, data.model, data.latLong);
    this.miles  = data.miles;
    this.make = data.make;
  }
  start() {
    super.start();
    console.log('start car');
  }

}
