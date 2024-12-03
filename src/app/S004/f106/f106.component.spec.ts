import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F106Component } from './f106.component';

describe('F106Component', () => {
  let component: F106Component;
  let fixture: ComponentFixture<F106Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F106Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
