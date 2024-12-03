import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F105Component } from './f105.component';

describe('F105Component', () => {
  let component: F105Component;
  let fixture: ComponentFixture<F105Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F105Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
