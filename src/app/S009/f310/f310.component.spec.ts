import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F310Component } from './f310.component';

describe('F310Component', () => {
  let component: F310Component;
  let fixture: ComponentFixture<F310Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F310Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
