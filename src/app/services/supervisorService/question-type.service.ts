import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { ConfigService } from '../config/config.service';
import 'rxjs/add/operator/map';
import { SecurityInterceptedHttp } from '../../http.securityinterceptor';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QuestionTypeService{

     private _geturl: string = this.configService.getCommonBaseURL() + "questionTypeController/get/questionTypeList";
     private _puturl: string = this.configService.getCommonBaseURL() + "questionTypeController/put/questionType";

      constructor(private _http:SecurityInterceptedHttp, private configService: ConfigService){}

    getQuestionTypeList(){
            
            return this._http.post(this._geturl, {})
            .map((response:Response)=> response.json())
            .catch((error) => Observable.throw(error.json()));
            
        }
        
    putQuestionType(data:any){
        return this._http.post(this._puturl,data)
        .map((response:Response)=> response.json())
        .catch((error) => Observable.throw(error.json()));
        
    }
}