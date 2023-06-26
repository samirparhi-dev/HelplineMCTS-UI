import { Component, OnInit } from '@angular/core';
import { CzentrixServices } from '../services/czentrixService/czentrix.service';
import { Router } from '@angular/router';
import { dataService } from '../services/dataService/data.service';
import { SetLanguageComponent } from 'app/set-language.component';
import { HttpServices } from 'app/services/http-services/http_services.service';

@Component({
    selector: 'dashboard-user-id',
    templateUrl: './dashboardUserId.html'
})
export class DashboardUserIdComponent implements OnInit {

    id: any;
    status: any;
    currentLanguageSet: any;

    constructor(private czentrixService: CzentrixServices, private router: Router, private dataService: dataService,
        public httpServices:HttpServices){
        this.id = this.czentrixService.agent_id;
    }
    ngOnInit() {
        this.assignSelectedLanguage();
     //   this.getAgentStatus();
    }

    ngDoCheck() {
		this.assignSelectedLanguage();
	  }
	
	  assignSelectedLanguage() {
			const getLanguageJson = new SetLanguageComponent(this.httpServices);
			getLanguageJson.setLanguage();
			this.currentLanguageSet = getLanguageJson.currentLanguageObject;
		  }

}