import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class dataService {

	Userdata: any;
	userPriveliges: any;
	uid: any;
	uname: any;
	benData: any;
	currentService: any;
	currentRole: any;
	current_workingLocationID: any;
	roleSelected = new Subject();
	callDetailID: any;
	benObj: any;
	agentID: any;

	current_serviceID:any;

	sendHeaderStatus = new Subject();
	onCall = new Subject();
	Role_Name: any;

	bendata_for_MO: any;
	dataForMOTransferInClosure: any;

	call_wrapup = new Subject();

	call_recieved_by_mo: any = false;
	selfNoOnTransfer: any = false;

	loginKey:any;
	service_providerID:any;
	campaignName: any;
	
	apimanClientKey: any;
	appLanguage:any="English";
	constructor() {
	}

};



