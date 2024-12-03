import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F303Component } from './f303.component';

describe('F303Component', () => {
  let component: F303Component;
  let fixture: ComponentFixture<F303Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F303Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
