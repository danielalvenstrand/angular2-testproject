import { Component, OnInit, Input, HostListener, ViewChild, QueryList } from '@angular/core';

import * as $ from 'jquery';
require('node_modules/jquery-textfill/source/jquery.textfill.min.js');

import { StarComponent } from '../star/star.component';
import { IPlace } from './place';

@Component({
  moduleId: module.id,
  selector: 'place-component',
  templateUrl: 'place.component.html',
  styleUrls: ['place.component.css'],
  directives: [StarComponent]
})

export class PlaceComponent implements OnInit{
  @Input() place: IPlace;
  @Input() filter: string;
  @ViewChild('nameTag') nameTag;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeText();
  }

  constructor(){

  }

  ngOnInit(): void {
    setTimeout(() => {console.log($(this.nameTag.nativeElement));this.resizeText()},0);
  }

  filtered(): boolean{
    let isFiltered = this.place.name.toLowerCase().indexOf(this.filter.toLowerCase())>-1;
    return isFiltered;
  }

  resizeText(): void {
     $(this.nameTag.nativeElement).textfill({maxFontPixels:-1});
  }

}

