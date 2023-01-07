import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Directives
import { FormHandlerDirective } from './directives/form-group.directive';
import { FormControlDirective } from './directives/form-control.directive';

// Components
import { BsTextFieldModule } from './components/text-field/text-field.component';
import { BsNumberFieldModule } from './components/number-field/number-field.component';
import { BsEmailFieldModule } from './components/email-field/email-field.component';
import { BsDropDownFieldModule } from './components/drop-down-field/drop-down-field.component';
import { BsPasswordFieldModule } from './components/password-field/password-field.component';
import { BsTextAreaFieldModule } from './components/text-area-field/text-area-field.component';

@NgModule({
  declarations: [
    FormHandlerDirective,
    FormControlDirective
  ],
  imports: [
    CommonModule,
    BsTextFieldModule,
    BsPasswordFieldModule,
    BsEmailFieldModule,
    BsNumberFieldModule,
    BsDropDownFieldModule,
    BsTextAreaFieldModule
  ],
  exports: [
    BsTextFieldModule,
    BsPasswordFieldModule,
    BsNumberFieldModule,
    BsEmailFieldModule,
    BsDropDownFieldModule,
    FormHandlerDirective,
    FormControlDirective,
    BsTextAreaFieldModule
  ]
})
export class NgxBootstrapFormBuilderModule { }
