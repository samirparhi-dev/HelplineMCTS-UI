import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { SecurityInterceptedHttp } from '../../http.securityinterceptor';
import { BehaviorSubject } from 'rxjs';
import { ConfigService } from '../config/config.service';



/**
 * Author: Diamond Khanna ( 352929 )
 * Date: 29-05-2017
 * Objective: A common service for all HTTP services, just pass the URL and required DATA
 */

@Injectable()
export class HttpServices {
	common_url = this._config.getOpenCommonBaseURL();
	getLanguageListURL = this.common_url + "beneficiary/getLanguageList";
	language: any;
	appCurrentLanguge = new BehaviorSubject(this.language);
	currentLangugae$ = this.appCurrentLanguge.asObservable();
	constructor(private http: SecurityInterceptedHttp,private _config: ConfigService,
		private _http: Http) { };

	getData(url: string) {
		return this.http.get(url)
			.map(this.handleGetSuccess)
			.catch(this.handleGetError);
	}
	getCommitDetails(url: string) {
		return this.http.get(url)
			.map(this.handleGetSuccess)
			.catch(this.handleGetError);
	}
	handleGetSuccess(response: Response) {
		return response.json();
	}
	handleGetSuccessForSecurity(response: Response) {
		return response.json();
	}

	handleGetError(error: Response | any) {
		
		return Observable.throw(error.json());
	}

	postData(url: string, data: any) {
		return this.http.post(url, data)
			.map(this.handleGetSuccess)
			.catch(this.handleGetError);
	}
	postDataForSecurity(url: string, data: any) {
		return this.http.post(url, data)
			.map(this.handleGetSuccessForSecurity)
			.catch(this.handleGetError);
	}

	fetchLanguageSet() {
		return this.http.get(this.getLanguageListURL).map((res) => res.json().data);
	  }
	
	  getCurrentLanguage(response) {
		this.language = response;
		this.appCurrentLanguge.next(response);
	  }
	  getLanguage(url: string) {
		return this._http.get(url)
		.map(this.handleGetlanguageSuccess)
		.catch(this.handleGetError);
	  }
	  handleGetlanguageSuccess(response: Response) {
		return response.json();
	  }
	
}



