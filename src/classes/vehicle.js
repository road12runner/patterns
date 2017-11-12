export class Vehicle {
  constructor(license, model, lastLong){
      this.license = license;
      this.model = model;
      this.lastLong = lastLong
  }
  start() {
    console.log('start vehicle');
  }
 }
