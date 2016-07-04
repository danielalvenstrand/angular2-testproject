import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Control, ControlGroup, Validators, FormBuilder, AbstractControl } from '@angular/common';
import {StringMapWrapper} from '@angular/core/src/facade/collection';

import { INote } from './note';

@Component({
  moduleId: module.id,
  selector: 'notes-component',
  templateUrl: 'notes.component.html',
  styleUrls: ['notes.component.css']
})

export class NotesComponent implements OnInit{
    componentTitle: string;
    currentSubject: string;
    currentText: string;
    notes:INote[];

    noteSubject: Control;
    noteText: Control;
    noteForm: ControlGroup;

    constructor(private builder: FormBuilder){
       this.noteSubject = new Control("",Validators.required);
       this.noteText = new Control("",Validators.required);

       this.noteForm = builder.group({
         noteSubject: this.noteSubject,
         noteText: this.noteText
       });
    }

    ngOnInit():void {
      this.componentTitle  = 'Notes component';
      this.currentSubject = null;
      this.currentText = null;
      this.notes = [];

      console.log(this.componentTitle+" has been loaded.");
    }

    saveNote(): void {
      if(this.noteForm.valid){
        this.notes.push({
          subject:this.currentSubject,
          text:this.currentText,
          date: new Date()
        });
        this.clearNote();
      }
    }

    addTag(tag: string): void {
      this.currentText += "<"+tag+"></"+tag+">";
    }

    clearNote(): void {
      this.currentText = this.currentSubject = '';
    }

    removeNote(note:INote): void {
      this.notes.splice(this.notes.indexOf(note),1);
    }

}

