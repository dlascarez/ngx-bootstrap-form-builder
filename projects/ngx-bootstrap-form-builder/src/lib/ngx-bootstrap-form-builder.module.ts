import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { TextFieldComponent } from './components/text-field/text-field.component';
import { PasswordFieldComponent } from './components/password-field/password-field.component';
import { NumberFieldComponent } from './components/number-field/number-field.component';
import { EmailFieldComponent } from './components/email-field/email-field.component';
import { DropDownFieldComponent } from './components/drop-down-field/drop-down-field.component';

@NgModule({
  declarations: [
    TextFieldComponent,
    PasswordFieldComponent,
    NumberFieldComponent,
    EmailFieldComponent,
    DropDownFieldComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TextFieldComponent,
    PasswordFieldComponent,
    NumberFieldComponent,
    EmailFieldComponent,
    DropDownFieldComponent
  ]
})
export class NgxBootstrapFormBuilderModule { }
