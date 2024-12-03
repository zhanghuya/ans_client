import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMasterPreviewComponent } from './get-master-preview.component';

describe('GetMasterPreviewComponent', () => {
  let component: GetMasterPreviewComponent;
  let fixture: ComponentFixture<GetMasterPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetMasterPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetMasterPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
