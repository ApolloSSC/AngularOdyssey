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
let GridStackDirective = class GridStackDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        renderer.setElementAttribute(el.nativeElement, "class", "grid-stack");
    }
    ngOnInit() {
        let renderer = this.renderer;
        let nativeElement = this.el.nativeElement;
        let animate = this.animate ? "yes" : "no";
        renderer.setElementAttribute(nativeElement, "data-gs-width", String(this.w));
        if (animate == "yes") {
            renderer.setElementAttribute(nativeElement, "data-gs-animate", animate);
        }
        let options = {
            cellHeight: 80,
            verticalMargin: 10
        };
        // TODO: listen to an event here instead of just waiting for the time to expire
        setTimeout(function () {
            $(nativeElement).gridstack(options);
        }, 30);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], GridStackDirective.prototype, "w", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], GridStackDirective.prototype, "animate", void 0);
GridStackDirective = __decorate([
    core_1.Directive({
        selector: '[gridStack]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.Renderer])
], GridStackDirective);
exports.GridStackDirective = GridStackDirective;
