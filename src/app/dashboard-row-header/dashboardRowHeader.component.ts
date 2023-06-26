import {Component} from '@angular/core';
import { dataService } from '../services/dataService/data.service';
import { CzentrixServices } from '../services/czentrixService/czentrix.service';
import { SetLanguageComponent } from 'app/set-language.component';
import { HttpServices } from 'app/services/http-services/http_services.service';


@Component({
    selector: 'dashboard-row-header',
    templateUrl: './dashboardRowHeader.html',
})
export class DashboardRowHeaderComponent{

	current_role: any;
	current_service: any;
	id: any;
	currentLanguageSet: any;


	constructor(public getCommonData:dataService, private czentrixService: CzentrixServices,
		public httpServices:HttpServices)
	{
		this.current_role = this.getCommonData.currentRole.RoleName;
		this.current_service = this.getCommonData.currentService.serviceName;
		this.id = this.czentrixService.agent_id;
	}

	data: any = this.getCommonData.Userdata;

	ngOnInit() {
		this.assignSelectedLanguage();
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