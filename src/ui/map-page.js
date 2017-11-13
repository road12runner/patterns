import {Page} from "../framework/page.js";
import {application} from '../app.js';
import {GoogleMap} from "./google-map.js";

export class MapPage extends  Page {
  constructor() {
    super('Map');
  }

  createElement() {
    super.createElement();

    const centerOfMap = {lat: 40.783661, lng: -73.9655883};
    const googleMap = new GoogleMap(centerOfMap, application.dataService.cars);
    googleMap.appendElementTo($('body'));
  }

  getElementString() {
    return '<div style="margin: 20px"><h3>Maps</h3></div>';
  }
}