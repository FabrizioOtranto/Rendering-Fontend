import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniprojectadminComponent } from './miniprojectadmin.component';

describe('MiniprojectadminComponent', () => {
  let component: MiniprojectadminComponent;
  let fixture: ComponentFixture<MiniprojectadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniprojectadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniprojectadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
