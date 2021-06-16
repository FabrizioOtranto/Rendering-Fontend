import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniprojectsecondviewComponent } from './miniprojectsecondview.component';

describe('MiniprojectsecondviewComponent', () => {
  let component: MiniprojectsecondviewComponent;
  let fixture: ComponentFixture<MiniprojectsecondviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniprojectsecondviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniprojectsecondviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
