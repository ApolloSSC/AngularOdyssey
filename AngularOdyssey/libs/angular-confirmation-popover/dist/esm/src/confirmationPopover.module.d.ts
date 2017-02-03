import { ModuleWithProviders, OpaqueToken } from '@angular/core';
import { ConfirmationPopoverOptions, ConfirmationPopoverOptionsInterface } from './confirmationPopoverOptions.provider';
export declare const USER_OPTIONS: OpaqueToken;
export declare function optionsFactory(userOptions: ConfirmationPopoverOptions): ConfirmationPopoverOptions;
export declare class ConfirmationPopoverModule {
    static forRoot(options?: ConfirmationPopoverOptionsInterface): ModuleWithProviders;
}
