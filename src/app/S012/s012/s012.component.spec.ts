import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S012Component } from './s012.component';

describe('S012Component', () => {
  let component: S012Component;
  let fixture: ComponentFixture<S012Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S012Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
