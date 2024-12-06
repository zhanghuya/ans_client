import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S020Component } from './s020.component';

describe('S020Component', () => {
  let component: S020Component;
  let fixture: ComponentFixture<S020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S020Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
