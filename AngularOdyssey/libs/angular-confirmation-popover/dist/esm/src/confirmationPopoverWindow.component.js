import { Component } from '@angular/core';
import { ConfirmationPopoverWindowOptions } from './confirmationPopoverOptions.provider';
/**
 * @private
 */
export var ConfirmationPopoverWindow = (function () {
    function ConfirmationPopoverWindow(options) {
        this.options = options;
    }
    ConfirmationPopoverWindow.prototype.ngAfterViewInit = function () {
        this.options.onAfterViewInit();
    };
    ConfirmationPopoverWindow.decorators = [
        { type: Component, args: [{
                    styles: ["\n    .popover {\n      display: block;\n    }\n  "],
                    template: "\n    <template #defaultTemplate let-options=\"options\">\n      <div [class]=\"'popover ' + options.placement + ' popover-' + options.placement + ' ' + options.popoverClass\">\n        <div class=\"popover-arrow arrow\"></div>\n        <h3 class=\"popover-title\" [innerHTML]=\"options.title\"></h3>\n        <div class=\"popover-content\">\n          <p [innerHTML]=\"options.message\"></p>\n          <div class=\"row\">\n            <div\n              class=\"col-xs-6 col-6\"\n              [ngClass]=\"{'col-xs-offset-3 col-offset-3': options.hideCancelButton}\"\n              *ngIf=\"!options.hideConfirmButton\">\n              <button\n                [mwlFocus]=\"options.focusButton === 'confirm'\"\n                [class]=\"'btn btn-block btn-' + options.confirmButtonType\"\n                (click)=\"options.onConfirm()\"\n                [innerHtml]=\"options.confirmText\">\n              </button>\n            </div>\n            <div\n              class=\"col-xs-6 col-6\"\n              [ngClass]=\"{'col-xs-offset-3 col-offset-3': options.hideConfirmButton}\"\n              *ngIf=\"!options.hideCancelButton\">\n              <button\n                [mwlFocus]=\"options.focusButton === 'cancel'\"\n                [class]=\"'btn btn-block btn-' + options.cancelButtonType\"\n                (click)=\"options.onCancel()\"\n                [innerHtml]=\"options.cancelText\">\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </template>\n    <template\n      [ngTemplateOutlet]=\"options.customTemplate || defaultTemplate\"\n      [ngOutletContext]=\"{options: options}\">\n    </template>\n  "
                },] },
    ];
    /** @nocollapse */
    ConfirmationPopoverWindow.ctorParameters = function () { return [
        { type: ConfirmationPopoverWindowOptions, },
    ]; };
    return ConfirmationPopoverWindow;
}());
//# sourceMappingURL=confirmationPopoverWindow.component.js.map