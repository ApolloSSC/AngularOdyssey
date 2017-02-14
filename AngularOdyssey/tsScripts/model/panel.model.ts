import {Card} from './card.model'

export class Panel {
    public PanelId: number;
    public Title: number;
    public CreatedOn: string;
    public LastModified: string;
    public Cards: Card[];

    constructor() {
        this.CreatedOn = (new Date).toISOString() ;
        this.LastModified = this.CreatedOn;
        this.Cards = new Array<Card>();
    }
}