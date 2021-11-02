import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuccessfulBannerComponent } from './successful-banner/successful-banner.component';
import { ErrorBannerComponent } from './error-banner/error-banner.component';
import { AdvertisementBannerComponent } from './advertisement-banner/advertisement-banner.component';
import { BannersContainerComponent } from './banners-container/banners-container.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessfulBannerComponent,
    ErrorBannerComponent,
    AdvertisementBannerComponent,
    BannersContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
