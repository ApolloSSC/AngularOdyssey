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
const panel_service_1 = require("./panel.service");
const shared_service_1 = require("../common/shared.service");
const router_1 = require("@angular/router");
let PanelListComponent = class PanelListComponent {
    constructor(panelService, sharedService, router) {
        this.panelService = panelService;
        this.sharedService = sharedService;
        this.router = router;
        this.confirmClicked = false;
        this.cancelClicked = false;
        this.page = 1;
        this.itemsPerPage = 10;
        this.numPages = 1;
        this.length = 0;
        this.noResult = false;
        this.rows = [];
        this.columns = [
            { title: 'ID', name: 'PanelId' },
            { title: 'Titre', name: 'Title' },
            { title: 'Cartes', name: 'Cards.length' },
            { title: 'Créé le', name: 'CreatedOn' },
            { title: 'Modifié le', name: 'LastModified' },
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
    loadItems() {
        this.panelService.getForGrid((this.page - 1) * this.itemsPerPage, this.itemsPerPage, this.getSorting(), this.config.filtering.filterString)
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
        this.router.navigate(['/panel', data.row.PanelId]);
    }
};
PanelListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'panel.list.component.html'
    }),
    __metadata("design:paramtypes", [panel_service_1.PanelService, shared_service_1.SharedService, router_1.Router])
], PanelListComponent);
exports.PanelListComponent = PanelListComponent;
