import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S011Component } from './s011.component';

describe('S011Component', () => {
  let component: S011Component;
  let fixture: ComponentFixture<S011Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S011Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
