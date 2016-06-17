import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'main-component',
  templateUrl: 'app/main.html',
  directives: [HeaderComponent],
  styleUrls: ['app/main.css']
})
export class MainComponent { }

