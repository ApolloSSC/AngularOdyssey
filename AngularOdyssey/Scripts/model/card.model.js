"use strict";
class Card {
    constructor(x, y, width, height, panelId, content) {
        this.X = x;
        this.Y = y;
        this.Width = width;
        this.Height = height;
        this.PanelId = panelId;
        if (content)
            this.Content = content;
    }
}
exports.Card = Card;
