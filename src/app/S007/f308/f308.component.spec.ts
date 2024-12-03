import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F308Component } from './f308.component';

describe('F308Component', () => {
  let component: F308Component;
  let fixture: ComponentFixture<F308Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F308Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F308Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
