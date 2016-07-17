import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { ROUTER_DIRECTIVES, Router } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'my-resources',
  templateUrl: 'resources.component.html',
  directives: [ ROUTER_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_LIST_DIRECTIVES, MD_CARD_DIRECTIVES ]
})

export class ResourcesComponent implements OnInit {

  constructor(private swapiService: SwapiService, private router: Router) {}

  ngOnInit() { }

  /**
   * Navigation to a resource
   *
   * @param resource
   */
  goTo(resource: string) {
    this.router.navigate(['/resources/' + resource]);
  }

  /**
   *
   * Navigate to Home
   */
  goHome() {
    this.router.navigate(['/home']);
  }

}
