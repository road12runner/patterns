import {TitleBar} from "../ui/title-bar.js";

export class ApplicationBase {
  constructor(title) {
    this.title = title;
    this.titleBar = new TitleBar(this.title);
    this.routeMap = {};
    this.defaultRoute = null;
  }
  show(element) {
    this.titleBar.appendElementTo(element);

    this.titleBar.element.find('.mdl-navigation__link').click( (event) => {
      const route = event.target.innerHTML;
      this.activateRoute(route.trim());
    });

    if (this.defaultRoute) {
      this.activateRoute(this.defaultRoute);
    }
  }
  addRoute(id, pageObject, defaultRoute = false) {
    this.titleBar.addLink(id, '');

    this.routeMap[id] = pageObject;

    if (defaultRoute) {
      this.defaultRoute = id;
    }
  }
  activateRoute(route) {
    let content = this.titleBar.element.find('.page-content');
    content.empty();

    this.routeMap[route].appendElementTo(content);
  }

}