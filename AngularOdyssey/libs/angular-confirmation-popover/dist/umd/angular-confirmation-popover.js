(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"), require("@angular/platform-browser"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common", "@angular/platform-browser"], factory);
	else if(typeof exports === 'object')
		exports["angularConfirmationPopover"] = factory(require("@angular/core"), require("@angular/common"), require("@angular/platform-browser"));
	else
		root["angularConfirmationPopover"] = factory(root["ng"]["core"], root["ng"]["common"], root["ng"]["platformBrowser"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var ConfirmationPopoverOptions = (function () {
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
exports.ConfirmationPopoverOptions = ConfirmationPopoverOptions;
/**
 * @private
 */
var ConfirmationPopoverWindowOptions = (function (_super) {
    __extends(ConfirmationPopoverWindowOptions, _super);
    function ConfirmationPopoverWindowOptions() {
        _super.apply(this, arguments);
    }
    ConfirmationPopoverWindowOptions = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ConfirmationPopoverWindowOptions);
    return ConfirmationPopoverWindowOptions;
}(ConfirmationPopoverOptions));
exports.ConfirmationPopoverWindowOptions = ConfirmationPopoverWindowOptions;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var confirmationPopoverOptions_provider_1 = __webpack_require__(1);
/**
 * @private
 */
var ConfirmationPopoverWindow = (function () {
    function ConfirmationPopoverWindow(options) {
        this.options = options;
    }
    ConfirmationPopoverWindow.prototype.ngAfterViewInit = function () {
        this.options.onAfterViewInit();
    };
    ConfirmationPopoverWindow = __decorate([
        core_1.Component({
            styles: ["\n    .popover {\n      display: block;\n    }\n  "],
            template: "\n    <template #defaultTemplate let-options=\"options\">\n      <div [class]=\"'popover ' + options.placement + ' popover-' + options.placement + ' ' + options.popoverClass\">\n        <div class=\"popover-arrow arrow\"></div>\n        <h3 class=\"popover-title\" [innerHTML]=\"options.title\"></h3>\n        <div class=\"popover-content\">\n          <p [innerHTML]=\"options.message\"></p>\n          <div class=\"row\">\n            <div\n              class=\"col-xs-6 col-6\"\n              [ngClass]=\"{'col-xs-offset-3 col-offset-3': options.hideCancelButton}\"\n              *ngIf=\"!options.hideConfirmButton\">\n              <button\n                [mwlFocus]=\"options.focusButton === 'confirm'\"\n                [class]=\"'btn btn-block btn-' + options.confirmButtonType\"\n                (click)=\"options.onConfirm()\"\n                [innerHtml]=\"options.confirmText\">\n              </button>\n            </div>\n            <div\n              class=\"col-xs-6 col-6\"\n              [ngClass]=\"{'col-xs-offset-3 col-offset-3': options.hideConfirmButton}\"\n              *ngIf=\"!options.hideCancelButton\">\n              <button\n                [mwlFocus]=\"options.focusButton === 'cancel'\"\n                [class]=\"'btn btn-block btn-' + options.cancelButtonType\"\n                (click)=\"options.onCancel()\"\n                [innerHtml]=\"options.cancelText\">\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </template>\n    <template\n      [ngTemplateOutlet]=\"options.customTemplate || defaultTemplate\"\n      [ngOutletContext]=\"{options: options}\">\n    </template>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof confirmationPopoverOptions_provider_1.ConfirmationPopoverWindowOptions !== 'undefined' && confirmationPopoverOptions_provider_1.ConfirmationPopoverWindowOptions) === 'function' && _a) || Object])
    ], ConfirmationPopoverWindow);
    return ConfirmationPopoverWindow;
    var _a;
}());
exports.ConfirmationPopoverWindow = ConfirmationPopoverWindow;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(exports, "Positioning", function() { return Positioning; });
/* harmony export (immutable) */ exports["positionElements"] = positionElements;
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
var Positioning = (function () {
    function Positioning() {
    }
    Positioning.prototype.getStyle = function (element, prop) { return window.getComputedStyle(element)[prop]; };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var shiftWidth = {
            left: hostElPosition.left,
            center: hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2,
            right: hostElPosition.left + hostElPosition.width
        };
        var shiftHeight = {
            top: hostElPosition.top,
            center: hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2,
            bottom: hostElPosition.top + hostElPosition.height
        };
        var targetElBCR = targetElement.getBoundingClientRect();
        var placementPrimary = placement.split('-')[0] || 'top';
        var placementSecondary = placement.split('-')[1] || 'center';
        var targetElPosition = {
            height: targetElBCR.height || targetElement.offsetHeight,
            width: targetElBCR.width || targetElement.offsetWidth,
            top: 0,
            bottom: targetElBCR.height || targetElement.offsetHeight,
            left: 0,
            right: targetElBCR.width || targetElement.offsetWidth
        };
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top = hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.bottom += hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'bottom':
                targetElPosition.top = shiftHeight[placementPrimary];
                targetElPosition.bottom += shiftHeight[placementPrimary];
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'left':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = hostElPosition.left - targetElement.offsetWidth;
                targetElPosition.right += hostElPosition.left - targetElement.offsetWidth;
                break;
            case 'right':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = shiftWidth[placementPrimary];
                targetElPosition.right += shiftWidth[placementPrimary];
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    return Positioning;
}());
var positionService = new Positioning();
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = pos.top + "px";
    targetElement.style.left = pos.left + "px";
}
//# sourceMappingURL=positioning.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(7);
var positioning_1 = __webpack_require__(3);
var confirmationPopover_directive_1 = __webpack_require__(5);
var confirmationPopoverWindow_component_1 = __webpack_require__(2);
var focus_directive_1 = __webpack_require__(6);
var confirmationPopoverOptions_provider_1 = __webpack_require__(1);
exports.USER_OPTIONS = new core_1.OpaqueToken('confirmation popover user options');
function optionsFactory(userOptions) {
    var options = new confirmationPopoverOptions_provider_1.ConfirmationPopoverOptions();
    Object.assign(options, userOptions);
    return options;
}
exports.optionsFactory = optionsFactory;
var ConfirmationPopoverModule = (function () {
    function ConfirmationPopoverModule() {
    }
    ConfirmationPopoverModule.forRoot = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: ConfirmationPopoverModule,
            providers: [{
                    provide: exports.USER_OPTIONS,
                    useValue: options
                }, {
                    provide: confirmationPopoverOptions_provider_1.ConfirmationPopoverOptions,
                    useFactory: optionsFactory,
                    deps: [exports.USER_OPTIONS]
                }, positioning_1.Positioning]
        };
    };
    ConfirmationPopoverModule = __decorate([
        core_1.NgModule({
            declarations: [confirmationPopover_directive_1.ConfirmationPopover, confirmationPopoverWindow_component_1.ConfirmationPopoverWindow, focus_directive_1.Focus],
            imports: [common_1.CommonModule],
            exports: [confirmationPopover_directive_1.ConfirmationPopover, focus_directive_1.Focus],
            entryComponents: [confirmationPopoverWindow_component_1.ConfirmationPopoverWindow]
        }), 
        __metadata('design:paramtypes', [])
    ], ConfirmationPopoverModule);
    return ConfirmationPopoverModule;
}());
exports.ConfirmationPopoverModule = ConfirmationPopoverModule;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(8);
var confirmationPopoverWindow_component_1 = __webpack_require__(2);
var confirmationPopoverOptions_provider_1 = __webpack_require__(1);
var positioning_1 = __webpack_require__(3);
/**
 * All properties can be set on the directive as attributes like so (use `ConfirmationPopoverModule.forRoot()` to configure them globally):
 * ```
 * <button
 *  class="btn btn-default"
 *  mwlConfirmationPopover
 *  [title]="title"
 *  [message]="message"
 *  placement="left"
 *  (confirm)="confirmClicked = true"
 *  (cancel)="cancelClicked = true"
 *  [(isOpen)]="isOpen">
 *   Show confirm popover!
 * </button>
 * ```
 */
var ConfirmationPopover = (function () {
    /**
     * @private
     */
    function ConfirmationPopover(viewContainerRef, elm, defaultOptions, cfr, position, renderer, document //tslint:disable-line
        ) {
        this.viewContainerRef = viewContainerRef;
        this.elm = elm;
        this.defaultOptions = defaultOptions;
        this.cfr = cfr;
        this.position = position;
        this.renderer = renderer;
        this.document = document;
        /**
         * Whether to hide the confirm button. Default `false`.
         */
        this.hideConfirmButton = false;
        /**
         * Whether to hide the cancel button. Default `false`.
         */
        this.hideCancelButton = false;
        /**
         * Whether to disable showing the popover. Default `false`.
         */
        this.isDisabled = false;
        /**
         * Will open or show the popover when changed.
         * Can be sugared with `isOpenChange` to emulate 2-way binding like so `[(isOpen)]="isOpen"`
         */
        this.isOpen = false;
        /**
         * Will emit when the popover is opened or closed
         */
        this.isOpenChange = new core_1.EventEmitter(true);
        /**
         * An expression that is called when the confirm button is clicked.
         */
        this.confirm = new core_1.EventEmitter();
        /**
         * An expression that is called when the cancel button is clicked.
         */
        this.cancel = new core_1.EventEmitter();
        /**
         * Append the element to the document body rather than the trigger element
         */
        this.appendToBody = false;
        /**
         * @private
         */
        this.popover = null;
    }
    /**
     * @private
     */
    ConfirmationPopover.prototype.ngOnInit = function () {
        this.isOpenChange.emit(false);
    };
    /**
     * @private
     */
    ConfirmationPopover.prototype.ngOnChanges = function (changes) {
        if (changes.isOpen) {
            if (changes.isOpen.currentValue === true) {
                this.showPopover();
            }
            else {
                this.hidePopover();
            }
        }
    };
    /**
     * @private
     */
    ConfirmationPopover.prototype.ngOnDestroy = function () {
        this.hidePopover();
    };
    /**
     * @private
     */
    ConfirmationPopover.prototype.onConfirm = function () {
        this.confirm.emit(null);
        this.hidePopover();
    };
    /**
     * @private
     */
    ConfirmationPopover.prototype.onCancel = function () {
        this.cancel.emit(null);
        this.hidePopover();
    };
    /**
     * @private
     */
    ConfirmationPopover.prototype.onDocumentClick = function (target) {
        if (this.popover && !this.elm.nativeElement.contains(target) && !this.popover.location.nativeElement.contains(target)) {
            this.hidePopover();
        }
    };
    /**
     * @private
     */
    ConfirmationPopover.prototype.togglePopover = function () {
        if (!this.popover) {
            this.showPopover();
        }
        else {
            this.hidePopover();
        }
    };
    /**
     * @private
     */
    ConfirmationPopover.prototype.onResize = function () {
        this.positionPopover();
    };
    ConfirmationPopover.prototype.showPopover = function () {
        var _this = this;
        if (!this.popover && !this.isDisabled) {
            var options_1 = new confirmationPopoverOptions_provider_1.ConfirmationPopoverWindowOptions();
            Object.assign(options_1, this.defaultOptions, {
                title: this.title,
                message: this.message,
                onConfirm: function () {
                    _this.onConfirm();
                },
                onCancel: function () {
                    _this.onCancel();
                },
                onAfterViewInit: function () {
                    _this.positionPopover();
                }
            });
            var optionalParams = [
                'confirmText',
                'cancelText',
                'placement',
                'confirmButtonType',
                'cancelButtonType',
                'focusButton',
                'hideConfirmButton',
                'hideCancelButton',
                'popoverClass',
                'appendToBody',
                'customTemplate'
            ];
            optionalParams.forEach(function (param) {
                if (_this[param]) {
                    options_1[param] = _this[param];
                }
            });
            var componentFactory = this.cfr.resolveComponentFactory(confirmationPopoverWindow_component_1.ConfirmationPopoverWindow);
            var binding = core_1.ReflectiveInjector.resolve([{
                    provide: confirmationPopoverOptions_provider_1.ConfirmationPopoverWindowOptions,
                    useValue: options_1
                }]);
            var contextInjector = this.viewContainerRef.parentInjector;
            var childInjector = core_1.ReflectiveInjector.fromResolvedProviders(binding, contextInjector);
            this.popover = this.viewContainerRef.createComponent(componentFactory, this.viewContainerRef.length, childInjector);
            if (this.appendToBody) {
                this.renderer.invokeElementMethod(this.document.body, 'appendChild', [this.popover.location.nativeElement]);
            }
            this.isOpenChange.emit(true);
        }
    };
    ConfirmationPopover.prototype.positionPopover = function () {
        if (this.popover) {
            var popoverElement = this.popover.location.nativeElement.children[0];
            var popoverPosition = this.position.positionElements(this.elm.nativeElement, popoverElement, this.placement || this.defaultOptions.placement, this.appendToBody || this.defaultOptions.appendToBody);
            this.renderer.setElementStyle(popoverElement, 'top', popoverPosition.top + "px");
            this.renderer.setElementStyle(popoverElement, 'left', popoverPosition.left + "px");
        }
    };
    ConfirmationPopover.prototype.hidePopover = function () {
        if (this.popover) {
            this.popover.destroy();
            this.popover = null;
            this.isOpenChange.emit(false);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ConfirmationPopover.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ConfirmationPopover.prototype, "message", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ConfirmationPopover.prototype, "confirmText", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ConfirmationPopover.prototype, "cancelText", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ConfirmationPopover.prototype, "placement", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ConfirmationPopover.prototype, "confirmButtonType", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ConfirmationPopover.prototype, "cancelButtonType", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ConfirmationPopover.prototype, "focusButton", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ConfirmationPopover.prototype, "hideConfirmButton", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ConfirmationPopover.prototype, "hideCancelButton", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ConfirmationPopover.prototype, "isDisabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ConfirmationPopover.prototype, "isOpen", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', (typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object)
    ], ConfirmationPopover.prototype, "customTemplate", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', (typeof (_b = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _b) || Object)
    ], ConfirmationPopover.prototype, "isOpenChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', (typeof (_c = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _c) || Object)
    ], ConfirmationPopover.prototype, "confirm", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', (typeof (_d = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _d) || Object)
    ], ConfirmationPopover.prototype, "cancel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ConfirmationPopover.prototype, "popoverClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ConfirmationPopover.prototype, "appendToBody", void 0);
    __decorate([
        core_1.HostListener('document:click', ['$event.target']),
        core_1.HostListener('document:touchend', ['$event.target']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ConfirmationPopover.prototype, "onDocumentClick", null);
    __decorate([
        core_1.HostListener('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ConfirmationPopover.prototype, "togglePopover", null);
    __decorate([
        core_1.HostListener('window:resize'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ConfirmationPopover.prototype, "onResize", null);
    ConfirmationPopover = __decorate([
        core_1.Directive({
            selector: '[mwlConfirmationPopover]'
        }),
        __param(6, core_1.Inject(platform_browser_1.DOCUMENT)), 
        __metadata('design:paramtypes', [(typeof (_e = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _e) || Object, (typeof (_f = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _f) || Object, (typeof (_g = typeof confirmationPopoverOptions_provider_1.ConfirmationPopoverOptions !== 'undefined' && confirmationPopoverOptions_provider_1.ConfirmationPopoverOptions) === 'function' && _g) || Object, (typeof (_h = typeof core_1.ComponentFactoryResolver !== 'undefined' && core_1.ComponentFactoryResolver) === 'function' && _h) || Object, (typeof (_j = typeof positioning_1.Positioning !== 'undefined' && positioning_1.Positioning) === 'function' && _j) || Object, (typeof (_k = typeof core_1.Renderer !== 'undefined' && core_1.Renderer) === 'function' && _k) || Object, Object])
    ], ConfirmationPopover);
    return ConfirmationPopover;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());
exports.ConfirmationPopover = ConfirmationPopover;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
/**
 * A helper directive to focus buttons. You will only need this if using a custom template
 */
var Focus = (function () {
    function Focus(renderer, elm) {
        this.renderer = renderer;
        this.elm = elm;
    }
    Focus.prototype.ngOnChanges = function (changes) {
        if (changes.mwlFocus && this.mwlFocus === true) {
            this.renderer.invokeElementMethod(this.elm.nativeElement, 'focus', []);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Focus.prototype, "mwlFocus", void 0);
    Focus = __decorate([
        core_1.Directive({
            selector: '[mwlFocus]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.Renderer !== 'undefined' && core_1.Renderer) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _b) || Object])
    ], Focus);
    return Focus;
    var _a, _b;
}());
exports.Focus = Focus;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var confirmationPopover_module_1 = __webpack_require__(4);
exports.ConfirmationPopoverModule = confirmationPopover_module_1.ConfirmationPopoverModule;


/***/ })
/******/ ]);
});
//# sourceMappingURL=angular-confirmation-popover.js.map