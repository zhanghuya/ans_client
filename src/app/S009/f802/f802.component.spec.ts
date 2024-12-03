import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F802Component } from './f802.component';

describe('F802Component', () => {
  let component: F802Component;
  let fixture: ComponentFixture<F802Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F802Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F802Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
