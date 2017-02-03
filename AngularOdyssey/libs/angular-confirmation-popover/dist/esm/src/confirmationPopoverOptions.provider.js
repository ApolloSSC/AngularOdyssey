var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Injectable } from '@angular/core';
export var ConfirmationPopoverOptions = (function () {
    function ConfirmationPopoverOptions() {
        this.confirmText = 'Confirm';
        this.cancelText = 'Cancel';
        this.confirmButtonType = 'success';
        this.cancelButtonType = 'default';
        this.placement = 'top';
        this.hideConfirmButton = false;
        this.hideCancelButton = false;
        this.popoverClass = '';
        this.appendToBody = false;
    }
    return ConfirmationPopoverOptions;
}());
/**
 * @private
 */
export var ConfirmationPopoverWindowOptions = (function (_super) {
    __extends(ConfirmationPopoverWindowOptions, _super);
    function ConfirmationPopoverWindowOptions() {
        _super.apply(this, arguments);
    }
    ConfirmationPopoverWindowOptions.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ConfirmationPopoverWindowOptions.ctorParameters = function () { return []; };
    return ConfirmationPopoverWindowOptions;
}(ConfirmationPopoverOptions));
//# sourceMappingURL=confirmationPopoverOptions.provider.js.map