import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";
import { Title } from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: [ 'app.component.css' ],
  directives: [ ROUTER_DIRECTIVES ],
  viewProviders: [ Title ]
})
export class AppComponent {

  title: string;

  constructor(titlePage: Title) {
    let title = "Angular2 + Star Wars API + Materialize";
    titlePage.setTitle(title);
    this.title = title;
  }

}
