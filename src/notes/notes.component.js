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
var NotesComponent = (function () {
    function NotesComponent() {
        this.months = ["January", "February", "Mars", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.componentTitle = 'Notes component';
        this.currentText = '';
        this.notes = [];
    }
    NotesComponent.prototype.ngOnInit = function () {
        console.log(this.componentTitle + " has been loaded.");
    };
    NotesComponent.prototype.saveNote = function (value) {
        this.notes.push({
            text: value,
            date: new Date()
        });
        this.currentText = '';
    };
    NotesComponent.prototype.addTag = function (tag) {
        this.currentText += "<" + tag + "></" + tag + ">";
    };
    NotesComponent.prototype.clearNote = function () {
        this.currentText = '';
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
        __metadata('design:paramtypes', [])
    ], NotesComponent);
    return NotesComponent;
}());
exports.NotesComponent = NotesComponent;
//# sourceMappingURL=notes.component.js.map