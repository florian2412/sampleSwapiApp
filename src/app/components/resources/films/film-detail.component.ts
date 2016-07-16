import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'my-film-detail',
    templateUrl: 'film-detail.component.html',
    directives: [ ROUTER_DIRECTIVES ]
})

export class FilmDetailComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}
