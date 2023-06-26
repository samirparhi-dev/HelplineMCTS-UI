import { Component, OnInit, Input } from '@angular/core';
import { HttpServices } from 'app/services/http-services/http_services.service';
import { SetLanguageComponent } from 'app/set-language.component';

@Component({
  selector: 'app-doctor-diagnosis-case-sheet',
  templateUrl: './doctor-diagnosis-case-sheet.component.html',
  styleUrls: ['./doctor-diagnosis-case-sheet.component.css']
})
export class DoctorDiagnosisCaseSheetComponent implements OnInit {

  @Input('data')
  casesheetData: any;

  date: any;
  blankRows = [1, 2, 3, 4];
  visitCategory: any;

  beneficiaryDetails: any;
  currentVitals: any;
  caseRecords: any;
  ancDetails: any;
  languageComponent: SetLanguageComponent;
  currentLanguageSet: any;
  

  constructor( private httpServiceService: HttpServices) { }

  ngOnInit() {
    this.fetchLanguageResponse();
    this.visitCategory = localStorage.getItem('caseSheetVisitCategory');
  }

  ngOnChanges() {
    if (this.casesheetData) {
      let t = new Date();
      this.date = t.getDate() + "/" + t.getMonth() + "/" + t.getFullYear();

      this.beneficiaryDetails = this.casesheetData.BeneficiaryData;

      let temp = this.casesheetData.nurseData.vitals;
      this.currentVitals = Object.assign({}, temp.benAnthropometryDetail, temp.benPhysicalVitalDetail);

      if (this.visitCategory != 'General OPD (QC)') {
        this.caseRecords = this.casesheetData.doctorData;
      } else {
        let temp = this.casesheetData.doctorData;
        console.log(temp, 'temp');
        this.caseRecords = {
          findings: temp.findings,
          prescription: temp.prescription,
          diagnosis: {
            provisionalDiagnosis: temp.diagnosis.diagnosisProvided,
            specialistAdvice: temp.diagnosis.instruction,
            externalInvestigation: temp.diagnosis.externalInvestigation
          },
          LabReport: temp.LabReport
        }
      }
      this.ancDetails = this.casesheetData.nurseData.anc;
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
