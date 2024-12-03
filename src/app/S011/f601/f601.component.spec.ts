import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F601Component } from './f601.component';

describe('F601Component', () => {
  let component: F601Component;
  let fixture: ComponentFixture<F601Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F601Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F601Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
