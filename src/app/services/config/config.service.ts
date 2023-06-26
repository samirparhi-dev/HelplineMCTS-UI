
import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

const commonIP = 'http://10.208.122.38:8080/';
const mctsIP = 'http://10.208.122.38:8080/';
const mmuIP = 'http://10.208.122.38:8080/';
const tmIP = 'http://10.208.122.38:8080/';
const adminIP = 'http://10.208.122.38:8080/';
const telephonyServerURL = 'http://10.208.122.99/';

@Injectable()
export class ConfigService {

    private _commonBaseURL: String = `${commonIP}commonapi-v1.0/`;
    private _openCommonBaseURL: String = `${commonIP}commonapi-v1.0/`;
    private _mctsBaseURL: String = `${mctsIP}mctsapi-v1.0/`;
    private _mmuBaseURL: String = `${mmuIP}mmuapi-v1.0/`;
    private _tmBaseURL: String = `${tmIP}tmapi-v1.0/`;
    private _adminBaseURL: String = `${adminIP}adminapi-v1.0/`;
    private _telephonyServerURL: String = `${telephonyServerURL}`;
    // private _mctsBaseURL: String = `http://localhost:8080/`;
    // private _openCommonBaseURL: String = `http://localhost:1041/`;
    // private _commonBaseURL: String = `http://localhost:1041/`;


    // private _commonBaseURL: String = "http://10.208.122.38:8080/apiman-gateway/IEMR/Common/1.0/";
    // private _openCommonBaseURL: String = "http://${IP}/apiman-gateway/IEMR/Common/open/";
    // private _commonBaseURL: String = "http://l-185014957.wipro.com:1040/commonapi-v1.0/";
    // private _mctsBaseURL: String = "http://${IP}/apiman-gateway/IEMR/MCTS/1.0/";
    // private _mctsBaseURL: String = "http://l-185014957.wipro.com:8080/";
    // private _mctsBaseURL: String = "http://l-185014957.wipro.com:1040/mctsapi-v1.0/";

    //NOTE: Socket URL is mentioned in Socket Service has  as it is giving cyclic dependency error if given here

    // private _commonBaseURL: String = "http://14.142.214.242:8080/commonapi-v1.0/";
    // private _mctsBaseURL: String = "http://14.142.214.242:8080/mctsapi-v1.0/";
    // private _helpline1097BaseURL: String = "http://14.142.214.242:8080/1097api-v1.0/";
    // private _adminBaseURL: String = "http://14.142.214.242:8080/adminapi-v1.0/";
    // private _telephonyServerURL: String = "http://14.142.214.245/";

    // private _commonBaseURL: String = "http://l-185014957.wipro.com:1040/commonapi-v1.0/";
    // private _mctsBaseURL: String = "http://l-185014957.wipro.com:1040/mctsapi-v1.0/";
    // private _helpline1097BaseURL: String = "http://l-185014957.wipro.com:1040/1097api-v1.0/";
    // private _adminBaseURL: String = "http://l-185014957.wipro.com:1040/adminapi-v1.0/";
    // private _telephonyServerURL: String = "http://10.208.122.99/";

    private _wrapUpTime: any = 120;

    getCommonBaseURL() {
        return this._commonBaseURL;
    }
    getOpenCommonBaseURL() {
        return this._openCommonBaseURL;
    }
    getMctsBaseURL() {
        return this._mctsBaseURL;
    }
    getAdminBaseURL() {
        return this._adminBaseURL;
    }
    getTelephonyServerURL() {
        return this._telephonyServerURL;
    }
    getMMUBaseURL() {
        return this._mmuBaseURL;
    }

    getTMBaseURL() {
        return this._tmBaseURL;
    }

    getWrapUpTime() {

        return this._wrapUpTime;
    }
};

