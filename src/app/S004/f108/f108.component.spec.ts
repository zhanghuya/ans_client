import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F108Component } from './f108.component';

describe('F108Component', () => {
  let component: F108Component;
  let fixture: ComponentFixture<F108Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F108Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
