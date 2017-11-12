import {Drone} from  './classes/drone.js';
import {Car} from  './classes/car.js';

import {fleet}  from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';

import $ from 'jquery';
import {Button} from './ui/button.js';
import {Image} from './ui/image.js';


console.log('jquery', $);

let dataService = new FleetDataService();
dataService.loadData(fleet);
console.log('dataService', dataService);


console.log( dataService.getCarByLicense('AT9900'));
console.log( dataService.getCardSortedByLicense());
console.log(dataService.filterCarByMake('Ub'));
// console.log(fleet);
// console.log('in app.js');

// let drone = new Drone('A123', 'Flyer');
// let drone2 = new Drone('B456', 'Twirl');
// let car = new Car('AAA-324324');
// car.gpsEnabled = false;
// car.start();
// drone.fly();
// drone2.fly();
//
// drone2.id = 'B666';
//
// console.log(drone, drone2, car);
// console.log(Drone.getCompany());
// console.log(drone.id);


const b = new Button('Click Me');
b.appendElementTo($('body'));


const i = new Image('images/drone.jpg');
i.appendElementTo($('body'));
