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
var app_service_1 = require('./app.service');
var header_component_1 = require('./header/header.component');
var footer_component_1 = require('./footer/footer.component');
var notes_component_1 = require('./notes/notes.component');
var example_component_1 = require('./example/example.component');
var AppComponent = (function () {
    function AppComponent(_appService) {
        this._appService = _appService;
        this._appService = _appService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this._appService.setCurrentPage(0);
    };
    AppComponent.prototype.isPage = function (value) {
        return this._appService.isCurrentPage(value);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-component',
            templateUrl: 'app/app.component.html',
            directives: [header_component_1.HeaderComponent, footer_component_1.FooterComponent, notes_component_1.NotesComponent, example_component_1.ExampleComponent]
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map