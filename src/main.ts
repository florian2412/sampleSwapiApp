import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { HTTP_PROVIDERS } from "@angular/http";
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { SwapiService } from "./app/services/swapi.service";
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import 'rxjs/add/operator/map';

if (environment.production) {
  enableProdMode();
}

bootstrap(
  AppComponent,
  [
    HTTP_PROVIDERS,
    APP_ROUTER_PROVIDERS,
    SwapiService,
    disableDeprecatedForms(),
    provideForms()
  ]
)
  .catch(err => console.error(err));

