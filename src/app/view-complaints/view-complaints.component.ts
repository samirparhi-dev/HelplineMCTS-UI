import { Component, OnInit, Inject, DoCheck } from "@angular/core";
import { MD_DIALOG_DATA, MdDialogRef } from "@angular/material";
import { HttpServices } from "app/services/http-services/http_services.service";
import { SetLanguageComponent } from "app/set-language.component";

@Component({
  selector: "app-view-complaints",
  templateUrl: "./view-complaints.component.html",
  styleUrls: ["./view-complaints.component.css"],
})
export class ViewComplaintsComponent implements OnInit, DoCheck {
  complaintRows: any;
  currentLanguageSet: any;

  constructor(
    @Inject(MD_DIALOG_DATA) public data: any,
    public dialogRef: MdDialogRef<ViewComplaintsComponent>,
    private httpServices: HttpServices
  ) {}

  ngOnInit() {
    this.assignSelectedLanguage();
    console.log(this.data.complaintRows);
    this.complaintRows = this.data.complaintRows;
  }
  /* Multilingual implementation - JA354063 */
  ngDoCheck() {
    this.assignSelectedLanguage();
  }

  assignSelectedLanguage() {
    const getLanguageJson = new SetLanguageComponent(this.httpServices);
    getLanguageJson.setLanguage();
    this.currentLanguageSet = getLanguageJson.currentLanguageObject;
  }
  /* Ends*/
}
