import { Component, OnInit } from '@angular/core';
import { ResourcesEnum } from "../../../utils/resources.enum";
import { FilmModel } from "../../../model/film.model";
import { SwapiService } from "../../../services/swapi.service";
import { MD_CARD_DIRECTIVES } from "@angular2-material/card/card";
import { MD_BUTTON_DIRECTIVES } from "@angular2-material/button/button";
import { MD_LIST_DIRECTIVES } from "@angular2-material/list/list";
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: 'films.component.html',
  directives: [ MD_CARD_DIRECTIVES, MD_LIST_DIRECTIVES, MD_BUTTON_DIRECTIVES ]
})

export class FilmsComponent implements OnInit {

  private films: Array<FilmModel>;

  constructor(private swapiService: SwapiService, private router: Router) { }

  ngOnInit() {
    this.getFilms();
  }

  private getFilms() {
    return this.swapiService
      .getResourceList(ResourcesEnum.FILMS)
      .subscribe(
        response => {
          this.films = response;
        },
        error => this.handleError,
        () => console.log('Done')
      );
  }

  private showDetail(url: string) {
    let urlArray = url.split( '/' );
    let id = urlArray[5];
    this.router.navigate(['/resources/films/', id]);
  }

  private goBack() {
    this.router.navigate(['/resources']);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
