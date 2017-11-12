import {Vehicle} from  './vehicle.js';

export class Drone extends Vehicle {

  constructor(data) {
    super(data.license, data.model, data.latLong);
    this.airTimeHours = data.airTimeHours;
    this.base = data.base;
  }
  fly() {
    console.log('Drone:' + this._id + ' is flying');
  }

  static getCompany() {
    console.log('get company');
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }
}

Drone.maxHeight = 2000;
