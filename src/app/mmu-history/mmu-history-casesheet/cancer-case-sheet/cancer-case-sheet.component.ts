import { Component, OnInit, ChangeDetectorRef, AfterViewInit, ElementRef, ViewChild, Input } from '@angular/core';
import { Location } from '@angular/common';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';

@Component({
  selector: 'app-cancer-case-sheet',
  templateUrl: './cancer-case-sheet.component.html',
  styleUrls: ['./cancer-case-sheet.component.css']
})
export class CancerCaseSheetComponent implements OnInit {

  @Input('data')
  data: any;

  printPagePreviewSelect = {
    caseSheetHistory: true,
    caseSheetExamination: true,
  }

  visitCategory: string;

  constructor(
    private dialog: MdDialog,
    private location: Location,
    ) { }
    
    caseSheetData:any;
  ngOnInit() {
    this.caseSheetData = this.data.data;
  }

  

}
