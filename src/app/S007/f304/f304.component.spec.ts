import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F304Component } from './f304.component';

describe('F304Component', () => {
  let component: F304Component;
  let fixture: ComponentFixture<F304Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F304Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F304Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
