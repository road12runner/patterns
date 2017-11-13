import {Drone} from  './classes/drone.js';
import {Car} from  './classes/car.js';

import {fleet}  from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';

import $ from 'jquery';
import {Button} from './ui/button.js';
import {Image} from './ui/image.js';
import {TitleBar} from "./ui/title-bar.js";
import {DataTable} from "./ui/data-table.js";
import {GoogleMap} from "./ui/google-map.js";

import {ApplicationBase} from "./framework/application-base.js";
import {HomePage} from "./ui/home-page.js";
import {CarPage} from "./ui/car-page.js";
import {MapPage} from "./ui/map-page.js";
// console.log( dataService.getCarByLicense('AT9900'));
// console.log( dataService.getCardSortedByLicense());
// console.log(dataService.filterCarByMake('Ub'));
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


// const titleBar = new TitleBar('My Application');
// titleBar.addLink('Home', '');
// titleBar.addLink('Cars', '');
// titleBar.addLink('Drones', '');
// titleBar.addLink('Map', '');
// titleBar.appendElementTo($('body'));
//
//
// const b = new Button('Click Me');
// b.appendElementTo($('body'));
//
//
// const i = new Image('images/drone.jpg');
// i.appendElementTo($('body'));

// const headers = 'License Make Model Miles'.split(' ');
// const dataTable = new DataTable(headers, dataService.cars);
// dataTable.appendElementTo($('body'));



export class App extends  ApplicationBase {

  constructor() {
    super('Fleet Manager');
    this.dataService = new FleetDataService();
    this.dataService.loadData(fleet);
    console.log('dataService', this.dataService);

    this.addRoute('Home', new HomePage(), true);
    this.addRoute('Cars', new CarPage());
    this.addRoute('Drone', null);
    this.addRoute('Map', new MapPage());
  }
}



export const application = new App();
application.show($('body'));