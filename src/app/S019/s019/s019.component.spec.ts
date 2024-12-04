import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S019Component } from './s019.component';

describe('S019Component', () => {
  let component: S019Component;
  let fixture: ComponentFixture<S019Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S019Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
