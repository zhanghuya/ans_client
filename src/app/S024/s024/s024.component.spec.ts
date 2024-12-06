import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S024Component } from './s024.component';

describe('S024Component', () => {
  let component: S024Component;
  let fixture: ComponentFixture<S024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
