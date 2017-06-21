// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Panel } from '../model/panel.model';
import { GenericApiService } from '../common/genericApi.service';
import { SharedService } from '../common/shared.service';

// Decorator to tell Angular that this class can be injected as a service to another class
@Injectable()
export class PanelService extends GenericApiService {

    constructor(http: Http, sharedService: SharedService) {
        super(http, sharedService);
        this.controllerName = 'panels';
    }

    createCard(obj: any) {
        this.sharedService.startLoading();
        var controllerName = 'cards';
        const endPoint = '/';

        return this.http
            .post(this.apiUrl + controllerName + endPoint, obj)
            .map((res: Response) => this.manageSuccess(res, this.MSG_CREATE_SUCCESS))
            .catch((error: any) => this.manageError(error));
    }

}