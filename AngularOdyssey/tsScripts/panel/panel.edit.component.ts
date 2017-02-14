import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PanelService } from './panel.service';
import { Panel } from '../model/panel.model';
import { Card } from '../model/card.model';
import { RouterModule, Routes, Router, RouterLink } from '@angular/router';
declare var $: any; // JQuery
declare var _: any; // Lodash

@Component({
    moduleId: module.id,
    templateUrl: 'panel.edit.component.html'
})

export class PanelEditComponent implements OnInit {
    private titreCreation = "Création d'un panneau";
    private titreModification = "Modification d'un panneau";
    panel: Panel;
    titre: string;
    Password: string;
    private sub: any;
    private isNew: boolean;

    constructor(private panelService: PanelService, private route: ActivatedRoute, private router: Router) {
        this.panel = new Panel();
    }
    ngOnInit() {
        this.isNew = true;
        this.sub = this.route.params.subscribe(params => {

            let id = params['id'];
            if (id) {
                this.titre = this.titreModification;
                
                this.panelService.getById(id)
                    .subscribe(
                    panel => {
                        this.panel = panel;
                        if (!this.panel.Cards)
                            this.panel.Cards = new Array<Card>();
                        this.isNew = false;
                        var grid = $('.grid-stack').data('gridstack');
                        var i = 0;
                        _.each(this.panel.Cards, function (node) {
                            grid.addWidget($('<div><div class="grid-stack-item-content editable" spellcheck="false" contenteditable="true">'+panel.Cards[i].Content+'</div></div>'),
                                node.X, node.Y, node.Width, node.Height);
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
    onSubmit(): void {
        //Get cards from view
        var cards = _.map($('.grid-stack .grid-stack-item:visible'), function (el) {
            el = $(el);
            var node = el.data('_gridstack_node');
            console.log(el)
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
            this.panelService.create(this.panel).subscribe(
                res => { this.panel = res; this.isNew = false; this.titre = this.titreModification; },
                err => {
                    console.log(err);
                }
            );
        }
        else {
            this.panelService.update(this.panel.PanelId, this.panel).subscribe(
                res => { },
                err => {
                    console.log(err);
                }
            );
        }
    }
    
    addCard(): void {
        if (this.isNew) {
            this.panelService.create(this.panel).subscribe(
                res => {
                    this.panel = res; this.isNew = false; this.titre = this.titreModification;
                    this.sendNewCard()
                },
                err => {
                    console.log(err);
                }
            );
        }
        else
        {
            this.sendNewCard()
        }
    }

    private sendNewCard()
    {
        this.panelService.createCard(new Card(0, 0, 1, 1, this.panel.PanelId, "Nouvelle carte")).subscribe(
            res => {
                this.panel.Cards.push(res);
                var grid = $('.grid-stack').data('gridstack');
                grid.addWidget($('<div><div class="grid-stack-item-content editable"   spellcheck="false" contenteditable="true">Nouvelle carte</div></div>'), 0, 0, 1, 1);
            },
            err => {
                console.log(err);
            }
        );
    }

    deletePanel(): void {
        this.panelService.delete(this.panel.PanelId).subscribe(
            res => {
                this.router.navigate(['/panel']);
            },
            err => {
                console.log(err);
            }
        );
    }
}