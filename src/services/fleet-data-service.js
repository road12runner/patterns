import {Car} from '../classes/car.js';
import {Drone} from '../classes/drone.js';
import {DataError} from './data-error.js'

export class FleetDataService {
  constructor() {
    this.cars = [];
    this.drones = [];
    this.errors = [];
  }
  loadData(fleet) {
    for (const data of fleet) {
      switch (data.type) {
        case 'car':
          this.loadCar(data);
          break;
        case 'drone':
          this.drones.push( new Drone(data) );
          break;
        default:
         this.errors.push( new DataError('wrong vehicle type') );
      }
    }
  }
  loadCar(data) {
    try {
      if (this.validateCarData(data)) {
          this.cars.push(new Car(data));
      }
    } catch (e) {
      console.log('error', e);
      this.errors.push(new DataError('error loading car', data));
    }
  }
  validateCarData(data) {
    let isOk = true;
    const requiredProps = 'license model latLong miles make'.split(' ');
    for (let prop of requiredProps) {
      if (!data[prop]) {
        this.errors.push(new DataError(`invalid field ${prop}`, data));
        isOk = false;
      }
    }
    return isOk;
  }
  getCarByLicense(license) {
    return this.cars.find( (car) => {
      return car.license === license;
    })
  }
  getCardSortedByLicense(){
    return this.cars.sort( (car1, car2) => {
      if (car1.license < car2.license) {
        return -1;
      } else if(car1.license > car2.license) {
        return 1;
      }
      return 0;
    });
  }
  filterCarByMake(make) {
    return this.cars.filter( car => car.make.indexOf(make) > -1 );
  }
}
