"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
///<reference path="./../typings/globals/core-js/index.d.ts"/>
///<reference path="./../node_modules/@types/node/index.d.ts" />
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/http");
const app_component_1 = require("./app.component");
const header_component_1 = require("./common/header.component");
const sidebar_component_1 = require("./common/sidebar.component");
const global_1 = require("./common/global");
const app_routes_1 = require("./app.routes");
const home_component_1 = require("./home/home.component");
const user_module_1 = require("./user/user.module");
const panel_module_1 = require("./panel/panel.module");
const ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
const shared_service_1 = require("./common/shared.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routes_1.routing,
            http_1.HttpModule,
            http_1.JsonpModule,
            user_module_1.UserModule,
            panel_module_1.PanelModule,
            ng2_toastr_1.ToastModule.forRoot(),
        ],
        declarations: [
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            sidebar_component_1.SidebarComponent,
            home_component_1.HomeComponent
        ],
        providers: [
            global_1.GlobalVariables,
            shared_service_1.SharedService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
