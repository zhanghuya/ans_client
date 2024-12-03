import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F309Component } from './f309.component';

describe('F309Component', () => {
  let component: F309Component;
  let fixture: ComponentFixture<F309Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F309Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F309Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
