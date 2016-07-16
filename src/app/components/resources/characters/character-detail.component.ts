import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'my-character-detail',
  templateUrl: 'character-detail.component.html',
  directives: [ ROUTER_DIRECTIVES ]
})
export class CharacterDetailComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

}
