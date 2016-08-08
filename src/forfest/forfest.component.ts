import { Component, OnInit, QueryList } from '@angular/core';
import {DomSanitizationService} from '@angular/platform-browser';

import * as $ from 'jquery';

import { ForfestService } from './forfest.service';
import { FilterPlaces } from './forfest-filter.pipe';
import { PlaceComponent } from '../shared/place/place.component';
import { IPlace } from '../shared/place/place';

@Component({
    moduleId: module.id,
    selector: 'forfest-component',
    templateUrl: 'forfest.component.html',
    styleUrls: ['forfest.component.css'],
    directives: [PlaceComponent],
    pipes: [FilterPlaces],
    providers: [ForfestService]
})

export class ForfestComponent implements OnInit {
    places: IPlace[];
    filter: string;
    order: boolean;
    names: string;

    constructor(private _fs: ForfestService, private _DomSanitizationService: DomSanitizationService){
        this.filter = "";
        this.places = [];
        this.order = true;
    }

    ngOnInit(): void {
        //this._fs.Get().subscribe(data => this.places = data);
        this._fs.GetPlaceSearch("59.340732,18.058287","100","bar").subscribe(data => this.places = data);
    }

    countFiltered(): number {
        return new FilterPlaces().transform(this.places,this.filter).length;
    }

}

