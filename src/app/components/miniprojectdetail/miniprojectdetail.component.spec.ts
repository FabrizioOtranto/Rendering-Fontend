import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniprojectdetailComponent } from './miniprojectdetail.component';

describe('MiniprojectdetailComponent', () => {
  let component: MiniprojectdetailComponent;
  let fixture: ComponentFixture<MiniprojectdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniprojectdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniprojectdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
