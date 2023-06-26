import { Directive, ElementRef, HostListener, Input } from "@angular/core";
import { HttpServices } from "app/services/http-services/http_services.service";

@Directive({
  selector: "[myEmail]",
})
export class myEmail {
  currentLanguageSet: any;
  constructor(element: ElementRef, public httpServices: HttpServices) {
    this.httpServices.currentLangugae$.subscribe(
      (response) => (this.currentLanguageSet = response)
    );
  }

  private emailValidator(email: any) {
    if (email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      return 1;
    } else {
      return -1;
    }
  }

  @HostListener("keyup", ["$event"]) onKeyUp(ev: any) {
    var result = this.emailValidator(ev.target.value);
    if (result == 1) {
      ev.target.nextSibling.nextElementSibling.innerHTML =
        this.currentLanguageSet.validEmail;
      ev.target.style.border = "2px solid green";
    }

    if (result == -1) {
      ev.target.nextSibling.nextElementSibling.innerHTML =
        this.currentLanguageSet.invalidEmail;
      ev.target.style.border = "2px solid red";
    }
  }
  @HostListener("paste", ["$event"]) blockPaste(event: KeyboardEvent) {
    event.preventDefault();
  }

  @HostListener("copy", ["$event"]) blockCopy(event: KeyboardEvent) {
    event.preventDefault();
  }

  @HostListener("cut", ["$event"]) blockCut(event: KeyboardEvent) {
    event.preventDefault();
  }
}
