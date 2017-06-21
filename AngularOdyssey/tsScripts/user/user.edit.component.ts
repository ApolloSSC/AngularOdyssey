import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
import { User } from '../model/user.model';

@Component({
    template: require('./user.edit.component.html')
})

export class UserEditComponent implements OnInit {
    private titreCreation = "Création d'un utilisateur";
    private titreModification = "Modification d'un utilisateur";
    user: User;
    titre: string;
    Password: string;
    private sub: any;
    private isNew: boolean;

    constructor(private userService: UserService, private route: ActivatedRoute) {
        this.Password = "";
        this.user = new User();
    }
    ngOnInit() {
        this.isNew = true;
        this.sub = this.route.params.subscribe(params => {

            let id = params['id'];
            if (id) {
                this.titre = this.titreModification;

                // Retrieve Pet with Id route param
                this.userService.getById(id)
                    .subscribe(
                    user => {
                        this.user = user;
                        this.isNew = false;
                    }, //Bind to view
                    err => {
                        // Log errors if any
                        console.log(err);
                    });
            }
            else {
                this.titre = this.titreCreation;
            }
        });
    }
    onSubmit(): void {
        if (this.Password) {
            this.user.PasswordHash = this.Password;
        }
        if (this.isNew) {
            this.userService.create(this.user).subscribe(
                res => { this.user = res; this.isNew = false; this.titre = this.titreModification; },
                err => {
                    console.log(err);
                }
            );
        }
        else {
            this.userService.update(this.user.Id, this.user).subscribe(
                res => { },
                err => {
                    console.log(err);
                }
            );
        }

    }
}