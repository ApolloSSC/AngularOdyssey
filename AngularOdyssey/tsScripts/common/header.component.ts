import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { GlobalVariables } from '../common/global';

@Component({
    selector: 'odyssey-header',
    template: require('./header.component.html')
})

export class HeaderComponent implements OnInit {

    constructor(public globals: GlobalVariables) {
    }

    user: User;

    ngOnInit() {
        this.user = this.globals.getCurrentUser();
    }
}