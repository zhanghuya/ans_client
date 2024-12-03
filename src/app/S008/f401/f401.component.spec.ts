import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F401Component } from './f401.component';

describe('F401Component', () => {
  let component: F401Component;
  let fixture: ComponentFixture<F401Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F401Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
