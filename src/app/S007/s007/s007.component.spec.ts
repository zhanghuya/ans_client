import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S007Component } from './s007.component';

describe('S007Component', () => {
  let component: S007Component;
  let fixture: ComponentFixture<S007Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S007Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
