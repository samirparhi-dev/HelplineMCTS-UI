import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServices } from 'app/services/http-services/http_services.service';
import { SetLanguageComponent } from 'app/set-language.component';

@Component({
    selector: 'dashboard-navigation',
    templateUrl: './dashboardNavigation.html',
})
export class DashboardNavigationComponent{
    role: any;
    currentLanguageSet: any;

    constructor(private _route: ActivatedRoute,
        public httpServices:HttpServices){

        this._route.params.subscribe(params => {
                this.role = params['role'];
            });
        // console.log("mutton role: ",this.role);
    }

    ngOnInit() {
        this.assignSelectedLanguage();
        
      }

    ngDoCheck() {
        this.assignSelectedLanguage();
      }
    
      assignSelectedLanguage() {
            const getLanguageJson = new SetLanguageComponent(this.httpServices);
            getLanguageJson.setLanguage();
            this.currentLanguageSet = getLanguageJson.currentLanguageObject;
          }
    
}