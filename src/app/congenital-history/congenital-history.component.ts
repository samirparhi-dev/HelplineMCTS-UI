import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
import { HttpServices } from 'app/services/http-services/http_services.service';
import { SetLanguageComponent } from 'app/set-language.component';

@Component({
  selector: 'app-congenital-history',
  templateUrl: './congenital-history.component.html',
  styleUrls: ['./congenital-history.component.css']
})
export class CongenitalHistoryComponent implements OnInit {
  carows: any;
  currentLanguageSet: any;

  constructor(@Inject(MD_DIALOG_DATA) public data: any, public dialogRef: MdDialogRef<CongenitalHistoryComponent>,
  public httpServices:HttpServices) { }

  ngOnInit() {
    this.assignSelectedLanguage();
    console.log(this.data.carows);
    this.carows = this.data.carows;
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
