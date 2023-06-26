import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRoute, RouterStateSnapshot, CanDeactivate  } from '@angular/router';
import { dataService } from '../dataService/data.service';

@Injectable()
export class AuthGuard2 implements CanActivate {

  constructor(
    private router: Router,
    private route: ActivatedRoute, public dataSettingService: dataService) { }

  canActivate(route, state) {
    console.log(route);

    console.log(state);
    var key = localStorage.getItem('onCall');
    var key2  = localStorage.getItem("key");
    if(key == "yes") {
      return true;;
    }

    else {
    	      alert("Plese wait for call to come");

      return false;
    }
  }

  // canActivateChild() {

  // }

}

