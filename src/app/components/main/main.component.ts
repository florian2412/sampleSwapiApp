import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";
import { MaterializeDirective } from "angular2-materialize";

@Component({
  moduleId: module.id,
  selector: 'my-main',
  templateUrl: 'main.component.html',
  directives: [ ROUTER_DIRECTIVES ]
})
export class MainComponent {

  constructor() {}

  ngOnInit() { }

}
