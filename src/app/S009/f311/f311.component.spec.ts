import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F311Component } from './f311.component';

describe('F311Component', () => {
  let component: F311Component;
  let fixture: ComponentFixture<F311Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F311Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
