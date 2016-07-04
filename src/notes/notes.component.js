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
var common_1 = require('@angular/common');
var NotesComponent = (function () {
    function NotesComponent(builder) {
        this.builder = builder;
        this.noteSubject = new common_1.Control("", common_1.Validators.required);
        this.noteText = new common_1.Control("", common_1.Validators.required);
        this.noteForm = builder.group({
            noteSubject: this.noteSubject,
            noteText: this.noteText
        });
    }
    NotesComponent.prototype.ngOnInit = function () {
        this.componentTitle = 'Notes component';
        this.currentSubject = null;
        this.currentText = null;
        this.notes = [];
        console.log(this.componentTitle + " has been loaded.");
    };
    NotesComponent.prototype.saveNote = function () {
        if (this.noteForm.valid) {
            this.notes.push({
                subject: this.currentSubject,
                text: this.currentText,
                date: new Date()
            });
            this.clearNote();
        }
    };
    NotesComponent.prototype.addTag = function (tag) {
        this.currentText += "<" + tag + "></" + tag + ">";
    };
    NotesComponent.prototype.clearNote = function () {
        this.currentText = this.currentSubject = '';
    };
    NotesComponent.prototype.removeNote = function (note) {
        this.notes.splice(this.notes.indexOf(note), 1);
    };
    NotesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'notes-component',
            templateUrl: 'notes.component.html',
            styleUrls: ['notes.component.css']
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], NotesComponent);
    return NotesComponent;
}());
exports.NotesComponent = NotesComponent;
//# sourceMappingURL=notes.component.js.map