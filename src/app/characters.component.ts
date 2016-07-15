import { Component } from '@angular/core';
import { Character } from "./character";
import { SwapiService } from './services/swapi.service';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';




@Component({
  moduleId: module.id,
  selector: 'ns-characters',
  templateUrl: 'characters.component.html',
  directives: [ MD_BUTTON_DIRECTIVES ]
})

export class CharactersComponent {

  characters: Array<Character>;
  idCharacterToSearch: number;

  characterSearched: Character;

  constructor(private swapiService: SwapiService) {}

  getCharacterById(id: number) {
    return this.swapiService
      .getResourceById('people', id)
      .subscribe(response => this.characterSearched = response);
  }

  getCharacters() {
    return this.swapiService
      .getResourceList('people')
      .subscribe(response => this.characters = response);
}

}
