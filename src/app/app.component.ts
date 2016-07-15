import { Component } from '@angular/core';
import { CharactersComponent } from './characters.component';
import { Title } from '@angular/platform-browser';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from "@angular2-material/button";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [CharactersComponent, MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES],
  viewProviders: [Title]
})
export class AppComponent {
  title = 'app works!';

  user: any = {
    name : 'Florian'
  };

  constructor(titlePage: Title) {
    let title = "Sample Angular2 + Swapi";
    titlePage.setTitle(title);
    this.title = title;
  }



}
