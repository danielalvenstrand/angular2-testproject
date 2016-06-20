import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { AppService } from './app.service';

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
	constructor(private _appService: AppService){
		this._appService = _appService;
	}

	ngOnInit(){
		this._appService.setCurrentPage(0);
	}
	isPage(value:number){
		return this._appService.isCurrentPage(value);
	}
}

