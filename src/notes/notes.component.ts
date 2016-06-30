import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import { INote } from './note';

@Component({
  moduleId: module.id,
  selector: 'notes-component',
  templateUrl: 'notes.component.html',
  styleUrls: ['notes.component.css']
})

export class NotesComponent implements OnInit{
    months:string[] = ["January","February","Mars","April","May","June","July","August","September","October","November","December"];
    componentTitle: string = 'Notes component';
    currentText: string = '';
    notes:INote[] = [];

    ngOnInit():void {
      console.log(this.componentTitle+" has been loaded.");
    }

    saveNote(value: string): void {
        this.notes.push({
          text:value,
          date: new Date()
        });
        this.currentText = '';
    }

    addTag(tag: string): void {
      this.currentText += "<"+tag+"></"+tag+">";
    }

    clearNote(): void {
      this.currentText = '';
    }

    removeNote(note:INote): void {
      this.notes.splice(this.notes.indexOf(note),1);
    }

}

