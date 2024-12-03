import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F103Component } from './f103.component';

describe('F103Component', () => {
  let component: F103Component;
  let fixture: ComponentFixture<F103Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F103Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
