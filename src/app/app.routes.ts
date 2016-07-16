import { AppComponent } from './components/app/app.component';
import { MainComponent } from "./components/main/main.component";
import { ResourcesComponent } from "./components/resources/resources.component";
import { CharactersComponent } from "./components/resources/characters/characters.component";
import { CharacterDetailComponent } from "./components/resources/characters/character-detail.component";
import { FilmsComponent } from "./components/resources/films/films.component";
import { FilmDetailComponent } from "./components/resources/films/film-detail.component";
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { provideRouter, RouterConfig } from '@angular/router';

const routes: RouterConfig = [
  { path: '', component: AppComponent },
  { path: 'home', component: MainComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'resources/characters', component: CharactersComponent },
  { path: 'resources/characters/detail', component: CharacterDetailComponent },
  { path: 'resources/films', component: FilmsComponent },
  { path: 'resources/films/detail', component: FilmDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent }
];

export const APP_ROUTER_PROVIDERS = provideRouter(routes);
