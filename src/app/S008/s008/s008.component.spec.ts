import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S008Component } from './s008.component';

describe('S008Component', () => {
  let component: S008Component;
  let fixture: ComponentFixture<S008Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S008Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
