import { provide } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { HTTP_PROVIDERS } from '@angular/http';
import { Configuration } from './app/app.constants';

import { AppComponent } from './app/app.component';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { CORSBrowserXHR } from './CORSBrowserXHR';

//import { enableProdMode } from '@angular/core'
//enableProdMode();

bootstrap(AppComponent,[
    disableDeprecatedForms(), provideForms(), Title,
    HTTP_PROVIDERS, APP_ROUTER_PROVIDERS, Configuration
    ])
.catch(err => console.error(err));