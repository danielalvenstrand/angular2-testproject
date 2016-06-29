import { Component, OnInit } from '@angular/core';
import { INote } from './note';

export class Note {
    text: string;
    other: string;
}

@Component({
  moduleId: module.id,
  selector: 'notes-component',
  templateUrl: 'notes.component.html',
  styleUrls: ['notes.component.css']
})
export class NotesComponent implements OnInit{
    componentTitle: string = 'Notes component';
    currentText: string = '';
    notes:INote[] = [];

    ngOnInit():void {
      console.log(this.componentTitle+" has been loaded.");
    }

    onClick(value: string): void {

        this.notes.push({
          text:value,
          date: new Date()
        });
        this.currentText = '';
    }
}

