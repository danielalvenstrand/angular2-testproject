import { bootstrap } from '@angular/platform-browser-dynamic';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app/app.component';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

//import { enableProdMode } from '@angular/core'
//enableProdMode();

bootstrap(AppComponent,[
    disableDeprecatedForms(), provideForms(), Title,
    HTTP_PROVIDERS, APP_ROUTER_PROVIDERS
    ])
.catch(err => console.error(err));
