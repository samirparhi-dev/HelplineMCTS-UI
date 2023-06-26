import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { dataService } from '../services/dataService/data.service';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
import { SetLanguageComponent } from 'app/set-language.component';
import { HttpServices } from 'app/services/http-services/http_services.service';


//inner-questioner-modal
@Component({
  selector: 'app-inner-questioner-modal',
  templateUrl: './questionaire-modal.component.html',
  styleUrls: ['./questionaire-modal.component.css']
  //providers:[OCWService]
})

export class InnerQuestionerModalComponent implements OnInit {

  @ViewChild('questionaireForm') questionaireForm: NgForm;
  languageComponent: SetLanguageComponent;
  
  currentLanguageSet: any;

  constructor(@Inject(MD_DIALOG_DATA) public data: any,private httpServiceService: HttpServices,public dialogRef: MdDialogRef<InnerQuestionerModalComponent>) { }

  ngOnInit() {
    this.fetchLanguageResponse();
  }

  onSubmit(){
	  console.log(this.questionaireForm.value);
	  this.dialogRef.close(this.questionaireForm.value);
  }
//BU40088124 23/10/2021 Integrating Multilingual Functionality --Start--
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
