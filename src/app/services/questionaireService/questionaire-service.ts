import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from '../config/config.service';
import { InterceptedHttp } from './../../http.interceptor';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { SecurityInterceptedHttp } from '../../http.securityinterceptor';

@Injectable()
export class QuestionaireService {

    getCallTypesURL = this.configService.getMctsBaseURL() + "callConfigurationController/get/ouboundcalltypes";
    putQuestionaireURL = this.configService.getMctsBaseURL() + "questionnaireController/put/outboundcall/questions";
    getQuestionaireURL = this.configService.getMctsBaseURL() + "questionnaireController/get/questionnaireList";
    getAgentQuestionaireURL = this.configService.getMctsBaseURL() + "questionnaireController/get/agentQuestionnaireList";
    editQuestionaireURL = this.configService.getMctsBaseURL() + "questionnaireController/edit/questionnaire";
    deleteQuestionaireURL = this.configService.getMctsBaseURL() + "questionnaireController/delete/question";
    deleteMultipleQuestionaireURL = this.configService.getMctsBaseURL() + "questionnaireController/delete/multipleQuestion";
    getVariablesURL = this.configService.getMctsBaseURL() + "mctsStatewiseFieldsController/get/variablenames";
    addDeriveQuestionURL = this.configService.getMctsBaseURL() + "questionnaireController/derived/addDeriveQuestion";

    constructor(private http: SecurityInterceptedHttp, private configService: ConfigService, private httpIntercept: InterceptedHttp) { };

    ngOnInit() {

    }

    getCallTypes(data) {
        return this.http.post(this.getCallTypesURL, data)
            .map((response: Response) => response.json()).catch((error) => Observable.throw(error.json()));
    }
    getQuestionaire(data) {
        return this.httpIntercept.post(this.getQuestionaireURL, data)
            .map((response: Response) => response.json()).catch((error) => Observable.throw(error.json()));
    }
    getAgentQuestionaire(data){
        return this.httpIntercept.post(this.getAgentQuestionaireURL, data)
        .map((response: Response) => response.json()).catch((error) => Observable.throw(error.json()));
    }
    putQuestionaire(data) {
        return this.httpIntercept.post(this.putQuestionaireURL, data)
            .map((response: Response) => response.json()).catch((error) => Observable.throw(error.json()));
    }
    editQuestionaire(data) {
        return this.httpIntercept.post(this.editQuestionaireURL, data)
            .map((response: Response) => response.json()).catch((error) => Observable.throw(error.json()));
    }
    deleteQuestionaire(data) {
        return this.httpIntercept.post(this.deleteQuestionaireURL, data)
            .map((response: Response) => response.json()).catch((error) => Observable.throw(error.json()));
    }
    deleteMultipleQuestionaire(data) {
        return this.httpIntercept.post(this.deleteMultipleQuestionaireURL, data)
            .map((response: Response) => response.json()).catch((error) => Observable.throw(error.json()));
    }
    getVariables(data){
        return this.http.post(this.getVariablesURL, data)
            .map((response: Response) => response.json()).catch((error) => Observable.throw(error.json()));
    }
    addDerivedQuestion(data){
        return this.http.post(this.addDeriveQuestionURL, data)
        .map((response: Response) => response.json()).catch((error) => Observable.throw(error.json()));
    }
}