import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from '../config/config.service';
import { InterceptedHttp } from './../../http.interceptor';
import { SecurityInterceptedHttp } from '../../http.securityinterceptor';

@Injectable()
export class GenerateBeneficiaryID {

    private searchBeneficiary_url = this.configService.getMctsBaseURL() + 'mctsidentitycontroller/search/beneficiary';
    private createBeneficiaryID_url = this.configService.getMctsBaseURL() + 'mctsidentitycontroller/create/beneficiary';
    private createBeneficiaryID_ifRecordSelected_url = this.configService.getMctsBaseURL() + 'mctsdatatransactioncontroller/associate/beneficiaryID';

    private getServiceLines_new_url = this.configService.getAdminBaseURL() + 'm/role/serviceNew';

    private getProviderSpecificStates_url = this.configService.getAdminBaseURL() + 'm/role/stateNew';
    private getDistricts_url = this.configService.getCommonBaseURL() + 'location/districts/';
    private getGenders_url = this.configService.getCommonBaseURL() + 'beneficiary/getRegistrationData';
    private getServiceProviderID_url = this.configService.getAdminBaseURL() + 'getServiceProviderid';


    constructor(private _http: SecurityInterceptedHttp,
        private configService: ConfigService,
        private httpIntercept: InterceptedHttp) { }

    searchBeneficiary(data) {
        return this.httpIntercept.post(this.searchBeneficiary_url, data)
            .map((response: Response) => response.json()).catch((error) => Observable.throw(error.json()));
    }

    createBeneficiaryID(data) {
        return this.httpIntercept.post(this.createBeneficiaryID_url, data)
            .map((response: Response) => response).catch((error) => Observable.throw(error.json()));
    }

    createBeneficiaryID_ifRecordSelected(data) {
        return this.httpIntercept.post(this.createBeneficiaryID_ifRecordSelected_url, data)
            .map((response: Response) => response).catch((error) => Observable.throw(error.json()));
    }

    getServiceLine(userID) {
        return this.httpIntercept.post(this.getServiceLines_new_url, { 'userID': userID })
            .map((response: Response) => response.json()).catch((error) => Observable.throw(error.json()));
    }

    getStates(data) {
        return this.httpIntercept.post(this.getProviderSpecificStates_url, data)
            .map((response: Response) => response.json()).catch((error) => Observable.throw(error.json()));
    }

    getDistricts(stateID) {
        return this.httpIntercept.get(this.getDistricts_url + stateID)
            .map((response: Response) => response.json()).catch((error) => Observable.throw(error.json()));
    }

    getGenders() {
        return this.httpIntercept.post(this.getGenders_url, {})
            .map((response: Response) => response.json()).catch((error) => Observable.throw(error.json()));
    }


    getServiceProviderID(providerServiceMapID) {
        return this.httpIntercept.post(this.getServiceProviderID_url, { 'providerServiceMapID': providerServiceMapID })
            .map((response: Response) => response.json()).catch((error) => Observable.throw(error.json()));
    }

}

