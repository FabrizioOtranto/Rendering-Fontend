import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateminiprojectComponent } from './createminiproject.component';

describe('CreateminiprojectComponent', () => {
  let component: CreateminiprojectComponent;
  let fixture: ComponentFixture<CreateminiprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateminiprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateminiprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
