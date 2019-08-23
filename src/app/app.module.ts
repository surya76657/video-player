import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { VideosComponent } from './videos/videos.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { SafePipe } from './safe.pipe';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

@NgModule({
  declarations: [AppComponent, VideosComponent, VideoPlayerComponent, SafePipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, Ng2CarouselamosModule],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
