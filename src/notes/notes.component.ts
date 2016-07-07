import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


import { NoteComponent } from '../shared/note/note.component';
import { INote } from '../shared/note/note';

import { SelectionService } from '../shared/misc/selection.service';

@Component({
  moduleId: module.id,
  selector: 'notes-component',
  templateUrl: 'notes.component.html',
  styleUrls: ['notes.component.css'],
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES,
              NoteComponent],
  providers: [SelectionService]
})

export class NotesComponent implements OnInit{
    componentTitle: string;
    hide: boolean;
    notes:INote[];
    noteForm: FormGroup;

    constructor(private _fb: FormBuilder, private _sel: SelectionService){
      this.componentTitle  = 'Notes component';
      this.hide = false;
      this.notes = [];

       this.noteForm = _fb.group({
         "noteSubject": new FormControl("",Validators.required),
         "noteText": new FormControl("",Validators.required)
       });
    }

    ngOnInit(): void {
      this._sel.selEment = $('[name="noteText"]').get(0);

      console.log(this.componentTitle+" has been loaded.");
    }

    toggleHide(): void {
      this.hide=!this.hide;
    }

    saveNote(): void {
      if(this.noteForm.valid){
        this.notes.push({
          subject:this.noteForm.controls['noteSubject'].value,
          text:this.noteForm.controls['noteText'].value,
          date: new Date()
        });
        this.clearNote();
      }
    }

    addTag(tag: string): void {
      let val = this._sel.surround(tag);
      (<FormControl>this.noteForm.controls['noteText']).updateValue(val);
    }

    clearNote(): void {
      $.each(this.noteForm.controls,(index: number, control: FormControl)=>{
        control.updateValue('');
        control['_pristine']=true;
      });
    }

    removeNote(note:INote): void {
      this.notes.splice(this.notes.indexOf(note),1);
    }

}

