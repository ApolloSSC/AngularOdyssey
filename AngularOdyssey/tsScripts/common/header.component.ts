import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { GlobalVariables } from '../common/global';

@Component({
    moduleId: module.id,
    selector: 'odyssey-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {

    constructor(public globals: GlobalVariables) {
    }

    user: User;

    ngOnInit() {
        this.user = this.globals.getCurrentUser();
    }
}