import { Directive, ElementRef, Input, Renderer, OnInit } from '@angular/core';

@Directive({
    selector: '[gridStackItem]'
})

export class GridStackItemDirective {
    @Input() x: number;
    @Input() y: number;
    @Input() w: number;
    @Input() h: number;
    @Input() minWidth: number;
    @Input() canResize: boolean;

    constructor(
        private el: ElementRef,
        private renderer: Renderer
    ) {
        renderer.setElementAttribute(el.nativeElement, "class", "grid-stack-item");
    }

    ngOnInit(): void {
        let renderer = this.renderer;
        let nativeElement = this.el.nativeElement;
        let cannotResize: string = this.canResize ? "yes" : "no";
        let elementText: string = '<div class="grid-stack-item-content">' + nativeElement.innerHTML + '</div>';
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
}