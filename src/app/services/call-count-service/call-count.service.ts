import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from '../../services/config/config.service';
import { InterceptedHttp } from './../../http.interceptor';
import { SecurityInterceptedHttp } from '../../http.securityinterceptor';

@Injectable()
export class CallCountService {

  constructor(private _http: SecurityInterceptedHttp,
    private configService: ConfigService, private httpIntercept: InterceptedHttp) { }

  private getCallAnsweredCountURL = this.configService.getMctsBaseURL() + 'callCountController/getCallAnsweredCount';
  private getCallVerifiedCountURL = this.configService.getMctsBaseURL() + 'callCountController/getCallVerifiedCount';

  getCallAnsweredCount(data) {
    return this.httpIntercept.post(this.getCallAnsweredCountURL, data)
      .map((response: Response) => response.json()).catch((error) => Observable.throw(error.json()));
  }

  getCallVerifiedCount(data) {
    return this.httpIntercept.post(this.getCallVerifiedCountURL, data)
      .map((response: Response) => response.json()).catch((error) => Observable.throw(error.json()));
  }
}
