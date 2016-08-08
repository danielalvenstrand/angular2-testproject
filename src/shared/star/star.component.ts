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
      var w;
      if (this.rating) w =$(this.starBox.nativeElement).outerWidth(true)*((this.rating+1)/5);
      else w = 0;
      $(this.starBox.nativeElement).width(w);
    }

}

