"use strict";
const router_1 = require("@angular/router");
const home_component_1 = require("./home/home.component");
const user_list_component_1 = require("./user/user.list.component");
const user_edit_component_1 = require("./user/user.edit.component");
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
];
// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map