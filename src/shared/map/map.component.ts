import { Component, OnInit, Output, EventEmitter, NgZone } from '@angular/core';

import { PlaceComponent } from '../place/place.component';
import { IPlace } from '../place/place';

declare var google: any;

@Component({
  moduleId: module.id,
  selector: 'map-component',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css']
})

export class MapComponent implements OnInit{
  @Output() update: EventEmitter<any>;
  currentPlace: IPlace;

  zone: NgZone;
  showOptions: boolean;
  radius: number;
  placeTypes: {
    bars: boolean,
    night_clubs: boolean,
    restaurants: boolean
  };
  names: string;
  location: {
    lat: number,
    lng: number
  };
  nrPlaces: number;
  loadMap: boolean;

  map: any;
  service: any;
  infowindow: any;
  searchBox: any;
  markers: any[];
  mapW: number;

  iconBase: string;
  icons:  {
    position: {
      icon: string
    };
  }

  constructor(zone:NgZone){
    this.update = new EventEmitter<any>();
    this.zone = zone;

    this.currentPlace = null;
    this.showOptions = false;
    this.radius = 100;
    this.placeTypes = {
      bars: true,
      night_clubs: false,
      restaurants: false
    }
    this.location = {
      lat:59.340732,
      lng:18.058287
    };
    this.nrPlaces = 0;
    this.loadMap = true;

    this.markers = [];

    var iconBase = 'https://maps.google.com/mapfiles/kml/';
    this.icons = {
      position: {
        icon: iconBase + 'paddle/blu-blank.png'
      }
    };
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

    google.maps.event.addDomListener(window, 'resize', event => {
      this.resizeMap();
    });
  }

  resizeMap(): void {
        setTimeout(()=>{google.maps.event.trigger(this.map, 'resize');
        this.map.setCenter(new google.maps.LatLng(this.location.lat,this.location.lng));},0);
    };

  setMap(lat,lng): void {
    while(this.markers.length){
      var mark = this.markers.pop();
      if (mark.setMap) mark.setMap(null);
    }

    this.zone.run(() => {this.location = {lat:lat,lng:lng};this.loadMap = true;});



    var request = {
      location: new google.maps.LatLng(lat,lng),
      radius: this.radius,
      types: [this.placeTypes.bars?'bar':null,this.placeTypes.night_clubs?'night_club':null,this.placeTypes.restaurants?'restaurant':null]
    };
    this.service.nearbySearch(request, this.callback);
    this.map.panTo(this.location);

  }

  gmInit(): void {
    var latlng = new google.maps.LatLng(this.location.lat,this.location.lng)

    this.searchBox = new google.maps.places.SearchBox(document.getElementById('searchBox'));

    this.map = new google.maps.Map(document.getElementById('map'), {
      center: latlng,
      zoom: 17
    });

    this.service = new google.maps.places.PlacesService(this.map);
    this.setMap(this.location.lat,this.location.lng);
  }

  callback = (results, status) => {
    this.zone.run(() => {
      this.loadMap = false;
      if (status == google.maps.places.PlacesServiceStatus.OK) {

        for (var i = 0; i < results.length; i++) {
          var place = results[i];

          place.distance = this.getDistance(this.location.lat,this.location.lng,place.geometry.location.lat(),place.geometry.location.lng());

          let $this = this;
          var marker = new google.maps.Marker({
            map: this.map,
            position: place.geometry.location,
            title: place.name,
            placeObj: place
          });
          google.maps.event.addListener(marker,'click', function() {
              $this.zone.run(() => {$this.currentPlace = this.placeObj;});
            });

          this.markers.push(marker);
        }

        this.nrPlaces = results.length;
        this.update.emit(results);
      }

      var marker = new google.maps.Marker({
        map: this.map,
        position: new google.maps.LatLng(this.location.lat,this.location.lng),
        icon: this.icons.position.icon,
        title: 'Min plats'
      });

      var circle = new google.maps.Circle({
        map: this.map,
        radius: this.radius,    // 10 miles in metres
        fillColor: '#fff',
        strokeColor: "#aaa",
        clickable: false
      });

      circle.bindTo('center', marker, 'position');

      this.markers.push(marker);
      this.markers.push(circle);
    });

  }


  getDistance(lat1,lon1,lat2,lon2): number {
    var R = 6378137;
    var dLat = this.deg2rad(lat2-lat1);
    var dLon = this.deg2rad(lon2-lon1);
    var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d;
  }

  deg2rad(deg) :number {
    return deg * (Math.PI/180)
  }


}

