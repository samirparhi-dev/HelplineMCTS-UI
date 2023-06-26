import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
import { HttpServices } from 'app/services/http-services/http_services.service';
import { SetLanguageComponent } from 'app/set-language.component';

@Component({
  selector: 'app-mmu-history-casesheet',
  templateUrl: './mmu-history-casesheet.component.html',
  styleUrls: ['./mmu-history-casesheet.component.css']
})
export class MmuHistoryCasesheetComponent implements OnInit {
  languageComponent: SetLanguageComponent;
  currentLanguageSet: any;
  

  constructor(@Inject(MD_DIALOG_DATA) public data: any,
  private httpServiceService: HttpServices,
  public dialogRef: MdDialogRef<MmuHistoryCasesheetComponent>) { }
  QC: boolean = false;
  General: boolean = false;
  NCDScreening: boolean = false;
  CancerScreening: boolean = false;

  ngOnInit() {
    this.fetchLanguageResponse();
    let caseSheetVisitCategory = this.data.visitCategory;
    this.caseSheetCategory(caseSheetVisitCategory);
  }

  caseSheetCategory(caseSheetVisitCategory) {
    const type = caseSheetVisitCategory;

    if (type) {
      switch (type) {
        case 'Cancer Screening':
          this.CancerScreening = true;
          break;

        case 'General OPD (QC)':
        case 'General OPD':
        case 'NCD care':
        case 'PNC':
        case 'ANC':
          this.General = true;
          break;

        default:
          this.QC = false;
          this.NCDScreening = false;
          this.CancerScreening = false;
          this.General = false;
          break;
      }
    }
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
