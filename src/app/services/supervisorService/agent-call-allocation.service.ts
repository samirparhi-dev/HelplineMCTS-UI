import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConfigService } from '../config/config.service';
import { InterceptedHttp } from './../../http.interceptor';
import { SecurityInterceptedHttp } from '../../http.securityinterceptor';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ACAService {

    test = [];
    private _geturl: string = this.configService.getCommonBaseURL() + "user/getUsersByProviderID";
    private _allocateurl: string = this.configService.getMctsBaseURL() + "outbondcallcontroller/put/agentcallallocate";

    constructor(private _http: SecurityInterceptedHttp, private configService: ConfigService,private httpIntercept: InterceptedHttp) { }

    getAgents(data) {

        return this._http.post(this._geturl, data)
            .map((response: Response) => response.json()).catch((error) => Observable.throw(error.json()));

    }

    allocateCallsToAgenta(data: any) {
        console.log("inside the call config services");
        console.log(data);
        return this._http.post(this._allocateurl, data)
            .map((response: Response) => response.json()).catch((error) => Observable.throw(error.json()));

    }
}