import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMasterDataComponent } from './get-master-data.component';

describe('GetMasterDataComponent', () => {
  let component: GetMasterDataComponent;
  let fixture: ComponentFixture<GetMasterDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetMasterDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetMasterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
