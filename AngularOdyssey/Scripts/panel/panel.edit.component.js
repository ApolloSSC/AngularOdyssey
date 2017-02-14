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
const router_1 = require("@angular/router");
const panel_service_1 = require("./panel.service");
const panel_model_1 = require("../model/panel.model");
const card_model_1 = require("../model/card.model");
const router_2 = require("@angular/router");
let PanelEditComponent = class PanelEditComponent {
    constructor(panelService, route, router) {
        this.panelService = panelService;
        this.route = route;
        this.router = router;
        this.titreCreation = "Création d'un panneau";
        this.titreModification = "Modification d'un panneau";
        this.panel = new panel_model_1.Panel();
    }
    ngOnInit() {
        this.isNew = true;
        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            if (id) {
                this.titre = this.titreModification;
                this.panelService.getById(id)
                    .subscribe(panel => {
                    this.panel = panel;
                    if (!this.panel.Cards)
                        this.panel.Cards = new Array();
                    this.isNew = false;
                    var grid = $('.grid-stack').data('gridstack');
                    var i = 0;
                    _.each(this.panel.Cards, function (node) {
                        grid.addWidget($('<div><div class="grid-stack-item-content editable" spellcheck="false" contenteditable="true">' + panel.Cards[i].Content + '</div></div>'), node.X, node.Y, node.Width, node.Height);
                        console.log(node);
                        i++;
                    });
                }, //Bind to view
                err => {
                    // Log errors if any
                    console.log(err);
                });
            }
            else {
                this.titre = this.titreCreation;
            }
        });
    }
    onSubmit() {
        //Get cards from view
        var cards = _.map($('.grid-stack .grid-stack-item:visible'), function (el) {
            el = $(el);
            var node = el.data('_gridstack_node');
            console.log(el);
            return {
                id: el.attr('data-custom-id'),
                x: node.x,
                y: node.y,
                width: node.width,
                height: node.height,
                content: el[0].firstChild.outerText
            };
        });
        //Link to controller
        for (var i = 0; i < cards.length; i++) {
            this.panel.Cards[i].X = cards[i].x;
            this.panel.Cards[i].Y = cards[i].y;
            this.panel.Cards[i].Width = cards[i].width;
            this.panel.Cards[i].Height = cards[i].height;
            this.panel.Cards[i].Content = cards[i].content;
        }
        //Update DB
        if (this.isNew) {
            this.panelService.create(this.panel).subscribe(res => { this.panel = res; this.isNew = false; this.titre = this.titreModification; }, err => {
                console.log(err);
            });
        }
        else {
            this.panelService.update(this.panel.PanelId, this.panel).subscribe(res => { }, err => {
                console.log(err);
            });
        }
    }
    addCard() {
        if (this.isNew) {
            this.panelService.create(this.panel).subscribe(res => {
                this.panel = res;
                this.isNew = false;
                this.titre = this.titreModification;
                this.sendNewCard();
            }, err => {
                console.log(err);
            });
        }
        else {
            this.sendNewCard();
        }
    }
    sendNewCard() {
        this.panelService.createCard(new card_model_1.Card(0, 0, 1, 1, this.panel.PanelId, "Nouvelle carte")).subscribe(res => {
            this.panel.Cards.push(res);
            var grid = $('.grid-stack').data('gridstack');
            grid.addWidget($('<div><div class="grid-stack-item-content editable"   spellcheck="false" contenteditable="true">Nouvelle carte</div></div>'), 0, 0, 1, 1);
        }, err => {
            console.log(err);
        });
    }
    deletePanel() {
        this.panelService.delete(this.panel.PanelId).subscribe(res => {
            this.router.navigate(['/panel']);
        }, err => {
            console.log(err);
        });
    }
};
PanelEditComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'panel.edit.component.html'
    }),
    __metadata("design:paramtypes", [panel_service_1.PanelService, router_1.ActivatedRoute, router_2.Router])
], PanelEditComponent);
exports.PanelEditComponent = PanelEditComponent;
