import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S002Component } from './s002.component';

describe('S002Component', () => {
  let component: S002Component;
  let fixture: ComponentFixture<S002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S002Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
