import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
	moduleId: module.id,
	selector: 'header-component',
	templateUrl: 'header.component.html',
	styleUrls: ['header.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent {

    constructor(private _title: Title){}

    setTitle(title: string): void {
        this._title.setTitle(title);
    }

}

