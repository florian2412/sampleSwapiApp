import { Component } from '@angular/core';
import { ResourcesComponent } from './resources.component';
import { Title } from '@angular/platform-browser';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ResourcesComponent, MD_CARD_DIRECTIVES, MD_TOOLBAR_DIRECTIVES],
  viewProviders: [Title]
})
export class AppComponent {
  title: string;

  user: any = {
    name : 'Florian'
  };

  constructor(titlePage: Title) {
    let title = "Sample Angular2 + Swapi";
    titlePage.setTitle(title);
    this.title = title;
  }



}
