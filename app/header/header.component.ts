import { Component } from '@angular/core';

import { AppService } from '../app.service';

@Component({
	selector: 'header-component',
	templateUrl: 'app/header/header.component.html',
	styleUrls: ['app/header/header.component.css']
})
export class HeaderComponent {
    constructor(private _appService: AppService){
        this._appService = _appService;
    }

	setTab(value:number){
		this._appService.setCurrentPage(value);
	}
	isTab(value:number){
		return this._appService.isCurrentPage(value);
	}
}

