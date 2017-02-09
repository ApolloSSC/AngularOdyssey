"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const user_service_1 = require("./user.service");
const user_model_1 = require("../model/user.model");
let UserEditComponent = class UserEditComponent {
    constructor(userService, route) {
        this.userService = userService;
        this.route = route;
        this.titreCreation = "Création d'un utilisateur";
        this.titreModification = "Modification d'un utilisateur";
        this.Password = "";
        this.user = new user_model_1.User();
    }
    ngOnInit() {
        this.isNew = true;
        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            if (id) {
                this.titre = this.titreModification;
                this.isNew = false;
                // Retrieve Pet with Id route param
                this.userService.getById(id)
                    .subscribe(user => { this.user = user; }, //Bind to view
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
    onSubmit() {
        if (this.Password) {
            this.user.PasswordHash = this.Password;
        }
        if (this.isNew) {
            this.userService.create(this.user).subscribe(res => { this.user = res; this.isNew = false; this.titre = this.titreModification; }, err => {
                console.log(err);
            });
        }
        else {
            this.userService.update(this.user.Id, this.user).subscribe(res => { }, err => {
                console.log(err);
            });
        }
    }
};
UserEditComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'user.edit.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.ActivatedRoute])
], UserEditComponent);
exports.UserEditComponent = UserEditComponent;
//# sourceMappingURL=user.edit.component.js.map