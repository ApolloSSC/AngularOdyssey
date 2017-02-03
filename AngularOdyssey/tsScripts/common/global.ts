'use strict';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

declare var CurrentUser: User;

@Injectable()
export class GlobalVariables {
    getCurrentUser(): User {
        return CurrentUser;
    }
}