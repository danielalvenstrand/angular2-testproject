import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

import { ForfestService } from './forfest.service';
import { PlaceComponent } from '../shared/place/place.component';
import { IPlace } from '../shared/place/place';

@Component({
    moduleId: module.id,
    selector: 'forfest-component',
    templateUrl: 'forfest.component.html',
    styleUrls: ['forfest.component.css'],
    directives: [PlaceComponent],
    providers: [ForfestService]
})

export class ForfestComponent implements OnInit {
    places: IPlace[];

    constructor(private _fs: ForfestService){ }

    ngOnInit(): void{
        this._fs.Get().subscribe(data => this.places = data);
    }
}

