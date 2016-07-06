import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'header-component',
	templateUrl: 'header.component.html',
	styleUrls: ['header.component.css']
})
export class HeaderComponent {
    tab: number;

    constructor(){
        this.tab = 0;
    }

	setTab(value:number){
		this.tab = value;
	}

	isTab(value:number){
		return this.tab == value;
	}
}

