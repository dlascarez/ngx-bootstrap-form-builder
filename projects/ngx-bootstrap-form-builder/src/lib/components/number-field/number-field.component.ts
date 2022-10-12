import { Component, Input, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { RandomString } from '../../classes/random-string.class';
import { CommonComponent } from '../common-component';

@Component({
  selector: 'bs-number-field',
  templateUrl: './number-field.component.html',
  styles: []
})
export class NumberFieldComponent extends CommonComponent implements ControlValueAccessor {
  @Input() public id: string;
  @Input() public name: string;
  @Input() public label?: string;
  @Input() public placeholder?: string;
  @Input() public disabled: boolean;

  @Input() public faIcon?: string;
  @Input() public textIcon?: string;
  
  public value: number;
  public onTouched = () => { };
  public onChange = (value: number) => { };

  public get isInvalid(): boolean {
    return (this.formControl.invalid && (this.formControl.dirty || this.formControl.touched))!;
  }
  public get isValid(): boolean {
    return (this.formControl.valid && (this.formControl.dirty || this.formControl.touched))!;
  }
  public get hasIcon(): boolean {
    return (this.faIcon ?? '') !== '' || (this.textIcon ?? '') !== '';
  }

  constructor(@Self() public formControl: NgControl) {
    super();
    this.formControl.valueAccessor = this;
    this.id = RandomString.create();
    this.name = this.id;
    this.disabled = false;
    this.value = null as any;
  }

  public registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public writeValue(value: number): void {
    this.value = value;
    this.onChange(value);
  }

  public onChangeValue(e: any): void {
    const numberValue = (e.target.value ?? '') !== '' ? Number(e.target.value) : null as any;
    this.writeValue(numberValue);
  }

  public setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }
}
