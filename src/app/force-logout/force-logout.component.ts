import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationDialogsService } from './../services/dialog/confirmation.service';
import { ForceLogoutService } from './../services/supervisorService/forceLogoutService.service';
import { NgForm } from '@angular/forms';
import { dataService } from '../services/dataService/data.service';
import { SetLanguageComponent } from 'app/set-language.component';
import { HttpServices } from 'app/services/http-services/http_services.service';


@Component({
  selector: 'app-force-logout',
  templateUrl: './force-logout.component.html',
  styleUrls: ['./force-logout.component.css']
})
export class ForceLogoutComponent implements OnInit {

  @ViewChild('flform') flform: NgForm;
  currentLanguageSet: any;

  constructor(public alertService: ConfirmationDialogsService,
    public forceLogoutService: ForceLogoutService,
    public commonData: dataService,
    public httpServices:HttpServices) { }

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

  kickout(obj) {
    console.log(obj, 'object values');
    obj['providerServiceMapID'] = this.commonData.currentService.providerServiceMapID;
    this.forceLogoutService.forcelogout(obj)
      .subscribe(response => {
        console.log(response, 'success post force logout');
        if (response.response.toLowerCase() === 'success'.toLowerCase()) {
          this.alertService.alert(this.currentLanguageSet.userLoggedOutSuccessfully, 'success');
          this.flform.reset();
        }
      }, err => {
        console.log(err.errorMessage, 'error post force logout');
        this.alertService.alert(this.currentLanguageSet.errorOccurredPleaseTryAgain, 'error');
      })
  }

}
