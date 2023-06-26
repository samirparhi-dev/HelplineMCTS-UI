import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from '../../services/config/config.service';
import { InterceptedHttp } from './../../http.interceptor';
import { SecurityInterceptedHttp } from '../../http.securityinterceptor';

@Injectable()
export class InteractionService {

  constructor(private _http: SecurityInterceptedHttp,
    private configService: ConfigService, private httpIntercept: InterceptedHttp) { }

  private getInteractionListURL = this.configService.getMctsBaseURL() + 'questionnaireController/get/interaction/list';
  private saveInteractionsURL = this.configService.getMctsBaseURL() + 'questionnaireController/put/interactions';
  private editInteractionURL = this.configService.getMctsBaseURL() + 'questionnaireController/edit/interaction';
  private deleteInteractionURL = this.configService.getMctsBaseURL() + 'questionnaireController/delete/interaction';

  getInteractionList(data) {
    return this.httpIntercept.post(this.getInteractionListURL, data)
      .map((response: Response) => response.json()).catch((error) => Observable.throw(error.json()));
  }

  saveInteractions(data) {
    return this._http.post(this.saveInteractionsURL, data)
      .map((response: Response) => response.json()).catch((error) => Observable.throw(error.json()));
  }

  editInteraction(data) {
    return this._http.post(this.editInteractionURL, data)
      .map((response: Response) => response.json()).catch((error) => Observable.throw(error.json()));
  }

  deleteInteraction(data) {
    return this._http.post(this.deleteInteractionURL, data)
      .map((response: Response) => response.json()).catch((error) => Observable.throw(error.json()));
  }
}
