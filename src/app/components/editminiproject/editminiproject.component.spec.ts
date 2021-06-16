import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditminiprojectComponent } from './editminiproject.component';

describe('EditminiprojectComponent', () => {
  let component: EditminiprojectComponent;
  let fixture: ComponentFixture<EditminiprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditminiprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditminiprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
