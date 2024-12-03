import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F111Component } from './f111.component';

describe('F111Component', () => {
  let component: F111Component;
  let fixture: ComponentFixture<F111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F111Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
