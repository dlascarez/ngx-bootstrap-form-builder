import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBootstrapFormBuilderComponent } from './ngx-bootstrap-form-builder.component';

describe('NgxBootstrapFormBuilderComponent', () => {
  let component: NgxBootstrapFormBuilderComponent;
  let fixture: ComponentFixture<NgxBootstrapFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxBootstrapFormBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxBootstrapFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
