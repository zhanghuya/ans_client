import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMasterUpdateComponent } from './get-master-update.component';

describe('GetMasterUpdateComponent', () => {
  let component: GetMasterUpdateComponent;
  let fixture: ComponentFixture<GetMasterUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetMasterUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetMasterUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
