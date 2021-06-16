import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Video3DComponent } from './video3-d.component';

describe('Video3DComponent', () => {
  let component: Video3DComponent;
  let fixture: ComponentFixture<Video3DComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Video3DComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Video3DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
