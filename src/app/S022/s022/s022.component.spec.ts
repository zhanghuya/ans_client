import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S022Component } from './s022.component';

describe('S022Component', () => {
  let component: S022Component;
  let fixture: ComponentFixture<S022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S022Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
