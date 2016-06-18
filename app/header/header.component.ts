import { Component } from '@angular/core';

import { PageService } from '../page.service';

@Component({
	selector: 'header-component',
	templateUrl: 'app/header/header.component.html',
	styleUrls: ['app/header/header.component.css']
})
export class HeaderComponent {
	setTab(value:number){
		PageService.setCurrentPage(value);
	}
	isTab(value:number){
		return PageService.getCurrentPage()==value;
	}
}

