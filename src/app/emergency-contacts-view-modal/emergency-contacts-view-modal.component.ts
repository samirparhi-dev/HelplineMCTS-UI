import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { dataService } from '../services/dataService/data.service';
import { NotificationService } from '../services/notificationService/notification-service';
import { ConfirmationDialogsService } from '../services/dialog/confirmation.service'
import { SetLanguageComponent } from 'app/set-language.component';
import { HttpServices } from 'app/services/http-services/http_services.service';

@Component({
  selector: 'app-emergency-contacts-view-modal',
  templateUrl: './emergency-contacts-view-modal.component.html',
  styleUrls: ['./emergency-contacts-view-modal.component.css']
})
export class EmergencyContactsViewModalComponent implements OnInit {

  //arrays
  contacts: any = [];

  //variables
  providerServiceMapID: any;
  emergencyContactID: any;
  currentLanguageSet: any;

  constructor(private dialog: MdDialog, public dialogRef: MdDialogRef<EmergencyContactsViewModalComponent>,
    private dataService: dataService, private notificationService: NotificationService, private alertService: ConfirmationDialogsService,
    public httpServices:HttpServices) { }

  ngOnInit() {
    this.assignSelectedLanguage();
    this.providerServiceMapID = this.dataService.currentService.serviceID;
    this.notificationService.getNotificationTypes(this.providerServiceMapID)
      .subscribe((response) => {
        console.log(response, "notification Types in emergency contact component");
        this.emergencyContactID = response.filter((notification) => {
          return notification.notificationType == "Emergency Contact";
        });
        let data = {
          "providerServiceMapID": this.providerServiceMapID,
          "notificationTypeID": this.emergencyContactID[0].notificationTypeID
        }
        this.notificationService.getEmergencyContacts(data).subscribe(response => {
          this.handleEmergencyContacts(response)
        },
          (err) => {
            this.alertService.alert(err.errorMessage, 'error');
            console.log(err);
          });
      },
      (err) => {
        console.log(err);
      });
  }

  ngDoCheck() {
    this.assignSelectedLanguage();
  }

  assignSelectedLanguage() {
		const getLanguageJson = new SetLanguageComponent(this.httpServices);
		getLanguageJson.setLanguage();
		this.currentLanguageSet = getLanguageJson.currentLanguageObject;
	  }

  handleEmergencyContacts(res) {
    this.contacts = res;
  }
}
