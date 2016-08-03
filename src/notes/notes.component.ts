import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import * as $ from 'jquery';

import { NoteComponent } from '../shared/note/note.component';
import { INote } from '../shared/note/note';

import { Configuration } from '../app/app.constants';
import { NoteService } from './notes.service';
import { SelectionService } from '../shared/misc/selection.service';

@Component({
  moduleId: module.id,
  selector: 'notes-component',
  templateUrl: 'notes.component.html',
  styleUrls: ['notes.component.css'],
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES,
              NoteComponent],
  providers: [Configuration, NoteService, SelectionService]
})

export class NotesComponent implements OnInit{
    componentTitle: string;
    hide: boolean;
    notes:INote[];
    noteForm: FormGroup;

    constructor(private _fb: FormBuilder, private _ns: NoteService, private _ss: SelectionService){
      this.componentTitle  = 'Notes component';
      this.hide = false;
      this.notes = [];

       this.noteForm = _fb.group({
         "noteSubject": new FormControl("",Validators.required),
         "noteText": new FormControl("",Validators.required)
       });
    }

    ngOnInit(): void {
      this.populateNotes();

      this._ss.selEment = $('[name="noteText"]').get(0);

      console.log(this.componentTitle+" has been loaded.");
    }

    toggleHide(): void {
      this.hide=!this.hide;
    }

    populateNotes(): void {
      this._ns
            .GetAll()
            .subscribe((data:INote[]) => this.notes = data,
                error => console.log(error),
                () => console.log('Get all Notes complete'));
    }

    saveNote(): void {
      if(this.noteForm.valid){
        this._ns.Add(
          this.noteForm.controls['noteSubject'].value,
          this.noteForm.controls['noteText'].value
        ).subscribe((data) => {},
                error => console.log(error),
                () => {
                  this.clearNote();
                  this.populateNotes();
                });
      }
    }

    removeNote(note:INote): void {
      this._ns.Delete(note).subscribe((data) => {},
                error => console.log(error),
                () => this.populateNotes());
    }

    addTag(tag: string): void {
      let val = this._ss.surround(tag);
      (<FormControl>this.noteForm.controls['noteText']).updateValue(val);
    }

    clearNote(): void {
      $.each(this.noteForm.controls,(index: number, control: FormControl)=>{
        control.updateValue('');
        control['_pristine']=true;
      });
    }

}

