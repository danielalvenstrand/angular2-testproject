import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { NotesComponent } from '../notes/notes.component';
import { ExampleComponent } from '../example/example.component';

@Component({
	moduleId: module.id,
	selector: 'app-component',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	directives: [HeaderComponent,FooterComponent,NotesComponent,ExampleComponent]
})

export class AppComponent implements OnInit{
	constructor(){
	}

	ngOnInit(){
	}
}

