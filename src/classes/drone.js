import {Vehicle} from  './vehicle.js';

export class Drone extends Vehicle {

  constructor(id, name) {
    super(id);
    this._id = id;
    this._name = name;
    console.log('drone constructor', id);
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
