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
    radius: number;
    placeTypes: {
            bars: boolean,
            night_clubs: boolean,
            restaurants: boolean
        };
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
    searchBox: any;
    markers: any[];

    constructor(private _fs: ForfestService, private _DomSanitizationService: DomSanitizationService, zone:NgZone){
        this.zone = zone;
        this.filter = "";
        this.radius = 100;
        this.placeTypes = {
            bars: true,
            night_clubs: false,
            restaurants: false
        }
        this.places = [];
        this.order = true;
        this.location = {
            lat:59.340732,
            lng:18.058287
        };
        this.showMap = true;
        this.loadMap = true;

        this.markers = [];
    }

    ngOnInit(): void {
        this.gmInit();

        this.searchBox.addListener('places_changed', event => {
            var pl = this.searchBox.getPlaces();
            var lat=pl[0].geometry.location.lat()
            , lng=pl[0].geometry.location.lng();
            this.setMap(lat,lng);
        });

        google.maps.event.addListener(this.map, "rightclick", event => {
            var lat = event.latLng.lat()
            , lng = event.latLng.lng();
            this.setMap(lat,lng);
        });
    }

    countFiltered(): number {
        return new FilterPlaces().transform(this.places,this.filter).length;
    }

    setMap(lat,lng): void {
        while(this.markers.length){
                this.markers.pop().setMap(null);
            }

            this.zone.run(() => {this.location = {lat:lat,lng:lng};this.loadMap = true;});



            var request = {
                location: new google.maps.LatLng(lat,lng),
                radius: this.radius,
                types: [this.placeTypes.bars?'bar':null,this.placeTypes.night_clubs?'night_club':null,this.placeTypes.restaurants?'restaurant':null]
            };
            this.service.nearbySearch(request, this.callback);
            this.map.setCenter(this.location);
    }

    gmInit(): void {
        var latlng = new google.maps.LatLng(this.location.lat,this.location.lng)

        this.searchBox = new google.maps.places.SearchBox(document.getElementById('searchBox'));

        this.map = new google.maps.Map(document.getElementById('map'), {
            center: latlng,
            zoom: 15
        });

        this.service = new google.maps.places.PlacesService(this.map);
        this.setMap(this.location.lat,this.location.lng);
    }

    callback = (results, status) => {
        this.zone.run(() => {this.loadMap = false;
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
        });

    }

}

