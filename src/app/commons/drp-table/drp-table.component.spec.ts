import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrpTableComponent } from './drp-table.component';

describe('DrpTableComponent', () => {
  let component: DrpTableComponent;
  let fixture: ComponentFixture<DrpTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrpTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrpTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
