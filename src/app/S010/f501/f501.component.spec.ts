import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F501Component } from './f501.component';

describe('F501Component', () => {
  let component: F501Component;
  let fixture: ComponentFixture<F501Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F501Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F501Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
