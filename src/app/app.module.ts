import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GifsComponent } from './gifs/gifs.component';

import { GiftubeApiService } from './giftube-api.service';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GifsComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GiftubeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
