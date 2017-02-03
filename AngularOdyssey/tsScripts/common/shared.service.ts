import { Injectable } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class SharedService {
    //Loading screen
    public loading: boolean;

    //Data grid
    public pageSize: number = 10;

    constructor(public toastr: ToastsManager) {
        this.loading = false;
    }

    startLoading() {
        this.loading = true;
    }
    endLoading() {
        this.loading = false;
    }

    //Toastr
    successToast(txt: string, title?: string) {
        this.toastr.success(txt, title);
    }
    errorToast(txt: string, title?: string) {
        this.toastr.error(txt, title);
    }
    warningToast(txt: string, title?: string) {
        this.toastr.warning(txt, title);
    }
    infoToast(txt: string, title?: string) {
        this.toastr.info(txt, title);
    }
    customToast(html: string) {
        this.toastr.custom(html, null, { enabltHTML: true });
    }
}