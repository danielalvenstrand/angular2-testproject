import { Component, OnInit, Input, HostListener, ViewChild, QueryList } from '@angular/core';
import {DomSanitizationService} from '@angular/platform-browser';

import * as $ from 'jquery';
require('node_modules/jquery-textfill/source/jquery.textfill.min.js');

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
  @Input() filter: string;
  @ViewChild('nameTag') nameTag;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeText();
  }

  constructor(private _fs: ForfestService, private _DomSanitizationService: DomSanitizationService, private _configuration: Configuration){
  }

  ngOnInit(): void {
    setTimeout(() => this.resizeText(),0);
  }

  filtered(): boolean {
    let isFiltered = this.place.name.toLowerCase().indexOf(this.filter.toLowerCase())>-1;
    return isFiltered;
  }

  resizeText(): void {
     $(this.nameTag.nativeElement).textfill({maxFontPixels:-1});
  }

  getPhoto(): any {
    if (this.place.photos) return "background-image: url('https://maps.googleapis.com/maps/api/place/photo?key="+this._configuration.gpAPIKey+"&photoreference=" + this.place.photos[0].photo_reference + "&maxwidth=500');";
    else return "background-image: url('assets/images/lion_bar.jpg');";

  }

}

