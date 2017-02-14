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
const panel_list_component_1 = require("./panel.list.component");
const panel_edit_component_1 = require("./panel.edit.component");
const panel_service_1 = require("./panel.service");
const global_1 = require("../common/global");
const router_1 = require("@angular/router");
const ng2_table_1 = require("ng2-table/ng2-table");
const ng2_bootstrap_1 = require("ng2-bootstrap");
const gridstack_directive_1 = require("./gridstack/gridstack.directive");
const gridstack_item_directive_1 = require("./gridstack/gridstack.item.directive");
let PanelModule = class PanelModule {
};
PanelModule = __decorate([
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
            panel_list_component_1.PanelListComponent,
            panel_edit_component_1.PanelEditComponent,
            gridstack_directive_1.GridStackDirective,
            gridstack_item_directive_1.GridStackItemDirective
        ],
        providers: [
            panel_service_1.PanelService,
            global_1.GlobalVariables
        ]
    })
], PanelModule);
exports.PanelModule = PanelModule;
