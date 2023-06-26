import {Component, Output, EventEmitter } from '@angular/core';
import { HttpServices } from 'app/services/http-services/http_services.service';
import { SetLanguageComponent } from 'app/set-language.component';

@Component({
    selector: 'daily-tasks',
    templateUrl: './daily-tasks.component.html',
})
export class DailyTasksComponent{
    @Output() hide_component: EventEmitter<any> = new EventEmitter<any>();
	currentLanguageSet: any;


	ngOnInit() { 
		this.assignSelectedLanguage();
	};

	constructor(public httpServices:HttpServices) { };

	close() {
		this.hide_component.emit("4");
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