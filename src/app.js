import {Drone} from  './classes/drone.js';
import {Car} from  './classes/car.js';

console.log('in app.js');

let drone = new Drone('A123', 'Flyer');
let drone2 = new Drone('B456', 'Twirl');
let car = new Car('AAA-324324');
car.gpsEnabled = false;
car.start();
drone.fly();
drone2.fly();

drone2.id = 'B666';

console.log(drone, drone2, car);
console.log(Drone.getCompany());
console.log(drone.id);
