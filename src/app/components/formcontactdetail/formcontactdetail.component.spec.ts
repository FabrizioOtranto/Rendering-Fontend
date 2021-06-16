import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcontactdetailComponent } from './formcontactdetail.component';

describe('FormcontactdetailComponent', () => {
  let component: FormcontactdetailComponent;
  let fixture: ComponentFixture<FormcontactdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcontactdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcontactdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
