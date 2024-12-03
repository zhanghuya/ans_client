import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F107Component } from './f107.component';

describe('F107Component', () => {
  let component: F107Component;
  let fixture: ComponentFixture<F107Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F107Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
