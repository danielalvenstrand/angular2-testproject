import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Control, ControlGroup, Validators, FormBuilder, NgControlStatus } from '@angular/common';

import { NoteComponent } from '../shared/note/note.component';
import { INote } from '../shared/note/note';

@Component({
  moduleId: module.id,
  selector: 'notes-component',
  templateUrl: 'notes.component.html',
  styleUrls: ['notes.component.css'],
  directives: [NoteComponent]
})

export class NotesComponent implements OnInit{
    componentTitle: string;
    hide: boolean;
    notes:INote[];

    noteSubject: Control;
    noteText: Control;
    noteForm: ControlGroup;

    constructor(private _fb: FormBuilder){
      this.componentTitle  = 'Notes component';
      this.hide = false;
      this.notes = [];

      this.noteSubject = new Control("",Validators.required);
       this.noteText = new Control("",Validators.required);
       this.noteForm = _fb.group({
         noteSubject: this.noteSubject,
         noteText: this.noteText
       });
    }

    ngOnInit(): void {
      console.log(this.componentTitle+" has been loaded.");
    }

    toggleHide(): void {
      this.hide=!this.hide;
    }

    saveNote(): void {
      if(this.noteForm.valid){
        this.notes.push({
          subject:this.noteSubject.value,
          text:this.noteText.value,
          date: new Date()
        });
        this.clearNote();
      }
    }

    addTag(tag: string): void {
      this.noteText.updateValue(this.noteText.value+"<"+tag+"></"+tag+">");
    }

    clearNote(): void {
      $.each(this.noteForm.controls,(index: number, control: Control)=>{
        control.updateValue('');
        control.setErrors(null);
      });
    }

    removeNote(note:INote): void {
      this.notes.splice(this.notes.indexOf(note),1);
    }

}

