import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MdSelectModule } from '@angular/material';
import { KnowledgeManagementService } from '../services/supervisorService/knowledge-management.service';
import { dataService } from '../services/dataService/data.service';
import { SetLanguageComponent } from 'app/set-language.component';
import { HttpServices } from 'app/services/http-services/http_services.service';

@Component({
  selector: 'app-inner-knowledge-management',
  templateUrl: './knowledge-management.component.html',
  styleUrls: ['./knowledge-management.component.css']
})
export class InnerKnowledgeManagementComponent implements OnInit {
  // declaring object
  public categories: any = [];
  public subCategories: any = [];
  public file: File;
  knowledgeForm: FormGroup;

  // declaring variables
  public categoryID;
  public subCategoryID;
  public fileContent;
  public providerServiceMapID;
  public userID;
  public fileName;
  public fileExtension;
  public createdBy;
  languageComponent: SetLanguageComponent;
  currentLanguageSet: any;
  

  constructor(private KMService : KnowledgeManagementService, private fb: FormBuilder, private httpServiceService: HttpServices, private dataService: dataService) { 
    this.createForm();
  }

  // Create form intialization and object in ngOnInit
  ngOnInit() {
    this.fetchLanguageResponse();
    this.getCategory();
    this.providerServiceMapID = this.dataService.currentService.serviceID;
    this.userID = this.dataService.uid;
    this.createdBy = this.dataService.uname;
  }

  // form creation using reactive form form builder
  createForm() {
    this.knowledgeForm = this.fb.group({
      category: ['', Validators.required], // <--- the FormControl called "name"
      subCategory: ['', Validators.required],
      fileInput: ['', Validators.required]
    });
  }

  // getting list of category
  getCategory() {
    this.KMService.getCategories()
      .subscribe((response) => {
        this.categories = response;
      }, (err) => {
        console.log('Error in Knowledge Managemant Catyegory');
        // error catch here
      });
  }
  // getting list of subcategory by categoryId
  getSubCategory(categoryID: any) {
    this.KMService.getSubCategories(categoryID)
      .subscribe((response) => {
        this.subCategories = response;
      }, (err) => {
        console.log('Error in Knowledge Managemant Catyegory');
        // error catch here
      });
  }
  // submit event to submit the form
  onSubmit({ value, valid }: { value: any, valid: boolean }) {
    const documentUploadObj = {};
    const documentUploadArray = [];
    if (valid) {
      documentUploadObj['fileName'] = value.fileInput;
      documentUploadObj['fileExtension'] = '.' + value.fileInput.split('.')[1];
      documentUploadObj['providerServiceMapID'] = this.providerServiceMapID;
      documentUploadObj['userID'] = this.userID;
      documentUploadObj['fileContent'] = this.fileContent.split(',')[1];
      documentUploadObj['createdBy'] = this.createdBy;
      documentUploadObj['categoryID'] = value.category;
      documentUploadObj['subCategoryID'] = value.subCategory;
      documentUploadArray.push(documentUploadObj);
      this.uploadFile(documentUploadArray);
    }
  }
  // file change event
  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): any {
    this.file = inputValue.files[0];
    if (this.file) {
      this.knowledgeForm.controls['fileInput'].setValue(this.file.name);
      const myReader: FileReader = new FileReader();
      // binding event to access the local variable
      myReader.onloadend = this.onLoadFileCallback.bind(this)
      myReader.readAsDataURL(this.file);
    } else {
      this.knowledgeForm.controls['fileInput'].setValue('');
    }

  }
  onLoadFileCallback = (event) => {
    this.fileContent = event.currentTarget.result;

  }

  // Calling service Method to call the services
  uploadFile(uploadObj: any) {
    this.KMService.uploadDocument(uploadObj).subscribe((response) => {
      console.log(response);
    }, (err) => {
      console.log(err);
    })
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
