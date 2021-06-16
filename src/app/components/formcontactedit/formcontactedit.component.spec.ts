import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcontacteditComponent } from './formcontactedit.component';

describe('FormcontacteditComponent', () => {
  let component: FormcontacteditComponent;
  let fixture: ComponentFixture<FormcontacteditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcontacteditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcontacteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
