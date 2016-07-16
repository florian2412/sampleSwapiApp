import { Component, OnInit, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from "@angular/router";
import { SwapiService } from "../../../services/swapi.service";
import { ResourcesEnum } from "../../../utils/resources.enum";
import { FilmModel } from "../../../model/film.model";

@Component({
    moduleId: module.id,
    templateUrl: 'film-detail.component.html',
    directives: [ ROUTER_DIRECTIVES ]
})

export class FilmDetailComponent implements OnInit, OnDestroy {

  private sub: any;

  private currentFilm: FilmModel;

  constructor(private router: Router, private route: ActivatedRoute, private swapiService: SwapiService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      // Get with the id, the good character from swapiService
      this.getCharacterById(id);
    });
  }

  getCharacterById(id: number) {
    return this.swapiService
      .getResourceById(ResourcesEnum.FILMS, id)
      .subscribe(
        response => this.currentFilm = response,
        error => this.handleError(error),
        () => console.log('Done')
      );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private goBack() {
    this.router.navigate(['/resources/films']);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
