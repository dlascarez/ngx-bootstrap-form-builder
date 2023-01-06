import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Directives
import { FormHandlerDirective } from './directives/form-group.directive';
import { FormControlHandlerDirective } from './directives/form-control.directive';

// Components
import { BsTextFieldModule } from './components/text-field/text-field.component';
import { PasswordFieldComponent } from './components/password-field/password-field.component';
import { NumberFieldComponent } from './components/number-field/number-field.component';
import { EmailFieldComponent } from './components/email-field/email-field.component';
import { DropDownFieldComponent } from './components/drop-down-field/drop-down-field.component';

@NgModule({
  declarations: [
    PasswordFieldComponent,
    NumberFieldComponent,
    EmailFieldComponent,
    DropDownFieldComponent,
    FormHandlerDirective,
    FormControlHandlerDirective
  ],
  imports: [
    CommonModule,
    BsTextFieldModule
  ],
  exports: [
    BsTextFieldModule,
    PasswordFieldComponent,
    NumberFieldComponent,
    EmailFieldComponent,
    DropDownFieldComponent,
    FormHandlerDirective,
    FormControlHandlerDirective
  ]
})
export class NgxBootstrapFormBuilderModule { }
