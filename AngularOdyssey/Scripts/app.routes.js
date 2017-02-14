"use strict";
const router_1 = require("@angular/router");
const home_component_1 = require("./home/home.component");
const user_list_component_1 = require("./user/user.list.component");
const user_edit_component_1 = require("./user/user.edit.component");
const panel_list_component_1 = require("./panel/panel.list.component");
const panel_edit_component_1 = require("./panel/panel.edit.component");
// Route Configuration
exports.routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    { path: 'user', component: user_list_component_1.UserListComponent },
    { path: 'user/create', component: user_edit_component_1.UserEditComponent },
    { path: 'user/:id', component: user_edit_component_1.UserEditComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'panel', component: panel_list_component_1.PanelListComponent },
    { path: 'panel/create', component: panel_edit_component_1.PanelEditComponent },
    { path: 'panel/:id', component: panel_edit_component_1.PanelEditComponent },
];
// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
