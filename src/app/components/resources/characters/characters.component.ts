import { Component, OnInit } from '@angular/core';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { CharacterModel } from "../../../model/character.model";
import { SwapiService } from '../../../services/swapi.service';
import { ResourcesEnum } from "../../../utils/resources.enum";
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: 'characters.component.html',
  directives: [ MD_CARD_DIRECTIVES, MD_LIST_DIRECTIVES, MD_BUTTON_DIRECTIVES ]
})

export class CharactersComponent implements OnInit {

  private characters: Array<CharacterModel>;

  constructor(private swapiService: SwapiService, private router: Router) { }

  ngOnInit() {
    this.getCharacters();
  }

  private getCharacters() {
    return this.swapiService
      .getResourceList(ResourcesEnum.PEOPLE)
      .subscribe(
        response => {
          this.characters = response;
        },
        error => this.handleError,
        () => console.log('Done')
      );
  }

  private showDetail(url: string) {
    let urlArray = url.split( '/' );
    let id = urlArray[5];
    this.router.navigate(['/resources/characters/', id]);
  }

  private goHome() {
    this.router.navigate(['/home']);
  }

  private goBack() {
    this.router.navigate(['/resources']);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
