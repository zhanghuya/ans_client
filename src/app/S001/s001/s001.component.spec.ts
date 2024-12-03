import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S001Component } from './s001.component';

describe('S001Component', () => {
  let component: S001Component;
  let fixture: ComponentFixture<S001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S001Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
