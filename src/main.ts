import { bootstrap }    from '@angular/platform-browser-dynamic';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

bootstrap(AppComponent,[
    disableDeprecatedForms(), provideForms(), Title,
    APP_ROUTER_PROVIDERS
    ])
.catch(err => console.error(err));

require("node_modules/jquery/dist/jquery.js");