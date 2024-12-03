import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F801Component } from './f801.component';

describe('F801Component', () => {
  let component: F801Component;
  let fixture: ComponentFixture<F801Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F801Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F801Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
