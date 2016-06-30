import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppService } from './app/app.service';
import { AppComponent } from './app/app.component';

bootstrap(AppComponent,[AppService]);

require("node_modules/jquery/dist/jquery.js");