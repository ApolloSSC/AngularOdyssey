"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var toast_container_component_1 = require('./toast-container.component');
var toast_manager_1 = require('./toast-manager');
var toast_options_1 = require('./toast-options');
var ToastModule = (function () {
    function ToastModule() {
    }
    ToastModule.forRoot = function (config) {
        return {
            ngModule: ToastModule,
            providers: config ? [
                { provide: toast_options_1.ToastOptions, useValue: config },
                toast_manager_1.ToastsManager,
            ] : [toast_manager_1.ToastsManager],
        };
    };
    ToastModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [toast_container_component_1.ToastContainer],
                    exports: [toast_container_component_1.ToastContainer],
                    entryComponents: [toast_container_component_1.ToastContainer]
                },] },
    ];
    /** @nocollapse */
    ToastModule.ctorParameters = function () { return []; };
    return ToastModule;
}());
exports.ToastModule = ToastModule;
//# sourceMappingURL=toast.module.js.map