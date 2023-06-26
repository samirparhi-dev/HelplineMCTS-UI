import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConfigService } from '../config/config.service';
import { InterceptedHttp } from './../../http.interceptor';
import { SecurityInterceptedHttp } from '../../http.securityinterceptor';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CallAllocationService {

    test = [];
    selectedCallConfig: any;
    selectedCallConfigName: any;
    private _geturl: string = this.configService.getMctsBaseURL() + "callConfigurationController/put/confignumbers";
    private _configurl: string = this.configService.getMctsBaseURL() + "callConfigurationController/put/configuration";
    private getConfigListURL = this.configService.getMctsBaseURL() + "callConfigurationController/get/configuration/list";
    private updateConfigURL = this.configService.getMctsBaseURL() + "callConfigurationController/put/configuration/update";
    private saveDialPreferenceURL = this.configService.getCommonBaseURL() + "call/isAutoPreviewDialing";
    private deleteConfigURL = this.configService.getMctsBaseURL() + "callConfigurationController/delete/configuration";    
    private getConfigListURLForReport = this.configService.getMctsBaseURL() + "callConfigurationController/get/configuration/listForReport";
    constructor(private _http: SecurityInterceptedHttp, private configService: ConfigService, private httpIntercept: InterceptedHttp) { }

    getProviders(data: any) {

        return this._http.post(this._geturl, data)
            .map((response: Response) => response.json()).catch((error) => Observable.throw(error.json()));;

    }

    createCallConfig(data: any) {
        console.log("inside the allocation services");
        console.log(data);
        return this.httpIntercept.post(this._configurl, data)
            .map((response: Response) => response.json()).catch((error) => Observable.throw(error.json()));;
    }

    getConfigList(data) {
        return this.httpIntercept.post(this.getConfigListURL, data)
            .map((response: Response) => response.json()).catch((error) => Observable.throw(error.json()));;
    }
    updateConfig(data) {
        return this.httpIntercept.post(this.updateConfigURL, data)
            .map((response: Response) => response.json()).catch((error) => Observable.throw(error.json()));;
    }

    deleteConfig(data) {
        return this.httpIntercept.post(this.deleteConfigURL, data)
            .map((response: Response) => response.json()).catch((error) => Observable.throw(error.json()));
    }

    saveDialPreference(data) {
        return this.httpIntercept.post(this.saveDialPreferenceURL, data)
            .map((response: Response) => response.json()).catch((error) => Observable.throw(error.json()));;
    }
    getConfigListForReport(data) {
        return this.httpIntercept.post(this.getConfigListURLForReport, data)
            .map((response: Response) => response.json()).catch((error) => Observable.throw(error.json()));;
    }
}