import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S014Component } from './s014.component';

describe('S014Component', () => {
  let component: S014Component;
  let fixture: ComponentFixture<S014Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S014Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
