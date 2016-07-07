"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app/app.component');
var app_routes_1 = require('./app/app.routes');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    forms_1.disableDeprecatedForms(), forms_1.provideForms(), platform_browser_1.Title,
    app_routes_1.APP_ROUTER_PROVIDERS
])
    .catch(function (err) { return console.error(err); });
require("node_modules/jquery/dist/jquery.js");
//# sourceMappingURL=main.js.map