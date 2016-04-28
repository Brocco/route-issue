import {Component, OnInit} from 'angular2/core';
import {ChildComponent} from './+child';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
  moduleId: __moduleName,
  selector: 'app-base',
  templateUrl: 'base.component.html',
  styleUrls: ['base.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {path: '/child', name: 'Child', component: ChildComponent}
])
export class BaseComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
