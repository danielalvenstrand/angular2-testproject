import { Component } from '@angular/core';

export class Note {
    text: string;
    other: string;
}

@Component({
  selector: 'notes-component',
  templateUrl: 'app/notes/notes.component.html',
  styleUrls: ['app/notes/notes.component.css']
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

