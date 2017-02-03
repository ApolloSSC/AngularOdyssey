import { TemplateRef } from '@angular/core';
export interface ConfirmationPopoverOptionsInterface {
    /**
     * The popover title
     */
    title?: string;
    /**
     * The popover message
     */
    message?: string;
    /**
     * The popover confirmation button text
     */
    confirmText?: string;
    /**
     * The popover cancel button text
     */
    cancelText?: string;
    /**
     * The popover confirm button type e.g. `success`, `danger` etc
     */
    confirmButtonType?: string;
    /**
     * The popover cancel button type  e.g. `success`, `danger` etc
     */
    cancelButtonType?: string;
    /**
     * The popover placement. Can be `top`, `bottom`, `left`, `right`
     */
    placement?: string;
    /**
     * Which button to cancel. Can be either `confirm` or `cancel`
     */
    focusButton?: string;
    /**
     * Whether to hide the confirmation button
     */
    hideConfirmButton?: boolean;
    /**
     * Whether to hide the cancel button
     */
    hideCancelButton?: boolean;
    /**
     * A custom CSS class to be added to the popover
     */
    popoverClass?: string;
    /**
     * Whether to append the popover to the document body
     */
    appendToBody?: boolean;
}
export declare class ConfirmationPopoverOptions implements ConfirmationPopoverOptionsInterface {
    title: string;
    message: string;
    confirmText: string;
    cancelText: string;
    confirmButtonType: string;
    cancelButtonType: string;
    placement: string;
    focusButton: string;
    hideConfirmButton: boolean;
    hideCancelButton: boolean;
    popoverClass: string;
    appendToBody: boolean;
}
/**
 * @private
 */
export declare class ConfirmationPopoverWindowOptions extends ConfirmationPopoverOptions {
    onConfirm: Function;
    onCancel: Function;
    onAfterViewInit: Function;
    customTemplate: TemplateRef<any>;
}
