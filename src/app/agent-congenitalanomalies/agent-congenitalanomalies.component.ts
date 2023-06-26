import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { OCWService } from '../services/mcts-agent/outbond-call-worklist/outbond-call-worklist.service';
import { SetLanguageComponent } from 'app/set-language.component';
import { HttpServices } from 'app/services/http-services/http_services.service';



@Component({
  selector: 'app-innerpage-agent-congenitalanomalies',
  templateUrl: './agent-congenitalanomalies.component.html',
  styleUrls: ['./agent-congenitalanomalies.component.css']
  //providers:[OCWService]
})

export class InnerpageAgentCongenitalAnomalies implements OnInit {
	@Output() showNext:EventEmitter<any> = new EventEmitter<any>();
	 public showCreateFlag=false;
	 serviceProviders: string[];
	 outbondWorklist: any;
	 outbondWorklistHRP: any;
	 data: any;
     @Input() historyDetails:any;
	currentLanguageSet: any;

	 constructor(private _OCWService: OCWService,public httpServices:HttpServices) {
	 	this.serviceProviders;

		 console.log("input in next child: ",this.historyDetails);
	 }

	ngOnInit() {
		//console.log("this is history",this.historyDetails)	
	}

	navigateToNext(){
		this.showNext.emit();
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
