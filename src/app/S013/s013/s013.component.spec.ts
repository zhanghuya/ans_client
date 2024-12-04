import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S013Component } from './s013.component';

describe('S013Component', () => {
  let component: S013Component;
  let fixture: ComponentFixture<S013Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S013Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
