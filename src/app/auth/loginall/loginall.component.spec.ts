import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginallComponent } from './loginall.component';

describe('LoginallComponent', () => {
  let component: LoginallComponent;
  let fixture: ComponentFixture<LoginallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
