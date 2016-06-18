import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { PageService } from './page.service';

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
	ngOnInit(){
		PageService.setCurrentPage(0);
	}
	isPage(value:number){
		return PageService.getCurrentPage()==value;
	}
}

