import { Injectable } from '@angular/core';
import {
  CanActivate, CanActivateChild, Router, ActivatedRoute,
  ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate
} from '@angular/router';
import { dataService } from '../dataService/data.service';
import { Http, Response } from '@angular/http';
import { InterceptedHttp } from './../../http.interceptor';
import { ConfigService } from '../config/config.service';
import { AuthService } from './../../services/authentication/auth.service';
import 'rxjs/add/operator/toPromise'


@Injectable()
export class AuthGuard implements CanActivate {
  _baseURL = this._config.getCommonBaseURL();
  _authorisedUser = this._baseURL + 'user/getLoginResponse';
  _deleteToken = this._baseURL + 'user/userLogout';
  constructor(
    private router: Router, private _config: ConfigService,
    private route: ActivatedRoute, public dataSettingService: dataService, private _http: InterceptedHttp
    , private authService: AuthService) { }

  canActivate(route, state) {
    let key = localStorage.getItem('onCall');
    let authkey = sessionStorage.getItem('authToken');
    console.log('KEY', key);
  if(authkey) {
      if (key === 'true') {
        alert('You are not allowed to go back');
        return false;
      }
      if (key === 'false') {
        return true;
      }
    }
    else {
      return false;
    }
    }

  // canActivateChild() {

  // }

}

@Injectable()
export class SaveFormsGuard implements CanDeactivate<dataService> {

  canDeactivate() {
    var key = localStorage.getItem('onCall');
    if (key === 'true') {
      //alert("You are not allowed to go back");
      return true;
    }
    else {
      return false;
    }
  }

}