import { Pipe, PipeTransform } from '@angular/core';

import * as $ from 'jquery';

import { IPlace } from '../shared/place/place';

@Pipe({ name: 'filterPlaces' })

export class FilterPlaces implements PipeTransform{
    transform(places: IPlace[], filter: string, ascending: boolean = true) {
        var sortArray: number[];
        if (ascending) sortArray=[-1,1,0];
        else sortArray=[1,-1,0];
        return places.filter(place => place.name.toLowerCase().indexOf(filter)>-1).sort((a,b) => {
            if (a.name < b.name) {
                return sortArray[0];
              } else if (a.name > b.name) {
                return sortArray[1];
              } else {
                return sortArray[2];
              }
        });
    }
}