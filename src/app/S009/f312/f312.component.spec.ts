import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F312Component } from './f312.component';

describe('F312Component', () => {
  let component: F312Component;
  let fixture: ComponentFixture<F312Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F312Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
