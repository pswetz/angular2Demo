///<reference path="../node_modules/typescript/lib/lib.es6.d.ts"/> 
///<reference path="../typings/custom_shims.d.ts" />
"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
var core_1 = require("@angular/core");
core_1.enableProdMode();
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map