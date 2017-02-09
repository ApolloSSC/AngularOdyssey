// Imports
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SharedService } from './shared.service';
import { GridDataResult } from '../model/gridDataResult.model';

// Decorator to tell Angular that this class can be injected as a service to another class
export class GenericApiService {

    protected MSG_CREATE_SUCCESS = "Enregistrement effectué";
    protected MSG_UPDATE_SUCCESS = "Enregistrement effectué";
    protected MSG_DELETE_SUCCESS = "Suppression effectuée";

    // Class constructor with Jsonp injected
    constructor(private http: Http, private sharedService: SharedService) {
    }

    // Base URL for Petfinder API
    protected fichesUrl = "http://" + window.location.host + "/api/";
    protected controllerName = "";

    get(): Observable<any[]> {
        this.sharedService.startLoading();
        // Return response
        return this.http
            .get(this.fichesUrl + this.controllerName)
            .map((res: Response) => this.manageSuccess(res))
            .catch((error: any) => this.manageError(error));
    }

    // get a pet based on their id
    getById(id: string): Observable<any> {

        // End point for list of pets:
        const endPoint = '/' + id;

        // Return response
        return this.http
            .get(this.fichesUrl + this.controllerName + endPoint)
            .map((res: Response) => this.manageSuccess(res))
            .catch((error: any) => this.manageError(error));
    }

    getForGrid(skip = 0, take = 10, sort = "", searchText?: string): Observable<GridDataResult> {
        this.sharedService.startLoading();
        const endPoint = '/getWithParams';
        let queryStr = `skip=` + skip + `&take=` + take + `&sort=` + sort + `&$count=true`;
        if (searchText) {
            queryStr += '&search=' + searchText;
        }
        // Return response
        return this.http
            .get(this.fichesUrl + this.controllerName + endPoint + '?' + queryStr)
            .map((res: Response) => this.manageSuccess(res))
            .catch((error: any) => this.manageError(error));
    }

    downloadCsv(): Observable<string> {
        this.sharedService.startLoading();
        const endPoint = '/getCsv';

        // Return response
        return this.http
            .get(this.fichesUrl + this.controllerName + endPoint)
            .map((res: Response) => this.manageSuccess(res))
            .catch((error: any) => this.manageError(error));
    }

    update(id: any, obj: any) {
        this.sharedService.startLoading();
        const endPoint = '/' + id;

        return this.http
            .put(this.fichesUrl + this.controllerName + endPoint, obj)
            .map((res: Response) => this.manageSuccess(res, this.MSG_UPDATE_SUCCESS))
            .catch((error: any) => this.manageError(error));
    }

    create(obj: any) {
        this.sharedService.startLoading();
        const endPoint = '/';

        return this.http
            .post(this.fichesUrl + this.controllerName + endPoint, obj)
            .map((res: Response) => this.manageSuccess(res, this.MSG_CREATE_SUCCESS))
            .catch((error: any) => this.manageError(error));
    }

    delete(id: any) {
        this.sharedService.startLoading();
        const endPoint = '/' + id;

        return this.http
            .delete(this.fichesUrl + this.controllerName + endPoint)
            .map((res: Response) => this.manageSuccess(res, this.MSG_DELETE_SUCCESS))
            .catch((error: any) => this.manageError(error));
    }

    manageError(error: any) {
        this.sharedService.endLoading();
        this.sharedService.errorToast('Erreur Serveur');
        return Observable.throw((error.json ? error.json().error : error) || 'Server error');
    }
    manageSuccess(res: Response, toastMsg?: string) {
        this.sharedService.endLoading();
        if (toastMsg) {
            this.sharedService.successToast(toastMsg);
        }
        return res.json();
    }
}