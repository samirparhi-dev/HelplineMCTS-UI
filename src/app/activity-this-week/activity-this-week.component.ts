import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { dataService } from '../services/dataService/data.service';
import { Router } from '@angular/router';
import { SetLanguageComponent } from 'app/set-language.component';
import { HttpServices } from 'app/services/http-services/http_services.service';

@Component({
    selector: 'activity-this-week',
    templateUrl: './activity-this-week.component.html',
})
export class ActivityThisWeekComponent implements OnInit {
	@Output() hide_component: EventEmitter < any > = new EventEmitter<any>();
	currentLanguageSet: any;


	ngOnInit() { 
		// console.log("Current campaign "+this.getCommonData.current_campaign);
	};
	ngDoCheck() {
		this.assignSelectedLanguage();
	  }
	
	  assignSelectedLanguage() {
			const getLanguageJson = new SetLanguageComponent(this.httpServices);
			getLanguageJson.setLanguage();
			this.currentLanguageSet = getLanguageJson.currentLanguageObject;
		  }
	role: any;

	constructor(public getCommonData: dataService, public router: Router,public httpServices:HttpServices){

		this.role = this.getCommonData.Role_Name;
		this.role = this.role.trim().toUpperCase();
		// console.log("Current campaign "+this.getCommonData.current_campaign);
	} 

	close() {
		this.hide_component.emit("1");
	};
	// a() {
	// 	this.router.navigate(['/MultiRoleScreenComponent/InnerpageComponent']);
	// }
}