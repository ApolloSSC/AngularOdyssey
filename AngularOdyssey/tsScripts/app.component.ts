import { Component, ViewContainerRef } from '@angular/core';
import { SharedService } from './common/shared.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    moduleId: module.id,
    selector: 'odyssey-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor(private sharedService: SharedService, public toastr: ToastsManager, vRef: ViewContainerRef) {
        //Mettre le ViewContainerRef par défaut au toastr pour pouvoir l'utiliser depuis un service
        this.toastr.setRootViewContainerRef(vRef);
    }
}