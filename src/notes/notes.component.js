"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var note_component_1 = require('../shared/note/note.component');
var selection_service_1 = require('../shared/misc/selection.service');
var NotesComponent = (function () {
    function NotesComponent(_fb, _sel) {
        this._fb = _fb;
        this._sel = _sel;
        this.componentTitle = 'Notes component';
        this.hide = false;
        this.notes = [];
        this.noteForm = _fb.group({
            "noteSubject": new forms_1.FormControl("", forms_1.Validators.required),
            "noteText": new forms_1.FormControl("", forms_1.Validators.required)
        });
    }
    NotesComponent.prototype.ngOnInit = function () {
        this._sel.selEment = $('[name="noteText"]').get(0);
        console.log(this.componentTitle + " has been loaded.");
    };
    NotesComponent.prototype.toggleHide = function () {
        this.hide = !this.hide;
    };
    NotesComponent.prototype.saveNote = function () {
        if (this.noteForm.valid) {
            this.notes.push({
                subject: this.noteForm.controls['noteSubject'].value,
                text: this.noteForm.controls['noteText'].value,
                date: new Date()
            });
            this.clearNote();
        }
    };
    NotesComponent.prototype.addTag = function (tag) {
        var val = this._sel.surround(tag);
        this.noteForm.controls['noteText'].updateValue(val);
    };
    NotesComponent.prototype.clearNote = function () {
        $.each(this.noteForm.controls, function (index, control) {
            control.updateValue('');
            control['_pristine'] = true;
        });
    };
    NotesComponent.prototype.removeNote = function (note) {
        this.notes.splice(this.notes.indexOf(note), 1);
    };
    NotesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'notes-component',
            templateUrl: 'notes.component.html',
            styleUrls: ['notes.component.css'],
            directives: [forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES,
                note_component_1.NoteComponent],
            providers: [selection_service_1.SelectionService]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, selection_service_1.SelectionService])
    ], NotesComponent);
    return NotesComponent;
}());
exports.NotesComponent = NotesComponent;
//# sourceMappingURL=notes.component.js.map