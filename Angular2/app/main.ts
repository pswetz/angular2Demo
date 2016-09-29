///<reference path="../node_modules/typescript/lib/lib.es6.d.ts"/> 
///<reference path="../typings/custom_shims.d.ts" />

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app.module";
import {enableProdMode} from "@angular/core";

enableProdMode();

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);