import { Component, OnInit, Input } from '@angular/core';
import { MdDialog } from '@angular/material';

import { CallClosureService } from '../services/mcts-agent/call-closure/call-closure.service';
import { MmuHistoryCasesheetComponent } from './mmu-history-casesheet/mmu-history-casesheet.component';
import { ConfirmationDialogsService } from '../services/dialog/confirmation.service';
import { SetLanguageComponent } from 'app/set-language.component';
import { HttpServices } from 'app/services/http-services/http_services.service';

@Component({
  selector: 'app-mmu-history',
  templateUrl: './mmu-history.component.html',
  styleUrls: ['./mmu-history.component.css']
})
export class MmuHistoryComponent implements OnInit {

  @Input('benRegID')
  benRegID: any;

  @Input('tm')
  tm: Boolean;

  medHistoryMMU: any;
  languageComponent: SetLanguageComponent;
  currentLanguageSet: any;
  

  constructor(private callClosureService: CallClosureService, public dialog: MdDialog,
    private httpServiceService: HttpServices,
    private alertService: ConfirmationDialogsService,
  ) { }

  ngOnInit() {
    this.fetchLanguageResponse();
  }

  ngOnChanges() {
    let obj = {
      'beneficiaryRegID': this.benRegID
    }
    // let obj = {
    //   'beneficiaryRegID': 144
    // }
    this.getMMUMedicalHistory(obj, this.tm);
  }

  getMMUMedicalHistory(obj, tm) {
    if (tm == false) {
      this.callClosureService.getMMUMedicalHistory(obj).subscribe((response) => {
        console.log(response.data, 'ben med history MMU success');
        if (response.statusCode == 200) {
          this.medHistoryMMU = response.data;
        }else {
          this.alertService.alert(response.errorMessage, 'error')
        }
      }, err => {
        console.log(err, 'ben med history error');
      });
    } else {
      // let obj = {
      //   'beneficiaryRegID': 1022
      // }
      this.callClosureService.getTMMedicalHistory(obj).subscribe((response) => {
        console.log(response.data, 'ben med history TM success');
        if (response.statusCode == 200) {
          this.medHistoryMMU = response.data;
        }else {
          this.alertService.alert(response.errorMessage, 'error')
        }
      }, err => {
        console.log(err, 'ben med history error');
      });
    }
  }


  getVisitDetails(visit) {
    if (visit.VisitCategory != 'NCD screening') {
      let reqObj = {
        "VisitCategory": visit.VisitCategory,
        "benFlowID": visit.benFlowID,
        "beneficiaryRegID": visit.beneficiaryRegID,
        "visitCode": visit.visitCode
      }
      if(this.tm == false) {
        this.mmuCaseSheet(reqObj, visit);
      }else{
        this.tmCaseSheet(reqObj, visit);
      }
    } else {
      this.alertService.alert(this.currentLanguageSet.ncdScreeningCasesheetIsNotAvailable, 'info');
    }
  }


  mmuCaseSheet(reqObj, visit) {
    this.callClosureService.getCaseSheetDataToPreview(reqObj).subscribe((response) => {
      console.log('RESPONSE FOR CASESHEET...', response);
      if (response.statusCode == 200) {
        let createMMUDialog = this.dialog.open(MmuHistoryCasesheetComponent, {
          disableClose: true,
          // width: 0.9 * window.innerWidth + "px",
          panelClass: 'dialog-width',
          data: {
            'data': response.data,
            "visitCategory": visit.VisitCategory,
          }
        });
        createMMUDialog.afterClosed()
          .subscribe((response) => {
            console.log('After closing', response);
          });
      }
      else {
        this.alertService.alert(response.errorMessage, 'error');
      }
    }, err => {
      this.alertService.alert(err, 'error');
    });
  }

  tmCaseSheet(reqObj, visit) {
    this.callClosureService.getCaseSheetDataToPreviewToTm(reqObj).subscribe((response) => {
      console.log('RESPONSE FOR CASESHEET...', response);
      if (response.statusCode == 200) {
        let createMMUDialog = this.dialog.open(MmuHistoryCasesheetComponent, {
          disableClose: true,
          // width: 0.9 * window.innerWidth + "px",
          panelClass: 'dialog-width',
          data: {
            'data': response.data,
            "visitCategory": visit.VisitCategory,
          }
        });
        createMMUDialog.afterClosed()
          .subscribe((response) => {
            console.log('After closing', response);
          });
      }
      else {
        this.alertService.alert(response.errorMessage, 'error');
      }
    }, err => {
      this.alertService.alert(err, 'error');
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
