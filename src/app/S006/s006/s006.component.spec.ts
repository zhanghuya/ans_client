import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S006Component } from './s006.component';

describe('S006Component', () => {
  let component: S006Component;
  let fixture: ComponentFixture<S006Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S006Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
