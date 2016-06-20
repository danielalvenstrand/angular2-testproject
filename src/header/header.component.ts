import { Component } from '@angular/core';

import { AppService } from '../app/app.service';

@Component({
	moduleId: module.id,
	selector: 'header-component',
	templateUrl: 'header.component.html',
	styleUrls: ['header.component.css']
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

