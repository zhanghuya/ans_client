import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F102Component } from './f102.component';

describe('F102Component', () => {
  let component: F102Component;
  let fixture: ComponentFixture<F102Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F102Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
