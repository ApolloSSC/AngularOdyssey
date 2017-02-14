import {Panel} from './panel.model'

export class Card {
    public CardId: number;
    public X: number;
    public Y: number;
    public Width: number;
    public Height: number;
    public Content: string;
    public PanelId: number;

    constructor(x: number, y: number, width: number, height: number, panelId: number, content?: string) {
        this.X = x;
        this.Y = y;
        this.Width = width;
        this.Height = height;
        this.PanelId = panelId;
        if (content)
            this.Content = content;
    }
}