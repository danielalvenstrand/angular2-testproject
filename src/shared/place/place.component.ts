import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import * as $ from 'jquery';

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
  @Output() update: EventEmitter<IPlace>;
  @ViewChild('placeBox') placeBox;

    constructor(){
      this.update = new EventEmitter<IPlace>();
    }

    ngOnInit(): void {

    }

    close() {
      this.update.emit(this.place);
    }
}

