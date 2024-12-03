import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S003Component } from './s003.component';

describe('S003Component', () => {
  let component: S003Component;
  let fixture: ComponentFixture<S003Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S003Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
