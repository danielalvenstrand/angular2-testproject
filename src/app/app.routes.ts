import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { NotesComponent } from '../notes/notes.component';
import { ForfestComponent } from '../forfest/forfest.component';
import { ExampleComponent } from '../example/example.component';

export const routes: RouterConfig = [
  { path: 'home', component: HomeComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'forfest', component: ForfestComponent },
  { path: 'example', component: ExampleComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];