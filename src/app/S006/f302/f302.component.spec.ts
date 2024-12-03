import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F302Component } from './f302.component';

describe('F302Component', () => {
  let component: F302Component;
  let fixture: ComponentFixture<F302Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F302Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
