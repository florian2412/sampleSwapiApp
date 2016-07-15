import { Component } from '@angular/core';
import { ResourcesComponent } from '../resources/resources.component';
import { Title } from '@angular/platform-browser';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ResourcesComponent, MD_CARD_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MdIcon],
  viewProviders: [Title],
  providers: [ MdIconRegistry ]
})
export class AppComponent {
  title: string;

  views: Object[] = [{
      name: "Characters",
      icon: "assignment ind"
    },{
      name: "Films",
      icon: "assignment ind"
    },{
      name: "Planets",
      icon: "assignment ind"
    },{
      name: "Species",
      icon: "assignment ind"
    },{
      name: "Starships",
      icon: "assignment ind"
    }, {
      name: "Vehicules",
      icon: "assignment ind"
    }
  ];

  constructor(titlePage: Title) {
    let title = "Sample Angular2 + Swapi";
    titlePage.setTitle(title);
    this.title = title;
  }



}
