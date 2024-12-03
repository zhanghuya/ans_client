import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F201Component } from './f201.component';

describe('F201Component', () => {
  let component: F201Component;
  let fixture: ComponentFixture<F201Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F201Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
