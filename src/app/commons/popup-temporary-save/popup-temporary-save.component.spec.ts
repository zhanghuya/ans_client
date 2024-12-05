import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupTemporarySaveComponent } from './popup-temporary-save.component';

describe('PopupTemporarySaveComponent', () => {
  let component: PopupTemporarySaveComponent;
  let fixture: ComponentFixture<PopupTemporarySaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupTemporarySaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupTemporarySaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
