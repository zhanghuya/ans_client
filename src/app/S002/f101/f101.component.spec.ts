import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F101Component } from './f101.component';

describe('F101Component', () => {
  let component: F101Component;
  let fixture: ComponentFixture<F101Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F101Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
