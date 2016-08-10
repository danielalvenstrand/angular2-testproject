import { NgModule }             from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

import { AppComponent } from './app.component';
import { routing,
         appRoutingProviders } from './app.routing';
import { Configuration } from './app.constants';

import { HomeComponent } from '../home/home.component';
import { NotesComponent } from '../notes/notes.component';
import { ForfestComponent } from '../forfest/forfest.component';
import { ExampleComponent } from '../example/example.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotesComponent,
    ForfestComponent,
    ExampleComponent
  ],
  providers: [
    appRoutingProviders,
    disableDeprecatedForms(),
    provideForms(),
    Title,
    HTTP_PROVIDERS,
    Configuration
  ],
  bootstrap: [ AppComponent
    ]
})
export class AppModule {
}