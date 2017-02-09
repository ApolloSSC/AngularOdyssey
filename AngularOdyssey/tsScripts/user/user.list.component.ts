import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user.model';
import { GridDataResult } from '../model/gridDataResult.model';
import { SharedService } from '../common/shared.service';
import { RouterModule, Routes, Router, RouterLink } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import * as FileSaver from 'file-saver';

@Component({
    moduleId: module.id,
    templateUrl: 'user.list.component.html'
})

export class UserListComponent{
    private users: User[];

    public title: string = 'Popover title';
    public message: string = 'Popover description';
    public confirmClicked: boolean = false;
    public cancelClicked: boolean = false;
    public page: number = 1;
    public itemsPerPage: number = 10;
    public numPages: number = 1;
    public length: number = 0;
    private noResult: boolean = false;

    constructor(private userService: UserService, private sharedService: SharedService, private router: Router) {
        //this.loadItems();
    }
    

    public ngAfterViewInit(): void {
        this.onChangeTable(this.config);
    }


    //private loadItems(): void {
    //    this.userService.get()
    //        .subscribe(
    //        users => {
    //            this.users = users;
    //            this.onChangeTable(this.config);
    //        }, //Bind to view
    //        err => {
    //            // Log errors if any
    //            console.log(err);
    //        });
    //}

    private loadItems(): void {
        this.userService.getForGrid((this.page - 1) * this.itemsPerPage, this.itemsPerPage, this.getSorting(), this.config.filtering.filterString)
            .subscribe(
            users => {
                if (users.total <= (this.page-1) * this.itemsPerPage) {
                    this.page = 1;
                    if (users.total == 0) {
                        this.rows = users.data;
                        this.noResult = true;
                    }
                    else {
                        this.noResult = false;
                    }
                }
                else {
                    this.noResult = false;
                    this.length = users.total;
                    this.rows = users.data;
                }
                
            }, //Bind to view
            err => {
                 //Log errors if any
                console.log(err);
            });

    }
    
    public exportCsv() {
        this.userService.downloadCsv()
            .subscribe(
            data => {
                interface HTMLAnchorElement {
                    download: string;
                }
                var blob = new Blob([data], { type: 'text/csv' });
                FileSaver(blob, "export.csv");
            }, //Bind to view
            err => {
                //Log errors if any
                console.log(err);
            });
    }
    private getSorting(): string {
        let sorting = "";
        for (let column of this.columns) {
            if (column.sort == "asc" || column.sort == "desc")
                sorting = column.name + column.sort;
        }
        return sorting;
    }

    public rows: Array<any> = [];
    public columns: Array<any> = [
        { title: 'ID', name: 'Id' },
        { title: 'Nom d\'utilisateur', name: 'UserName' },
        { title: 'Email', name: 'Email'},
        { title: 'Téléphone', name: 'PhoneNumber' },
    ];

    public config: any = {
        sorting: { columns: this.columns },
        filtering: { filterString: ''},
        className: ['table-condensed', 'table-bordered', 'table-clickable']
    }

    public onChangeTable(conf: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }): any {
        if (conf.sorting) {
            Object.assign(this.config.sorting, conf.sorting);
        }
        this.page = page.page;
        this.loadItems();
    }


    public onCellClick(data: any): any {
        console.log(data);
        this.router.navigate(['/user', data.row.Id]);
    }
}