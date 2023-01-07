import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input, NgModule } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { RandomString } from '../../classes/random-string.class';

export const TEXTAREA_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BsTextAreaField),
  multi: true
};
export const TEXTAREA_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => BsTextAreaField),
  multi: true
};
@Component({
  selector: 'bs-text-area-field',
  providers: [TEXTAREA_VALUE_ACCESSOR, TEXTAREA_VALIDATOR],
  templateUrl: './text-area-field.component.html',
  styles: []
})
export class BsTextAreaField implements ControlValueAccessor, Validator {
  @Input() public id: string = RandomString.create();
  @Input() public label?: string;
  @Input() public placeholder?: string;
  @Input() public name: string = this.id;
  @Input() public class: string = 'mb-2';
  @Input() public disabled: boolean = false;

  @Input() public get value(): string {
    return this._value;
  }
  set value(obj: string) {
    if (obj !== this._value) {
      this._onChange(obj);
      this._value = obj;
    }
  }
  public get isInvalid(): boolean {
    return (this._control?.invalid && (this._control.dirty || this._control.touched))!;
  }
  public get isValid(): boolean {
    return (this._control?.valid && (this._control.dirty || this._control.touched))!;
  }
  private _value: string = '';
  private _onChange: (_: any) => void = () => { };
  private _onTouched: () => void = () => { };
  private _control?: AbstractControl;

  public writeValue(value: any): void {
    if (value !== this._value) {
      this._value = value;
    }
  }
  public registerOnChange(fn: (_: any) => void): void {
    this._onChange = fn;
  }
  public registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }
  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  public onBlur(): void {
    this._onTouched();
  }
  public validate(control: AbstractControl): ValidationErrors | null {
    this._control = control;
    return null;
  }
}
@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [BsTextAreaField],
  declarations: [BsTextAreaField]
})
export class BsTextAreaFieldModule { }
