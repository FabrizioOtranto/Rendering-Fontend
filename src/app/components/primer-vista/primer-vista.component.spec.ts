import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerVistaComponent } from './primer-vista.component';

describe('PrimerVistaComponent', () => {
  let component: PrimerVistaComponent;
  let fixture: ComponentFixture<PrimerVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimerVistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
