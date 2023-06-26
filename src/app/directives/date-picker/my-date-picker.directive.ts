import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[restrictTyping]",
})
export class MyDatePickerDirective {
  constructor(element: ElementRef) {}

  private dateValidator(date: any) {}
  @HostListener("keydown", ["$event"]) preventTyping(e: any) {
    if (e.keyCode === 9) {
      return true;
    } else {
      return false;
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
