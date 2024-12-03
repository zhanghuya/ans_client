import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F301Component } from './f301.component';

describe('F301Component', () => {
  let component: F301Component;
  let fixture: ComponentFixture<F301Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F301Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
