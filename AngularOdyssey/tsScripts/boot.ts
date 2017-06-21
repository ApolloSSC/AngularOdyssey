///<reference path="./../node_modules/@types/core-js/index.d.ts"/>
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
import { PanelModule } from './panel/panel.module';
import { SharedService } from './common/shared.service';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';

export class CustomToastOptions extends ToastOptions {
    positionClass = "toast-bottom-right";
}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        JsonpModule,
        UserModule,
        PanelModule,
        ToastModule.forRoot(),
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        SidebarComponent,
        HomeComponent
    ],
    providers: [
        GlobalVariables,
        SharedService,
        { provide: ToastOptions, useClass: CustomToastOptions }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }