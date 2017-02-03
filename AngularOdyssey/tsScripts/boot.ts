///<reference path="./../typings/globals/core-js/index.d.ts"/>
///<reference path="./../node_modules/@types/node/index.d.ts" />
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header.component';
import { SidebarComponent } from './common/sidebar.component';
import { GlobalVariables } from './common/global';
import { routing } from './app.routes';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { SharedService } from './common/shared.service';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        JsonpModule,
        UserModule,
        ToastModule.forRoot(),
        //ConfirmationPopoverModule.forRoot({
        //    confirmButtonType: 'danger' // set defaults here
        //})
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        SidebarComponent,
        HomeComponent
    ],
    providers: [
        GlobalVariables,
        SharedService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }