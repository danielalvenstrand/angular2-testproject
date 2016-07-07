import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
	moduleId: module.id,
	selector: 'app-component',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	directives: [ROUTER_DIRECTIVES,
				HeaderComponent,FooterComponent]
})

export class AppComponent implements OnInit{
	constructor(){
	}

	ngOnInit(){
	}
}

