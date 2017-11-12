export class Vehicle {
  constructor(license, model, latLong){
      this.license = license;
      this.model = model;
      this.latLong = latLong
  }
  start() {
    console.log('start vehicle');
  }
 }
