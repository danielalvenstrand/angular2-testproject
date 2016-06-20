import { Component } from '@angular/core';

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
export class NotesComponent {
    currentText = '';
    notes = [];

    onKey(value: string) {
        this.currentText = value;
    }

    onClick(value: string) {
        this.notes.push(value);
        this.currentText = '';
    }
}

