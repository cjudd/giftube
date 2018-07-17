import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GifsComponent } from './gifs/gifs.component';
import { HttpModule } from '@angular/http';

import { GiftubeApiService } from './giftube-api.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GifsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [GiftubeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
