"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/http");
const user_edit_component_1 = require("./user.edit.component");
const user_list_component_1 = require("./user.list.component");
const user_service_1 = require("./user.service");
const global_1 = require("../common/global");
const router_1 = require("@angular/router");
const ng2_table_1 = require("ng2-table/ng2-table");
const ng2_bootstrap_1 = require("ng2-bootstrap");
let UserModule = class UserModule {
};
UserModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            router_1.RouterModule,
            ng2_table_1.Ng2TableModule,
            ng2_bootstrap_1.PaginationModule.forRoot()
        ],
        declarations: [
            user_edit_component_1.UserEditComponent,
            user_list_component_1.UserListComponent,
        ],
        providers: [
            user_service_1.UserService,
            global_1.GlobalVariables
        ]
    })
], UserModule);
exports.UserModule = UserModule;
