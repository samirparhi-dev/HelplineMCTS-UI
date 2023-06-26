import { Component, OnInit, Inject, Injector } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { MD_DIALOG_DATA } from '@angular/material';
import { HttpServices } from 'app/services/http-services/http_services.service';
import { SetLanguageComponent } from 'app/set-language.component';
import { dataService } from '../services/dataService/data.service';

@Component({
  selector: 'app-common-sms-dialog',
  templateUrl: './common-sms-dialog.component.html',
  styleUrls: ['./common-sms-dialog.component.css']
})
export class CommonSmsDialogComponent implements OnInit {

  altNum = false;
  mobileNumber: any;
  validNumber = false;
  currentLanguageSet: any;

  constructor( @Inject(MD_DIALOG_DATA) public data: any,
    public dialog: MdDialog,
    public dialogReff: MdDialogRef<CommonSmsDialogComponent>,
    public getCommonData: dataService,public httpServices:HttpServices,private injector: Injector) { 
      this.httpServices = injector.get(HttpServices);
    }

  ngOnInit() {
  }

  mobileNum(value) {
    if (value.length == 10) {
      this.validNumber = true;
    } else {
      this.validNumber = false;
    }
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
