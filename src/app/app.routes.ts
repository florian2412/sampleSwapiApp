import { AppComponent } from './components/app/app.component';
import { MainComponent } from "./components/main/main.component";
import { ResourcesComponent } from "./components/resources/resources.component";
import { provideRouter, RouterConfig } from '@angular/router';

const routes: RouterConfig = [
  { path: '', component: AppComponent },
  { path: 'main', component: MainComponent },
  { path : 'resources', component: ResourcesComponent }
];

export const APP_ROUTER_PROVIDERS = provideRouter(routes);
