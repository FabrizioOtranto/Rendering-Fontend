import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcontactsComponent } from './formcontacts.component';

describe('FormcontactsComponent', () => {
  let component: FormcontactsComponent;
  let fixture: ComponentFixture<FormcontactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcontactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcontactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
