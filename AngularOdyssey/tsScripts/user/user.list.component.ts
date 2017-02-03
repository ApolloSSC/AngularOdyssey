import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user.model';
import { SharedService } from '../common/shared.service';
import { RouterModule, Routes, Router, RouterLink } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

@Component({
    moduleId: module.id,
    templateUrl: 'user.list.component.html'
})

export class UserListComponent implements OnInit {
    private users: User[];

    public title: string = 'Popover title';
    public message: string = 'Popover description';
    public confirmClicked: boolean = false;
    public cancelClicked: boolean = false;

    constructor(private userService: UserService, private sharedService: SharedService, private router: Router) {
        this.loadItems();
    }

    ngOnInit() { }

    private loadItems(): void {

        this.userService.get()
            .subscribe(
            users => {
                this.users = users;
            }, //Bind to view
            err => {
                // Log errors if any
                console.log(err);
            });

    }
}