import { Directive, Input, Output, EventEmitter, HostListener, ViewContainerRef, ElementRef, ReflectiveInjector, ComponentFactoryResolver, Inject, Renderer } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { ConfirmationPopoverWindow } from './confirmationPopoverWindow.component';
import { ConfirmationPopoverOptions, ConfirmationPopoverWindowOptions } from './confirmationPopoverOptions.provider';
import { Positioning } from 'positioning';
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
export var ConfirmationPopover = (function () {
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
        this.isOpenChange = new EventEmitter(true);
        /**
         * An expression that is called when the confirm button is clicked.
         */
        this.confirm = new EventEmitter();
        /**
         * An expression that is called when the cancel button is clicked.
         */
        this.cancel = new EventEmitter();
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
            var options_1 = new ConfirmationPopoverWindowOptions();
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
            var componentFactory = this.cfr.resolveComponentFactory(ConfirmationPopoverWindow);
            var binding = ReflectiveInjector.resolve([{
                    provide: ConfirmationPopoverWindowOptions,
                    useValue: options_1
                }]);
            var contextInjector = this.viewContainerRef.parentInjector;
            var childInjector = ReflectiveInjector.fromResolvedProviders(binding, contextInjector);
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
    ConfirmationPopover.decorators = [
        { type: Directive, args: [{
                    selector: '[mwlConfirmationPopover]'
                },] },
    ];
    /** @nocollapse */
    ConfirmationPopover.ctorParameters = function () { return [
        { type: ViewContainerRef, },
        { type: ElementRef, },
        { type: ConfirmationPopoverOptions, },
        { type: ComponentFactoryResolver, },
        { type: Positioning, },
        { type: Renderer, },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
    ]; };
    ConfirmationPopover.propDecorators = {
        'title': [{ type: Input },],
        'message': [{ type: Input },],
        'confirmText': [{ type: Input },],
        'cancelText': [{ type: Input },],
        'placement': [{ type: Input },],
        'confirmButtonType': [{ type: Input },],
        'cancelButtonType': [{ type: Input },],
        'focusButton': [{ type: Input },],
        'hideConfirmButton': [{ type: Input },],
        'hideCancelButton': [{ type: Input },],
        'isDisabled': [{ type: Input },],
        'isOpen': [{ type: Input },],
        'customTemplate': [{ type: Input },],
        'isOpenChange': [{ type: Output },],
        'confirm': [{ type: Output },],
        'cancel': [{ type: Output },],
        'popoverClass': [{ type: Input },],
        'appendToBody': [{ type: Input },],
        'onDocumentClick': [{ type: HostListener, args: ['document:click', ['$event.target'],] }, { type: HostListener, args: ['document:touchend', ['$event.target'],] },],
        'togglePopover': [{ type: HostListener, args: ['click',] },],
        'onResize': [{ type: HostListener, args: ['window:resize',] },],
    };
    return ConfirmationPopover;
}());
//# sourceMappingURL=confirmationPopover.directive.js.map