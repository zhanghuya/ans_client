import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F112Component } from './f112.component';

describe('F112Component', () => {
  let component: F112Component;
  let fixture: ComponentFixture<F112Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F112Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
