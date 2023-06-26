import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { ConfigService } from '../config/config.service';
import { SecurityInterceptedHttp } from '../../http.securityinterceptor';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class KnowledgeManagementService{

     test=[];
     private _geturl: string = this.configService.getMctsBaseURL() +"callConfigurationController/put/confignumbers";
     private _configurl: string = this.configService.getMctsBaseURL() +"callConfigurationController/put/configupdate";
     private _categoryurl = this.configService.getCommonBaseURL() + "api/helpline1097/co/get/category";
     private _subcategoryurl = this.configService.getCommonBaseURL() + "api/helpline1097/co/get/subcategory";
     private _uploadDocumentUrl = this.configService.getCommonBaseURL() + 'kmfilemanager/addFile';

    constructor(private _http:SecurityInterceptedHttp,private configService: ConfigService){}

    getCategories ()
    {
        return this._http.post( this._categoryurl, {})
            .map( this.extractData )
            .catch( this.handleError );
    }
    getSubCategories ( id: any )
    {
        let data = { "categoryID": id };
        return this._http.post( this._subcategoryurl, data)
            .map( this.extractData )
            .catch( this.handleError );
    }
    uploadDocument(uploadObj: any) {
        return this._http.post(this._uploadDocumentUrl , JSON.stringify(uploadObj)).map(this.extractData).catch(this.handleError)
    }
    private extractData(response: Response) {

        if (response.json().data) {
        return response.json().data;
        } else {
        console.log('Status', response.json().status);
        return response.json().status;

        }
    };

    private handleError(res: Response) {
        return Observable.throw(res.json());
    };

}