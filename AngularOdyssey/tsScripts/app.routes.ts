﻿// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user/user.list.component';
import { UserEditComponent } from './user/user.edit.component';
import { PanelListComponent } from './panel/panel.list.component';
import { PanelEditComponent } from './panel/panel.edit.component';

// Route Configuration
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    { path: 'user', component: UserListComponent },
    { path: 'user/create', component: UserEditComponent },
    { path: 'user/:id', component: UserEditComponent },
    { path: 'home', component: HomeComponent },
    { path: 'panel', component: PanelListComponent },
    { path: 'panel/create', component: PanelEditComponent },
    { path: 'panel/:id', component: PanelEditComponent },
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);