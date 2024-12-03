import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F109Component } from './f109.component';

describe('F109Component', () => {
  let component: F109Component;
  let fixture: ComponentFixture<F109Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F109Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
