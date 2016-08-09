import { Component, OnInit, QueryList, NgZone } from '@angular/core';
import {DomSanitizationService} from '@angular/platform-browser';

import * as $ from 'jquery';

import { ForfestService } from './forfest.service';
import { FilterPlaces } from './forfest-filter.pipe';
import { PlaceComponent } from '../shared/place/place.component';
import { IPlace } from '../shared/place/place';

declare var google: any;

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
    zone: NgZone;

    places: IPlace[];
    filter: string;
    order: boolean;
    names: string;
    location: {
        lat: number,
        lng: number
    };

    showMap: boolean;
    loadMap: boolean;

    map: any;
    service: any;
    infowindow: any;
    markers: any[];

    constructor(private _fs: ForfestService, private _DomSanitizationService: DomSanitizationService, zone:NgZone){
        this.zone = zone;
        this.filter = "";
        this.places = [];
        this.order = true;
        this.location = {lat:59.340732,lng:18.058287};
        this.showMap = true;
        this.loadMap = true;

        this.markers = [];
    }

    ngOnInit(): void {
        this.gmInit();

        google.maps.event.addListener(this.map, "rightclick", event => {

            var lat = event.latLng.lat();
            var lng = event.latLng.lng();

            while(this.markers.length){
                this.markers.pop().setMap(null);
            }

            this.zone.run(() => {this.location = {lat:lat,lng:lng};this.loadMap = true;});

            var request = {
                location: new google.maps.LatLng(lat,lng),
                radius: '100',
                types: ['bar']
            };
            this.service.nearbySearch(request, this.callback);
            this.map.setCenter(this.location);

        });

    }

    countFiltered(): number {
        return new FilterPlaces().transform(this.places,this.filter).length;
    }

    gmInit(): void {
        var latlng = new google.maps.LatLng(this.location.lat,this.location.lng)

        this.map = new google.maps.Map(document.getElementById('map'), {
            center: latlng,
            zoom: 15
        });

        var request = {
            location: latlng,
            radius: '100',
            types: ['bar']
        };

        this.service = new google.maps.places.PlacesService(this.map);
        this.service.nearbySearch(request, this.callback);
    }

    callback = (results, status) => {
        this.zone.run(() => {this.loadMap = false;});
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            this.places = results;
            for (var i = 0; i < results.length; i++) {
                var place = results[i];

                var marker = new google.maps.Marker({
                    map: this.map,
                    position: place.geometry.location
                });

                this.markers.push(marker);
            }
        }


    }

}

