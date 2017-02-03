"use strict";
const Rx_1 = require("rxjs/Rx");
// Decorator to tell Angular that this class can be injected as a service to another class
class GenericApiService {
    // Class constructor with Jsonp injected
    constructor(http, sharedService) {
        this.http = http;
        this.sharedService = sharedService;
        this.MSG_CREATE_SUCCESS = "Enregistrement effectué";
        this.MSG_UPDATE_SUCCESS = "Enregistrement effectué";
        this.MSG_DELETE_SUCCESS = "Suppression effectuée";
        // Base URL for Petfinder API
        this.fichesUrl = "http://" + window.location.host + "/api/";
        this.controllerName = "";
    }
    get() {
        // Return response
        return this.http
            .get(this.fichesUrl + this.controllerName)
            .map((res) => this.manageSuccess(res))
            .catch((error) => this.manageError(error));
    }
    // get a pet based on their id
    getById(id) {
        // End point for list of pets:
        const endPoint = '/' + id;
        // Return response
        return this.http
            .get(this.fichesUrl + this.controllerName + endPoint)
            .map((res) => this.manageSuccess(res))
            .catch((error) => this.manageError(error));
    }
    //getForGrid(params: any, searchText?: string): Observable<GridDataResult> {
    //    const endPoint = '/getWithParams';
    //    let queryStr = `${toODataString(params)}&$count=true`;
    //    if (searchText) {
    //        queryStr += '&search=' + searchText;
    //    }
    //    // Return response
    //    return this.http
    //        .get(this.fichesUrl + this.controllerName + endPoint + '?' + queryStr)
    //        .map((res: Response) => this.manageSuccess(res))
    //        .catch((error: any) => this.manageError(error));
    //}
    update(id, obj) {
        this.sharedService.startLoading();
        const endPoint = '/' + id;
        return this.http
            .put(this.fichesUrl + this.controllerName + endPoint, obj)
            .map((res) => this.manageSuccess(res, this.MSG_UPDATE_SUCCESS))
            .catch((error) => this.manageError(error));
    }
    create(obj) {
        this.sharedService.startLoading();
        const endPoint = '/';
        return this.http
            .post(this.fichesUrl + this.controllerName + endPoint, obj)
            .map((res) => this.manageSuccess(res, this.MSG_CREATE_SUCCESS))
            .catch((error) => this.manageError(error));
    }
    delete(id) {
        this.sharedService.startLoading();
        const endPoint = '/' + id;
        return this.http
            .delete(this.fichesUrl + this.controllerName + endPoint)
            .map((res) => this.manageSuccess(res, this.MSG_DELETE_SUCCESS))
            .catch((error) => this.manageError(error));
    }
    manageError(error) {
        this.sharedService.endLoading();
        this.sharedService.errorToast('Erreur Serveur');
        return Rx_1.Observable.throw((error.json ? error.json().error : error) || 'Server error');
    }
    manageSuccess(res, toastMsg) {
        this.sharedService.endLoading();
        if (toastMsg) {
            this.sharedService.successToast(toastMsg);
        }
        return res.json();
    }
}
exports.GenericApiService = GenericApiService;
