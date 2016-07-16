import { Component, OnInit } from '@angular/core';
import { CharacterModel } from "../../model/character.model";
import { FilmModel } from "../../model/film.model";
import { PlanetModel } from "../../model/planet.model";
import { StarshipModel } from "../../model/starship.model";
import { SpecieModel } from "../../model/specie.model";
import { VehiculeModel } from "../../model/vehicule.model";
import { SwapiService } from '../../services/swapi.service';
import { ResourcesEnum } from '../../utils/resources.enum';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'my-resources',
  templateUrl: 'resources.component.html',
  directives: [ ROUTER_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_LIST_DIRECTIVES ]
})

export class ResourcesComponent implements OnInit {

  characters: Array<CharacterModel>;
  films: Array<FilmModel>;
  planets: Array<PlanetModel>;
  vehicles: Array<VehiculeModel>;
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
  vehiclesIsHidden: boolean = true;

  constructor(private swapiService: SwapiService) {}

  ngOnInit() { }

  getCharacterById(id: number) {
    return this.swapiService
      .getResourceById(ResourcesEnum.PEOPLE, id)
      .subscribe(
        response => this.characterSearched = response,
        error => this.handleError(error),
        () => console.log('Done')
      );
  }

  // TODO test this method
  getResourceByResourceAndId(resource: ResourcesEnum, id: number) {
    return this.swapiService
      .getResourceById(resource, id)
      .subscribe(
        response => this.characterSearched = response,
        error => this.handleError(error),
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
        error => this.handleError(error),
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
        error => this.handleError(error),
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
        error => this.handleError(error),
        () => console.log('Done')
      );
  }

  getVehicules() {
    this.hideAllResources();
    return this.swapiService
      .getResourceList(ResourcesEnum.VEHICLES)
      .subscribe(
        response => {
          this.vehicles = response.results;
          this.vehiclesIsHidden = false;
        },
        error => this.handleError(error),
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
        error => this.handleError(error),
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
        error => this.handleError(error),
        () => console.log('Done')
      );
  }

  hideAllResources() {
    this.charactersIsHidden = true;
    this.filmsIsHidden = true;
    this.planetsIsHidden = true;
    this.speciesIsHidden = true;
    this.starshipsIsHidden = true;
    this.vehiclesIsHidden = true;
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
