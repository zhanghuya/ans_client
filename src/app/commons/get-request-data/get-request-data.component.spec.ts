import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRequestDataComponent } from './get-request-data.component';

describe('GetRequestDataComponent', () => {
  let component: GetRequestDataComponent;
  let fixture: ComponentFixture<GetRequestDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetRequestDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetRequestDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
