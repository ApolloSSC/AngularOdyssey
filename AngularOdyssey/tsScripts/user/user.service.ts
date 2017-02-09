// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { User } from '../model/user.model';
import { GenericApiService } from '../common/genericApi.service';
import { SharedService } from '../common/shared.service';

// Decorator to tell Angular that this class can be injected as a service to another class
@Injectable()
export class UserService extends GenericApiService {

    constructor(http: Http, sharedService: SharedService) {
        super(http, sharedService);
        this.controllerName = 'user';
    }
    
}