import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F305Component } from './f305.component';

describe('F305Component', () => {
  let component: F305Component;
  let fixture: ComponentFixture<F305Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F305Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F305Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
