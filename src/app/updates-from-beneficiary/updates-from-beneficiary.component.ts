import { Component, DoCheck, OnInit } from "@angular/core";
import { HttpServices } from "app/services/http-services/http_services.service";
import { SetLanguageComponent } from "app/set-language.component";

@Component({
  selector: "app-updates-from-beneficiary",
  templateUrl: "./updates-from-beneficiary.component.html",
  styleUrls: ["./updates-from-beneficiary.component.css"],
})
export class UpdatesFromBeneficiaryComponent implements OnInit, DoCheck {
  currentLanguageSet: any;

  constructor(private httpServices: HttpServices) {}

  ngOnInit() {
    this.assignSelectedLanguage();
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
