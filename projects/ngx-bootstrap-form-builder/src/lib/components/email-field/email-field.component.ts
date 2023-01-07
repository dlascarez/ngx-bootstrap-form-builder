import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input, NgModule } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { RandomString } from '../../classes/random-string.class';

export const EMAILFIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BsEmailField),
  multi: true
};
export const EMAILFIELD_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => BsEmailField),
  multi: true
};
@Component({
  selector: 'bs-email-field',
  providers: [EMAILFIELD_VALUE_ACCESSOR, EMAILFIELD_VALIDATOR],
  templateUrl: './email-field.component.html',
  styleUrls: ['../common-component.css']
})
export class BsEmailField implements ControlValueAccessor, Validator {
  @Input() public id: string = RandomString.create();
  @Input() public label?: string;
  @Input() public placeholder?: string;
  @Input() public faIcon?: string = 'fa-solid fa-envelope';
  @Input() public textIcon?: string;
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
  public get hasIcon(): boolean {
    return (this.faIcon ?? '') !== '' || (this.textIcon ?? '') !== '';
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
  exports: [BsEmailField],
  declarations: [BsEmailField]
})
export class BsEmailFieldModule { }
