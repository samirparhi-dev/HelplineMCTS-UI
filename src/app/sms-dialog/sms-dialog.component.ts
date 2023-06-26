import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
import { HttpServices } from 'app/services/http-services/http_services.service';
import { SetLanguageComponent } from 'app/set-language.component';

@Component({
  selector: 'app-sms-dialog',
  templateUrl: './sms-dialog.component.html',
  styleUrls: ['./sms-dialog.component.css']
})
export class SmsDialogComponent implements OnInit {

  altNoCheck: boolean = false;
  alternateNumber: any;
  smsText: any = '';
  languageComponent: SetLanguageComponent;
  currentLanguageSet: any;
  

  constructor(private httpServiceService: HttpServices,
    @Inject(MD_DIALOG_DATA) public data: any, public dialogRef: MdDialogRef<SmsDialogComponent>) { }

  ngOnInit() {
    this.fetchLanguageResponse();
  }

  sendSms(){
    console.log(this.smsText,this.altNoCheck,this.alternateNumber);
    var obj = {};
    obj["smsText"] = (this.smsText !== undefined && this.smsText !== null) ? this.smsText.trim() : null;
    obj["altNoCheck"] = this.altNoCheck;
    obj["alternateNumber"] = (this.alternateNumber !== undefined && this.alternateNumber !== null) ? this.alternateNumber.trim() : null;
    this.dialogRef.close(obj);
  }

  //AN40085822 23/10/2021 Integrating Multilingual Functionality --Start--
  ngDoCheck(){
    this.fetchLanguageResponse();
  }

  fetchLanguageResponse() {
    this.languageComponent = new SetLanguageComponent(this.httpServiceService);
    this.languageComponent.setLanguage();
    this.currentLanguageSet = this.languageComponent.currentLanguageObject; 
  }
  //--End--
}
