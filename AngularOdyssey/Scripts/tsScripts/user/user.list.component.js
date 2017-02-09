"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const user_service_1 = require("./user.service");
const shared_service_1 = require("../common/shared.service");
const router_1 = require("@angular/router");
const file_saver_1 = require("file-saver");
let UserListComponent = class UserListComponent {
    constructor(userService, sharedService, router) {
        this.userService = userService;
        this.sharedService = sharedService;
        this.router = router;
        this.title = 'Popover title';
        this.message = 'Popover description';
        this.confirmClicked = false;
        this.cancelClicked = false;
        this.page = 1;
        this.itemsPerPage = 10;
        this.numPages = 1;
        this.length = 0;
        this.noResult = false;
        this.rows = [];
        this.columns = [
            { title: 'ID', name: 'Id' },
            { title: 'Nom d\'utilisateur', name: 'UserName' },
            { title: 'Email', name: 'Email' },
            { title: 'Téléphone', name: 'PhoneNumber' },
        ];
        this.config = {
            sorting: { columns: this.columns },
            filtering: { filterString: '' },
            className: ['table-condensed', 'table-bordered', 'table-clickable']
        };
        //this.loadItems();
    }
    ngAfterViewInit() {
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
    loadItems() {
        this.userService.getForGrid((this.page - 1) * this.itemsPerPage, this.itemsPerPage, this.getSorting(), this.config.filtering.filterString)
            .subscribe(users => {
            if (users.total <= (this.page - 1) * this.itemsPerPage) {
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
    exportCsv() {
        this.userService.downloadCsv()
            .subscribe(data => {
            var blob = new Blob([data], { type: 'text/csv' });
            file_saver_1.saveAs(blob, "export.csv");
        }, //Bind to view
        err => {
            //Log errors if any
            console.log(err);
        });
    }
    getSorting() {
        let sorting = "";
        for (let column of this.columns) {
            if (column.sort == "asc" || column.sort == "desc")
                sorting = column.name + column.sort;
        }
        return sorting;
    }
    onChangeTable(conf, page = { page: this.page, itemsPerPage: this.itemsPerPage }) {
        if (conf.sorting) {
            Object.assign(this.config.sorting, conf.sorting);
        }
        this.page = page.page;
        this.loadItems();
    }
    onCellClick(data) {
        console.log(data);
        this.router.navigate(['/user', data.row.Id]);
    }
};
UserListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'user.list.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, shared_service_1.SharedService, router_1.Router])
], UserListComponent);
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user.list.component.js.map