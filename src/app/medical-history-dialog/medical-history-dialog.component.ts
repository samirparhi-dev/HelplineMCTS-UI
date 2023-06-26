import { Component, OnInit, Inject, Input } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { dataService } from '../services/dataService/data.service';
import { CallClosureService } from '../services/mcts-agent/call-closure/call-closure.service';
import { ConfirmationDialogsService } from '../services/dialog/confirmation.service';
import { SetLanguageComponent } from 'app/set-language.component';
import { HttpServices } from 'app/services/http-services/http_services.service';

@Component({
    selector: 'app-medical-history-dialog',
    templateUrl: './medical-history-dialog.html'
})

export class MedicalHistoryDialogComponent implements OnInit {
    @Input('benRegID')
    benRegID: any;
    medHistory104: any;
    languageComponent: SetLanguageComponent;
    currentLanguageSet: any;
    

    constructor(private callClosureService: CallClosureService,
        private httpServiceService: HttpServices) {
    }

    ngOnInit() {
        this.fetchLanguageResponse();
    }

    ngOnChanges() {
        let obj = {
            'beneficiaryRegID': this.benRegID
        }
        this.get104MedicalHistory(obj);
    }
    get104MedicalHistory(obj) {
        this.callClosureService.getMedicalHistory(obj)
            .subscribe(response => {
                console.log(response.data, 'ben med history success');
                this.medHistory104 = response.data;
            }, err => {
                console.log(err, 'ben med history error');
            });
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
