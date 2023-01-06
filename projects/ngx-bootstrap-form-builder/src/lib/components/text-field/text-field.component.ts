import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input, NgModule } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RandomString } from '../../classes/random-string.class';

export const TEXTFIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BsTextField),
  multi: true
};
@Component({
  selector: 'bs-text-field',
  providers: [TEXTFIELD_VALUE_ACCESSOR],
  templateUrl: './text-field.component.html',
  styleUrls: ['../common-component.css']
})
export class BsTextField implements ControlValueAccessor {
  @Input() public id: string = RandomString.create();
  @Input() public label?: string;
  @Input() public placeholder?: string;
  @Input() public faIcon?: string;
  @Input() public textIcon?: string;
  @Input() public name: string = '';
  @Input() public class: string = '';
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
  private _value: string = '';
  private _onChange: (_: any) => void = () => { };
  private _onTouched: () => void = () => { };

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
}
@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [BsTextField],
  declarations: [BsTextField]
})
export class BsTextFieldModule { }
