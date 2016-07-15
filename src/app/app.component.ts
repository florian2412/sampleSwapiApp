import { Component } from '@angular/core';
import { CharactersComponent } from './characters.component';
import { Title } from '@angular/platform-browser';
import { Http } from "@angular/http";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [CharactersComponent],
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
