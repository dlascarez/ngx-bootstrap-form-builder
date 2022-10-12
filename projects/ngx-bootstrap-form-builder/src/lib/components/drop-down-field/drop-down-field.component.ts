import { Component, EventEmitter, Input, Output, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { RandomString } from '../../classes/random-string.class';
import { CommonComponent } from '../common-component';

@Component({
  selector: 'bs-drop-down-field',
  templateUrl: './drop-down-field.component.html',
  styleUrls: ['../common-component.css']
})
export class DropDownFieldComponent extends CommonComponent implements ControlValueAccessor {
  @Input() public id: string;
  @Input() public name: string;
  @Input() public label?: string;
  @Input() public disabled: boolean;
  @Input() public items: any[];
  @Input() public keyValue: string;
  @Input() public textValue: string;
  @Input() public showErrorDescription: boolean;
  @Input() public showSelectOne: boolean;
  @Input() public class: string;
  @Input() public value: string;
  @Output() public valueChanged: EventEmitter<any>;

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
    this.items = [];
    this.keyValue = 'id';
    this.textValue = 'text';
    this.value = '';
    this.valueChanged = new EventEmitter();
    this.showErrorDescription = true;
    this.showSelectOne = true;
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
    this.valueChanged?.emit(e.target.value);
    this.writeValue(e.target.value);
  }

  public setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }
}
