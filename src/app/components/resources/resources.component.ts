import { Component } from '@angular/core';
import { CharacterModel } from "../../model/character.model";
import { FilmModel } from "../../model/film.model";
import { PlanetModel } from "../../model/planet.model";
import { StarshipModel } from "../../model/starship.model";
import { SpecieModel } from "../../model/specie.model";
import { VehiculeModel } from "../../model/vehicule.model";
import { SwapiService } from '../../services/swapi.service';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

import { ResourcesEnum } from '../../utils/resources.enum';



@Component({
  moduleId: module.id,
  selector: 'ns-resources',
  templateUrl: 'resources.component.html',
  directives: [ MD_BUTTON_DIRECTIVES, MD_LIST_DIRECTIVES ]
})

export class ResourcesComponent {

  characters: Array<CharacterModel>;
  films: Array<FilmModel>;
  planets: Array<PlanetModel>;
  vehicules: Array<VehiculeModel>;
  species: Array<SpecieModel>;
  starships: Array<StarshipModel>;

  resource: Array<any>;

  idCharacterToSearch: number;
  characterSearched: CharacterModel;

  charactersIsHidden: boolean = true;
  filmsIsHidden: boolean = true;
  planetsIsHidden: boolean = true;
  speciesIsHidden: boolean = true;
  starshipsIsHidden: boolean = true;
  vehiculesIsHidden: boolean = true;

  constructor(private swapiService: SwapiService) {}

  getCharacterById(id: number) {
    return this.swapiService
      .getResourceById(ResourcesEnum.PEOPLE, id)
      .subscribe(
        response => this.characterSearched = response,
        error => console.log('Something went wrong : ' + error),
        () => console.log('Done')
      );
  }

  getCharacters() {
    this.hideAllResources();
    return this.swapiService
      .getResourceList(ResourcesEnum.PEOPLE)
      .subscribe(
        response => {
          this.characters = response.results;
          this.charactersIsHidden = false;
        },
        error => console.log('Something went wrong : ' + error),
        () => console.log('Done')
      );
  }

  getFilms() {
    this.hideAllResources();
    return this.swapiService
      .getResourceList(ResourcesEnum.FILMS)
      .subscribe(
        response => {
          this.films = response.results;
          this.filmsIsHidden = false;
        },
        error => console.log('Something went wrong : ' + error),
        () => console.log('Done')
      );
  }

  getPlanets() {
    this.hideAllResources();
    return this.swapiService
      .getResourceList(ResourcesEnum.PLANETS)
      .subscribe(
        response => {
          this.planets = response.results;
          this.planetsIsHidden = false;
        },
        error => console.log('Something went wrong : ' + error),
        () => console.log('Done')
      );
  }

  getVehicules() {
    this.hideAllResources();
    return this.swapiService
      .getResourceList(ResourcesEnum.VEHICULES)
      .subscribe(
        response => {
          this.vehicules = response.results;
          this.vehiculesIsHidden = false;
        },
        error => console.log('Something went wrong : ' + error),
        () => console.log('Done')
      );
  }

  getSpecies() {
    this.hideAllResources();
    return this.swapiService
      .getResourceList(ResourcesEnum.SPECIES)
      .subscribe(
        response => {
          this.species = response.results;
          this.speciesIsHidden = false;
        },
        error => console.log('Something went wrong : ' + error),
        () => console.log('Done')
      );
  }

  getStarships() {
    this.hideAllResources();
    return this.swapiService
      .getResourceList(ResourcesEnum.STARSHIPS)
      .subscribe(
        response => {
          this.starships = response.results;
          this.starshipsIsHidden = false;
        },
        error => console.log('Something went wrong : ' + error),
        () => console.log('Done')
      );
  }

  hideAllResources() {
    this.charactersIsHidden = true;
    this.filmsIsHidden = true;
    this.planetsIsHidden = true;
    this.speciesIsHidden = true;
    this.starshipsIsHidden = true;
    this.vehiculesIsHidden = true;
  }

}
