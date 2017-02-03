import { Directive, ElementRef, Input, Renderer } from '@angular/core';
/**
 * A helper directive to focus buttons. You will only need this if using a custom template
 */
export var Focus = (function () {
    function Focus(renderer, elm) {
        this.renderer = renderer;
        this.elm = elm;
    }
    Focus.prototype.ngOnChanges = function (changes) {
        if (changes.mwlFocus && this.mwlFocus === true) {
            this.renderer.invokeElementMethod(this.elm.nativeElement, 'focus', []);
        }
    };
    Focus.decorators = [
        { type: Directive, args: [{
                    selector: '[mwlFocus]'
                },] },
    ];
    /** @nocollapse */
    Focus.ctorParameters = function () { return [
        { type: Renderer, },
        { type: ElementRef, },
    ]; };
    Focus.propDecorators = {
        'mwlFocus': [{ type: Input },],
    };
    return Focus;
}());
//# sourceMappingURL=focus.directive.js.map