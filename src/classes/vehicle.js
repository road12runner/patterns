export class Vehicle {
  constructor(licenseNum){
      console.log('constructor vehicle');
      this.licenceNum = licenseNum;
      this.gpsEnabled = true;
  }
  start() {
    console.log('start vehicle');
  }
 }
