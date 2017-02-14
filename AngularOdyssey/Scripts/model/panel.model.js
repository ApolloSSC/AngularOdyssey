"use strict";
class Panel {
    constructor() {
        this.CreatedOn = (new Date).toISOString();
        this.LastModified = this.CreatedOn;
        this.Cards = new Array();
    }
}
exports.Panel = Panel;
