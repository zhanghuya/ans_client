import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S010Component } from './s010.component';

describe('S010Component', () => {
  let component: S010Component;
  let fixture: ComponentFixture<S010Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S010Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
