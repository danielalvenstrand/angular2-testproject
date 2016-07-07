import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { INote } from './note';

@Component({
  moduleId: module.id,
  selector: 'note-component',
  templateUrl: 'note.component.html',
  styleUrls: ['note.component.css']
})

export class NoteComponent implements OnInit{
  @Input() note: INote;
  @Output() update: EventEmitter<INote>;

    constructor(){
      this.update = new EventEmitter<INote>();
    }

    ngOnInit(): void {

    }

    close() {
      this.update.emit(this.note);
    }
}

