import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ExampleComponent } from './example/example.component';

@Component({
  selector: 'main-component',
  templateUrl: 'app/main.html',
  directives: [HeaderComponent,FooterComponent,ExampleComponent],
  styleUrls: ['app/main.css']
})
export class MainComponent { }

