import { Component, OnInit, QueryList } from '@angular/core';
import {DomSanitizationService} from '@angular/platform-browser';

import * as $ from 'jquery';

import { ForfestService } from './forfest.service';
import { FilterPlaces } from './forfest-filter.pipe';
import { PlaceComponent } from '../shared/place/place.component';
import { MapComponent } from '../shared/map/map.component';
import { IPlace } from '../shared/place/place';

@Component({
    moduleId: module.id,
    selector: 'forfest-component',
    templateUrl: 'forfest.component.html',
    styleUrls: ['forfest.component.css'],
    directives: [
    PlaceComponent,
    MapComponent
    ],
    pipes: [FilterPlaces],
    providers: [ForfestService]
})

export class ForfestComponent implements OnInit {
    places: IPlace[];
    filterName: string;
    filterDistance: number;
    orderBy: string;
    ascending: boolean;
    showMap: boolean;
    showList: boolean;

    constructor(private _fs: ForfestService, private _DomSanitizationService: DomSanitizationService){
        this.places = [];
        this.filterName = "";
        this.filterDistance = 1000;
        this.orderBy = "name";
        this.ascending = true;
        this.showMap = true;
        this.showLsit = true;
    }

    ngOnInit(): void {

    }

    countFiltered(): number {
        return new FilterPlaces().transform(this.places,this.filterName,this.filterDistance,this.orderBy).length;
    }

    getPlaces(places: IPlace[]): void {
        this.places = places;
    }

    getOrderGlyph(orderby: string): string {
        if (this.orderBy==orderby) {return this.ascending?"glyphicon glyphicon-chevron-up":"glyphicon glyphicon-chevron-down"} else return "glyphicon glyphicon-minus";
    }

}

