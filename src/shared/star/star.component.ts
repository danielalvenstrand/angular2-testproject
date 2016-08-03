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
      $.each(
        $(this.starBox.nativeElement).find('.glyphicon-star'),(i,e) => {
          if(i>this.rating-1) $(e).hide();
        });
    }

}

