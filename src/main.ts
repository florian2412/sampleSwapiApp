import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { HTTP_PROVIDERS } from "@angular/http";
import { SwapiService } from "./app/services/swapi.service";
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

if (environment.production) {
  enableProdMode();
}

bootstrap(
  AppComponent,
  [
    HTTP_PROVIDERS,
    SwapiService,
    disableDeprecatedForms(),
    provideForms()
  ]
);

