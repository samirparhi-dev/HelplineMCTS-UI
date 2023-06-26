import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { dataService } from '../services/dataService/data.service';
import { CallAllocationService } from '../services/supervisorService/call-configuration.service';
import { ConfirmationDialogsService } from '../services/dialog/confirmation.service';
import { SetLanguageComponent } from 'app/set-language.component';
import { HttpServices } from 'app/services/http-services/http_services.service';

@Component({
  selector: 'app-dial-preference',
  templateUrl: './dial-preference.component.html',
  styleUrls: ['./dial-preference.component.css']
})
export class DialPreferenceComponent implements OnInit {
  dialPreferenceForm: FormGroup;
  currentLanguageSet: any;

  constructor(private formBuilder: FormBuilder, private dataService: dataService,
    private callAllocationService: CallAllocationService, private alertService: ConfirmationDialogsService,
    public httpServices:HttpServices) { }

  providerServiceMapID: any;
  dialPreferences = [
    { dialPreference: 'Auto preview dialing', isDialPreferenceManual: false },
    { dialPreference: 'Manual dialing', isDialPreferenceManual: true }
  ];
  isAutoPreviewDial: Boolean = false;

  ngOnInit() {
    this.assignSelectedLanguage();
    this.providerServiceMapID = { 'providerServiceMapID': this.dataService.currentService.serviceID };
    this.createDialPreferenceForm();
    this.dialPreferences;
  }

  ngDoCheck() {
    this.assignSelectedLanguage();
  }

  assignSelectedLanguage() {
		const getLanguageJson = new SetLanguageComponent(this.httpServices);
		getLanguageJson.setLanguage();
		this.currentLanguageSet = getLanguageJson.currentLanguageObject;
	  }

  get dialPreference() {
    return this.dialPreferenceForm.controls['dialPreference'].value;
  }

  get previewWindowTime() {
    return this.dialPreferenceForm.controls['previewWindowTime'].value;
  }

  createDialPreferenceForm() {
    this.dialPreferenceForm = this.formBuilder.group({
      dialPreference: [null, Validators.required],
      previewWindowTime: [null, Validators.required]
    })
  }

  checkDialPreference() {
    this.dialPreferenceForm.patchValue({
      previewWindowTime : 10
    });
    if(this.dialPreference == false) {
      this.isAutoPreviewDial = true;
    }else{
      this.isAutoPreviewDial = false;
    }
  }

  // checkWindowTime(previewWindowTimeValue) {
  //   if(previewWindowTimeValue < 10) {
  //     this.dialPreferenceForm.patchValue({
  //       previewWindowTime : 10
  //     });
  //   }
  // }
  saveDialPreference() {
    let reqObjForDialPreference = {
      "providerServiceMapID": this.providerServiceMapID.providerServiceMapID,
      "isDialPreferenceManual": this.dialPreference,
      "previewWindowTime": this.previewWindowTime
    }
    console.log("reqObjForDialPreference", reqObjForDialPreference);

    this.callAllocationService.saveDialPreference(reqObjForDialPreference).subscribe((response) => {
      console.log("reqObjForDialPreference inside service call", reqObjForDialPreference);
      console.log("Response", response);
      if (response.statusCode == 200) {
        this.alertService.alertConfirm(this.currentLanguageSet.dialPreferenceUpdatedSuccessfully, 'success');
      }
    },
      (error) => {
        console.log(error);
      });
  }
}
