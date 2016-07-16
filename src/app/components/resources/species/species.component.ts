import { Component, OnInit } from '@angular/core';
import { ResourcesEnum } from "../../../utils/resources.enum";
import { SpecieModel } from "../../../model/specie.model";
import { SwapiService } from "../../../services/swapi.service";
import { MD_CARD_DIRECTIVES } from "@angular2-material/card/card";
import { MD_BUTTON_DIRECTIVES } from "@angular2-material/button/button";
import { MD_LIST_DIRECTIVES } from "@angular2-material/list/list";

@Component({
  moduleId: module.id,
  templateUrl: 'species.component.html',
  directives: [ MD_CARD_DIRECTIVES, MD_LIST_DIRECTIVES, MD_BUTTON_DIRECTIVES ]
})

export class SpeciesComponent implements OnInit {

  private species: Array<SpecieModel>;

  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
    this.getSpecies();
  }

  private getSpecies() {
    return this.swapiService
      .getResourceList(ResourcesEnum.SPECIES)
      .subscribe(
        response => {
          this.species = response;
        },
        error => this.handleError,
        () => console.log('Done')
      );
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
