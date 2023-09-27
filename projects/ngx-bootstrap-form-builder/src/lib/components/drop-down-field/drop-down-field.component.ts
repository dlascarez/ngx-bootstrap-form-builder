import { CommonModule } from '@angular/common';
import { Component, EventEmitter, forwardRef, Input, NgModule, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { AbstractControl, ControlValueAccessor, FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { RandomString } from '../../classes/random-string.class';

export const DROPDOWNFIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BsDropDownField),
  multi: true
};
export const DROPDOWNFIELD_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => BsDropDownField),
  multi: true
};
@Component({
  selector: 'bs-drop-down-field',
  providers: [DROPDOWNFIELD_VALUE_ACCESSOR, DROPDOWNFIELD_VALIDATOR],
  templateUrl: './drop-down-field.component.html',
  styleUrls: ['../common-component.css']
})
export class BsDropDownField implements ControlValueAccessor, Validator {
  @Input() public id: string = RandomString.create();
  @Input() public label?: string;
  @Input() public name: string = this.id;
  @Input() public class: string = 'mb-2';
  @Input() public disabled: boolean = false;
  @Input() public required: boolean = false;
  @Input() public items: any[] = [];
  @Input() public keyValue: string = 'id';
  @Input() public textValue: string = 'text';
  @Input() public showSelectOne: boolean = true;
  @Input() public selectOneText: string = '-- Please choose one --';

  @Input() public get value(): string {
    return this._value;
  }
  set value(obj: string) {
    if (obj !== this._value) {
      this._onChange(obj);
      this._value = obj;
      this.valueChanged?.emit(this._value);
    }
  }
  @Output() public valueChanged: EventEmitter<any> = new EventEmitter();

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
      this._value = (value ?? '').toString();
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
  exports: [BsDropDownField],
  declarations: [BsDropDownField]
})
export class BsDropDownFieldModule { }
