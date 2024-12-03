import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F104Component } from './f104.component';

describe('F104Component', () => {
  let component: F104Component;
  let fixture: ComponentFixture<F104Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F104Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
