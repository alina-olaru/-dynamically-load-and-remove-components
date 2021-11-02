import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersContainerComponent } from './banners-container.component';

describe('BannersContainerComponent', () => {
  let component: BannersContainerComponent;
  let fixture: ComponentFixture<BannersContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannersContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
