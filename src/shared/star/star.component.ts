import { Component, OnInit, Input, ViewChild } from '@angular/core';

import * as $ from 'jquery';

@Component({
  moduleId: module.id,
  selector: 'star-component',
  templateUrl: 'star.component.html',
  styleUrls: ['star.component.css']
})

export class StarComponent implements OnInit{
  @Input() rating: number;
  @ViewChild('starBox') starBox;

    constructor(){

    }

    ngOnInit(): void {
      $(this.starBox.nativeElement).width($(this.starBox.nativeElement).outerWidth(true)*((this.rating+1)/5)-5);
    }

}

