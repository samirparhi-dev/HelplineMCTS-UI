import {
  Directive,
  ElementRef,
  Attribute,
  HostListener,
  Input,
} from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Directive({
  selector: "[appAllowMin]",
})
export class AllowMinDirective {
  @Input("allowMin")
  public min: number;

  constructor(private elementRef: ElementRef) {}

  validate(input) {
    let min = this.min;

    if (+input >= +min) return true;
    else return false;
  }

  @HostListener("keypress", ["$event"])
  onKeyPress(event: KeyboardEvent) {
    let currentChar = String.fromCharCode(event.keyCode);
    let nextValue;

    if (currentChar == "." || !isNaN(Number(currentChar))) {
      if (!isNaN(Number(currentChar)))
        nextValue = this.elementRef.nativeElement.value + currentChar;
      else nextValue = this.elementRef.nativeElement.value;
    }
    if (!this.validate(nextValue)) event.preventDefault();
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
