import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulBannerComponent } from './successful-banner.component';

describe('SuccessfulBannerComponent', () => {
  let component: SuccessfulBannerComponent;
  let fixture: ComponentFixture<SuccessfulBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfulBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
