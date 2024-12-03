import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F307Component } from './f307.component';

describe('F307Component', () => {
  let component: F307Component;
  let fixture: ComponentFixture<F307Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F307Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F307Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
