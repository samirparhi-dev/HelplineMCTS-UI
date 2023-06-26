import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
import { HttpServices } from 'app/services/http-services/http_services.service';
import { SetLanguageComponent } from 'app/set-language.component';

@Component({
  selector: 'app-call-q',
  templateUrl: './call-q.component.html',
  styleUrls: ['./call-q.component.css']
})
export class CallQComponent implements OnInit {

  qarows: any;
  currentLanguageSet: any;

  constructor(@Inject(MD_DIALOG_DATA) public data: any,public httpServices:HttpServices,
   public dialogRef: MdDialogRef<CallQComponent>) { }

  ngOnInit() {
    console.log(JSON.stringify(this.data.qarows));
    this.qarows = this.data.qarows;
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
