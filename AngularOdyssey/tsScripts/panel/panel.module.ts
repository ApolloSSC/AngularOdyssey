import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { PanelListComponent } from './panel.list.component';
import { PanelEditComponent } from './panel.edit.component';
import { PanelService } from './panel.service';
import { GlobalVariables } from '../common/global';
import { Routes, RouterModule } from '@angular/router';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ng2-bootstrap';
import { GridStackDirective } from './gridstack/gridstack.directive';
import { GridStackItemDirective } from './gridstack/gridstack.item.directive';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        RouterModule,
        Ng2TableModule,
        PaginationModule.forRoot()
    ],
    declarations: [
        PanelListComponent,
        PanelEditComponent,
        GridStackDirective,
        GridStackItemDirective
    ],
    providers: [
        PanelService,
        GlobalVariables
    ]
})
export class PanelModule { }