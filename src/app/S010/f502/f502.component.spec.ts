import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F502Component } from './f502.component';

describe('F502Component', () => {
  let component: F502Component;
  let fixture: ComponentFixture<F502Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F502Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F502Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
