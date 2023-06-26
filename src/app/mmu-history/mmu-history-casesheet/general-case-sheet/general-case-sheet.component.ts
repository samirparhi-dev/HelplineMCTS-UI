import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';

@Component({
  selector: 'app-general-case-sheet',
  templateUrl: './general-case-sheet.component.html',
  styleUrls: ['./general-case-sheet.component.css']
})
export class GeneralCaseSheetComponent implements OnInit {

  @Input('data')
  data: any;

  visitCategory: any;
  caseSheetData:any;
  printPagePreviewSelect = {
    caseSheetANC: true,
    caseSheetPNC: true,
    caseSheetHistory: true,
    caseSheetExamination: true,
  }

  constructor(
    private dialog: MdDialog,
   ) { }

  ngOnInit() {
    this.visitCategory = this.data.visitCategory;
    this.caseSheetData =this.data.data
  }

}
