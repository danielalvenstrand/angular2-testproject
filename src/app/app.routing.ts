import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { NotesComponent } from '../notes/notes.component';
import { ForfestComponent } from '../forfest/forfest.component';
import { ExampleComponent } from '../example/example.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'forfest', component: ForfestComponent },
  { path: 'example', component: ExampleComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);