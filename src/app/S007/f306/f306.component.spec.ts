import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F306Component } from './f306.component';

describe('F306Component', () => {
  let component: F306Component;
  let fixture: ComponentFixture<F306Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F306Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F306Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
