import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S004Component } from './s004.component';

describe('S004Component', () => {
  let component: S004Component;
  let fixture: ComponentFixture<S004Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S004Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
