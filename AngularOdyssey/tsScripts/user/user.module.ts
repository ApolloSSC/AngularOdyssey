import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { UserEditComponent } from './user.edit.component';
import { UserListComponent } from './user.list.component';
import { UserService } from './user.service';
import { GlobalVariables } from '../common/global';
import { Routes, RouterModule } from '@angular/router';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ng2-bootstrap';
import { saveAs } from 'file-saver';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        RouterModule,
        Ng2TableModule ,
        PaginationModule.forRoot()
    ],
    declarations: [
        UserEditComponent,
        UserListComponent,
    ],
    providers: [
        UserService,
        GlobalVariables
    ]
})
export class UserModule { }