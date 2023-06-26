import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
import { FormArray, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { OCWService } from '../services/mcts-agent/outbond-call-worklist/outbond-call-worklist.service';
import { ConfirmationDialogsService } from '../services/dialog/confirmation.service';
import { CallClosureService } from '../services/mcts-agent/call-closure/call-closure.service';
import { SetLanguageComponent } from 'app/set-language.component';
import { HttpServices } from 'app/services/http-services/http_services.service';

@Component({
  selector: 'app-change-log',
  templateUrl: './change-log.component.html',
  styleUrls: ['./change-log.component.css']
})
export class ChangeLogComponent implements OnInit {

  changeLog = [];
  requestObj: any;
  currentLanguageSet: any;

  constructor(private formBuilder: FormBuilder, @Inject(MD_DIALOG_DATA) public data: any,
    public dialogRef: MdDialogRef<ChangeLogComponent>, private oCWService: OCWService,
    private alertService: ConfirmationDialogsService,
    private callClosureService: CallClosureService,public httpServices:HttpServices) { }

  ngOnInit() {

    console.log('callHistory popup: ', this.data.callHistory);
    this.requestObj = this.data.request_obj;
    this.getCallHistory(this.requestObj);
  }
  ngDoCheck() {
    this.assignSelectedLanguage();
  }

  assignSelectedLanguage() {
        const getLanguageJson = new SetLanguageComponent(this.httpServices);
        getLanguageJson.setLanguage();
        this.currentLanguageSet = getLanguageJson.currentLanguageObject;
      }
  getCallHistory(obj) {
    this.callClosureService.getChangeLog(obj)
      .subscribe((response) => {
        this.changeLog = response.data;
      },
      (error) => {
        console.log('this.callHistory = response.data: ', error);
      })
  }

}
