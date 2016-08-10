import { Component, OnInit, Input, HostListener, ViewChild, QueryList } from '@angular/core';
import {DomSanitizationService} from '@angular/platform-browser';

import * as $ from 'jquery';
//require('node_modules/jquery-textfill/source/jquery.textfill.min.js');
declare var google: any;

import { ForfestService } from '../../forfest/forfest.service';
import { Configuration } from '../../app/app.constants';
import { StarComponent } from '../star/star.component';
import { IPlace } from './place';

@Component({
  moduleId: module.id,
  selector: 'place-component',
  templateUrl: 'place.component.html',
  styleUrls: ['place.component.css'],
  directives: [StarComponent],
  providers: [ForfestService]
})

export class PlaceComponent implements OnInit{
  @Input() place: IPlace;
  @Input() filterName: string;
  @Input() filterDistance: number;
  @ViewChild('nameTag') nameTag;

  @HostListener('window:resize', ['$event'])
    onResize(event) {
    //this.resizeText();
  }

  constructor(private _fs: ForfestService, private _DomSanitizationService: DomSanitizationService, private _configuration: Configuration){
  }

  ngOnInit(): void {
    //setTimeout(() => this.resizeText(),0);
    if (this.place.photos) this.place.photo = this.place.photos[0].getUrl({ 'maxWidth': 500, 'maxHeight': 500 });
  }


  filtered(): boolean {
    let isNameFiltered = this.place.name.toLowerCase().indexOf(this.filterName.toLowerCase())>-1;
    let isDistanceFiltered = this.place.distance<=this.filterDistance;
    return isNameFiltered || isDistanceFiltered;
  }

  /*resizeText(): void {
     $(this.nameTag.nativeElement).textfill({maxFontPixels:-1});
   }*/

   getPhoto(): string {
     if (this.place.photos) return "url('"+this.place.photo+")";
     else return "url('/assets/images/lion_bar.jpg')";
   }

   getBorder(): string {
     if (this.place.opening_hours) {
       if (this.place.opening_hours.open_now) return "green";
       else return "red";
     }
     return "grey";
   }

   getOpen(): string {
     if (this.place.opening_hours) {
       if (this.place.opening_hours.open_now) return "Öppet";
       else return "Stängt";
     }
     return "";
   }
}

