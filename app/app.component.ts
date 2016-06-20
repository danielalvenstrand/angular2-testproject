import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { AppService } from './app.service';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotesComponent } from './notes/notes.component';
import { ExampleComponent } from './example/example.component';

@Component({
  selector: 'app-component',
  templateUrl: 'app/app.component.html',
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

