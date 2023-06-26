import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpServices } from 'app/services/http-services/http_services.service';
import { SetLanguageComponent } from 'app/set-language.component';
import { QuestionTypeService } from '../services/supervisorService/question-type.service';

@Component({
  selector: 'app-inner-question-type-detail',
  templateUrl: './question-type-detail.component.html',
  styleUrls: ['./question-type-detail.component.css']
})
export class InnerQuestionTypeDetailComponent implements OnInit {

   rows : any =[{
     questionType:"",
     questionTypeDesc: ""
   }];
  @ViewChild('questionDetailForm') questionDetailForm : NgForm;
  languageComponent: SetLanguageComponent;

  currentLanguageSet: any;
  constructor(private QtService: QuestionTypeService,private httpServiceService: HttpServices) { }

  ngOnInit() {
    this.fetchLanguageResponse();
  }

  OnDeleteRow(index: number){
    console.log(index);
    this.rows.splice(index,1);
    console.log(this.rows);
  }

  OnAddRow(){
    this.rows.push({
      questionType:"",
      questionTypeDesc: ""
    });
    console.log(this.rows);
  }

  OnSubmit(){
    console.log(this.rows);
    console.log(JSON.stringify(this.rows));
    this.QtService.putQuestionType(JSON.stringify(this.rows))
    .subscribe(
      (response)=>{
        console.log(response);
        alert(this.currentLanguageSet.succesfulQuestionTypeConfiguration)
      },
      (error)=> {
        console.log(error);
        alert(this.currentLanguageSet.errorQuestionTypeConfiguration)
      }
    )
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
