import { CommonModule } from '@angular/common';
import { Component, EventEmitter, forwardRef, Input, NgModule, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { AbstractControl, ControlValueAccessor, FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { RandomString } from '../../classes/random-string.class';

export const PASSFIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BsPasswordField),
  multi: true
};
export const PASSFIELD_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => BsPasswordField),
  multi: true
};
@Component({
  selector: 'bs-password-field',
  providers: [PASSFIELD_VALUE_ACCESSOR, PASSFIELD_VALIDATOR],
  templateUrl: './password-field.component.html',
  styleUrls: ['../common-component.css']
})
export class BsPasswordField implements ControlValueAccessor, Validator {
  @Input() public id: string = RandomString.create();
  @Input() public label?: string;
  @Input() public placeholder?: string;
  @Input() public faIcon?: string = 'fas fa-lock';
  @Input() public textIcon?: string;
  @Input() public name: string = this.id;
  @Input() public class: string = 'mb-2';
  @Input() public disabled: boolean = false;
  @Input() public readonly: boolean = false;
  @Input() public required: boolean = false;

  @Output() public click: EventEmitter<void> = new EventEmitter();
  @Output() public change: EventEmitter<Event> = new EventEmitter();
  @Output() public blur: EventEmitter<FocusEvent> = new EventEmitter();

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
  public get isRequired(): boolean {
    return this.required || (this._control?.hasValidator(Validators.required) ?? false);
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
  public onBlur(event: FocusEvent): void {
    this._onTouched();
    this.blur?.emit(event);
  }
  public validate(control: AbstractControl): ValidationErrors | null {
    this._control = control;
    return null;
  }
}
@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [BsPasswordField],
  declarations: [BsPasswordField]
})
export class BsPasswordFieldModule { }
