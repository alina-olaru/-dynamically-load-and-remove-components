import { SuccessfulBannerComponent } from './successful-banner/successful-banner.component';
import { ErrorBannerComponent } from './error-banner/error-banner.component';
import { AdvertisementBannerComponent } from './advertisement-banner/advertisement-banner.component';
import { BannersService } from './banner.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private bannersService: BannersService) {}
  ngOnInit(): void {
    this.bannersService.addBanner(AdvertisementBannerComponent);
    setTimeout(() => {
      this.bannersService.addBanner(ErrorBannerComponent);
    }, 300);
    setTimeout(() => {
      this.bannersService.removeBanner(AdvertisementBannerComponent);
    }, 700);
  }
}
