import { Component, Input, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { RandomString } from '../../classes/random-string.class';
import { CommonComponent } from '../common-component';

@Component({
  selector: 'bs-email-field',
  templateUrl: './email-field.component.html',
  styles: []
})
export class EmailFieldComponent extends CommonComponent implements ControlValueAccessor {
  @Input() public id: string;
  @Input() public name: string;
  @Input() public label?: string;
  @Input() public placeholder?: string;
  @Input() public disabled: boolean;
  @Input() public showErrorDescription?: boolean;
  @Input() public class?: string;

  public value: string;
  public onTouched = () => { };
  public onChange = (value: string) => { };

  public get isInvalid(): boolean {
    return (this.formControl.invalid && (this.formControl.dirty || this.formControl.touched))!;
  }
  public get isValid(): boolean {
    return (this.formControl.valid && (this.formControl.dirty || this.formControl.touched))!;
  }

  constructor(@Self() public formControl: NgControl) {
    super();
    this.formControl.valueAccessor = this;
    this.id = RandomString.create();
    this.name = this.id;
    this.disabled = false;
    this.value = '';
    this.showErrorDescription = true;
    this.class = 'mb-2';
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public writeValue(value: string): void {
    this.value = value;
    this.onChange(value);
  }

  public onChangeValue(e: any): void {
    this.writeValue(e.target.value);
  }

  public setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }
}
