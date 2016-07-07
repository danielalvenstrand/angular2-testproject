"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('../home/home.component');
var notes_component_1 = require('../notes/notes.component');
var example_component_1 = require('../example/example.component');
exports.routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'notes', component: notes_component_1.NotesComponent },
    { path: 'example', component: example_component_1.ExampleComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map