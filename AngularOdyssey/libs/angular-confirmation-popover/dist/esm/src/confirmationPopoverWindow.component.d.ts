import { AfterViewInit } from '@angular/core';
import { ConfirmationPopoverWindowOptions } from './confirmationPopoverOptions.provider';
/**
 * @private
 */
export declare class ConfirmationPopoverWindow implements AfterViewInit {
    options: ConfirmationPopoverWindowOptions;
    constructor(options: ConfirmationPopoverWindowOptions);
    ngAfterViewInit(): void;
}
