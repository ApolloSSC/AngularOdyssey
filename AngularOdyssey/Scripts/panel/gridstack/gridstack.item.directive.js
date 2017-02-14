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
let GridStackItemDirective = class GridStackItemDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        renderer.setElementAttribute(el.nativeElement, "class", "grid-stack-item");
    }
    ngOnInit() {
        let renderer = this.renderer;
        let nativeElement = this.el.nativeElement;
        let cannotResize = this.canResize ? "yes" : "no";
        let elementText = '<div class="grid-stack-item-content">' + nativeElement.innerHTML + '</div>';
        // TODO: Find the Angular(tm) way to do this ...
        nativeElement.innerHTML = elementText;
        renderer.setElementAttribute(nativeElement, "data-gs-x", String(this.x));
        renderer.setElementAttribute(nativeElement, "data-gs-y", String(this.y));
        renderer.setElementAttribute(nativeElement, "data-gs-width", String(this.w));
        renderer.setElementAttribute(nativeElement, "data-gs-height", String(this.h));
        if (this.minWidth) {
            renderer.setElementAttribute(nativeElement, "data-gs-min-width", String(this.minWidth));
        }
        if (cannotResize == "yes") {
            renderer.setElementAttribute(nativeElement, "data-gs-no-resize", cannotResize);
        }
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], GridStackItemDirective.prototype, "x", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], GridStackItemDirective.prototype, "y", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], GridStackItemDirective.prototype, "w", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], GridStackItemDirective.prototype, "h", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], GridStackItemDirective.prototype, "minWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], GridStackItemDirective.prototype, "canResize", void 0);
GridStackItemDirective = __decorate([
    core_1.Directive({
        selector: '[gridStackItem]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.Renderer])
], GridStackItemDirective);
exports.GridStackItemDirective = GridStackItemDirective;
