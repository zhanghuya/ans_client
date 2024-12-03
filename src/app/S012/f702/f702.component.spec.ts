import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F702Component } from './f702.component';

describe('F702Component', () => {
  let component: F702Component;
  let fixture: ComponentFixture<F702Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F702Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F702Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
