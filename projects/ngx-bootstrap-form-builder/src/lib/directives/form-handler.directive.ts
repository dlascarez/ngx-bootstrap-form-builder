import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

@Directive({
  selector: '[formGroup]'
})
export class FormHandlerDirective {
  @Input() private formGroup?: FormGroup;
  @Output() public validSubmit: EventEmitter<any>;

  constructor() {
    this.validSubmit = new EventEmitter();
  }

  @HostListener("submit")
  public onSubmit(): void {
    this._markAsTouchedAndDirty(this.formGroup!);
    if (this.formGroup?.valid) {
      this.validSubmit?.emit(this.formGroup.value);
    }
  }

  private _markAsTouchedAndDirty(control: AbstractControl): void {
    if (control instanceof FormGroup) {
      Object.keys(control.controls).forEach(key =>
        this._markAsTouchedAndDirty(control.controls[key])
      );
    } else if (control instanceof FormArray) {
      control.controls.forEach(c => this._markAsTouchedAndDirty(c));
    } else if (control instanceof FormControl && control.enabled) {
      control.markAsDirty();
      control.markAsTouched();
      control.updateValueAndValidity();
    }
  }
}
