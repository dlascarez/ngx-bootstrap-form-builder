import { Directive, Host, HostBinding, Input, Optional, SkipSelf } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Directive({
    selector: '[formControlName],[formControl]'
})
export class FormControlHandlerDirective {
    @Input() public formControlName: string = '';
    @Input() public formControl: string = '';

    @HostBinding("class.is-valid")
    get validClass() {
        if (!this.control) {
            return false;
        }
        return (
            this.control.valid &&
            (this.control.touched || this.control.dirty)
        );
    }

    @HostBinding("class.is-invalid")
    get invalidClass() {
        if (!this.control) {
            return false;
        }
        return (
            this.control.invalid &&
            this.control.touched &&
            this.control.dirty
        );
    }

    constructor(@Optional() @Host() @SkipSelf() private control: ControlContainer) {
    }
}
