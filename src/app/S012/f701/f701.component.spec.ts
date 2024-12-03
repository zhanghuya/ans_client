import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F701Component } from './f701.component';

describe('F701Component', () => {
  let component: F701Component;
  let fixture: ComponentFixture<F701Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F701Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F701Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
