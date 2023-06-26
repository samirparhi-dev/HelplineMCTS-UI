import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  DoCheck,
} from "@angular/core";
import { HttpServices } from "app/services/http-services/http_services.service";
import { SetLanguageComponent } from "app/set-language.component";

@Component({
  selector: "weather-warnings",
  templateUrl: "./weather-warnings.component.html",
})
export class WeatherWarningsComponent implements OnInit, DoCheck {
  @Output() hide_component: EventEmitter<any> = new EventEmitter<any>();
  currentLanguageSet: any;

  constructor(private httpServices: HttpServices) {}
  
  ngOnInit() {
    this.assignSelectedLanguage();
  }

  close() {
    this.hide_component.emit("6");
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
