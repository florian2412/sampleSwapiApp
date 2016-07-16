import { Component, OnInit, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from "@angular/router";
import { CharacterModel } from "../../../model/character.model";

@Component({
  moduleId: module.id,
  templateUrl: 'character-detail.component.html',
  directives: [ ROUTER_DIRECTIVES ]
})

export class CharacterDetailComponent implements OnInit, OnDestroy {

  private sub: any;

  private currentCharacter: CharacterModel;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      // Get with the id, the good character from swapiService
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private goBack() {
    this.router.navigate(['/resources/characters']);
  }

}
