# Ngx-Bootstrap-Form-Builder

This module will help you to make bootstrap forms and their  validation easy.

## Install

1. Install by running: `npm install --save ngx-bootstrap-form-builder`
2. Install bootstrap by running: `npm install --save bootstrap`
3. Add `NgxBootstrapFormBuilderModule` to your `app.module.ts` imports:

```ts
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxBootstrapFormBuilderModule } from 'ngx-bootstrap-form-builder';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxBootstrapFormBuilderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Usage
This module has its own fields to help you to create poweful forms with validation easy.

### app.component.html
```html
<div class="container mt-2">
  <h2>Demo</h2>
  <hr>
  <form [formGroup]="frmGroup" (validSubmit)="formSubmit($event)">
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <bs-text-field label="Name" placeholder="Your name goes here" formControlName="name"></bs-text-field>
      </div>
      <div class="col-sm-12 col-md-6">
        <bs-text-field label="Last name" placeholder="optional" formControlName="lastName"></bs-text-field>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <bs-text-field label="Email" placeholder="my_account@gmail.com" formControlName="email"></bs-text-field>
      </div>
      <div class="col-sm-12 col-md-6">
        <bs-drop-down-field label="Gender" [items]="genders" keyValue="id" textValue="label" formControlName="gender">
        </bs-drop-down-field>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">
      Send
    </button>
  </form>
</div>
```

### app.component.ts
```ts
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public frmGroup: FormGroup;
  public genders: any[];

  constructor() {
    this.frmGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl(''),
      email: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required])
    });
    this.genders = [{ id: 'M', label: 'Male' }, { id: 'F', label: 'Famale' }];
  }

  public formSubmit(data: any): void {
    console.log(data);
  }
}

```

## Available fields

Text Field: `<bs-text-field></bs-text-field>`

| Atribute | Data type | Description |
| -------- | ----- | ----------- |
| id       | `string`  | Id assigned to html control. If it is not provided a random will assigned. |
| name     | `string`  | Name assigned to html control. If it is not provided a random will assigned. |
| label    | `string`  | This atribute will assign a bootstrap label for the field. If it is not provided html label will not exists. |
| placeholder | `string` | Placeholder assigned to html control. |
| disabled | `boolean` | Enable / Disable field. Default: "false" |
| showErrorDescription | `boolean` | Show / Hide error message when the field is invalid. Default: "true" |
| faIcon | `string` | Adds an icon to the field. This attribute requires Font Awesome installed in your project. Default: "" |
| textIcon | `string` | Adds a character as an icon to the field. Default: "" |
| value | `string` | Value assigned to the field. Default: "" |
| class | `string` | Custom CSS classes to be assigned to field container. Default: "mb-2" |