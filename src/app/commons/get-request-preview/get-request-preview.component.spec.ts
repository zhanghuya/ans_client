import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRequestPreviewComponent } from './get-request-preview.component';

describe('GetRequestPreviewComponent', () => {
  let component: GetRequestPreviewComponent;
  let fixture: ComponentFixture<GetRequestPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetRequestPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetRequestPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
