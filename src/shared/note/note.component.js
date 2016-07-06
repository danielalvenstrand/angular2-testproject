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
var NoteComponent = (function () {
    function NoteComponent() {
        this.noteEvent = new core_1.EventEmitter();
    }
    NoteComponent.prototype.ngOnInit = function () {
    };
    NoteComponent.prototype.close = function () {
        this.noteEvent.emit(this.note);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NoteComponent.prototype, "note", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], NoteComponent.prototype, "noteEvent", void 0);
    NoteComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'note-component',
            templateUrl: 'note.component.html',
            styleUrls: ['note.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], NoteComponent);
    return NoteComponent;
}());
exports.NoteComponent = NoteComponent;
//# sourceMappingURL=note.component.js.map