import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { VideosComponent } from './videos/videos.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { OwlModule } from 'ngx-owl-carousel';
import { SafePipe } from './safe.pipe';
import { ToastComponent } from './toast/toast.component';
import { ToasterContainerComponent } from './toast/toaster-container.component';
import { VideoInterceptor } from './interceptors/Video.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    VideoPlayerComponent,
    SafePipe,
    ToastComponent,
    ToasterContainerComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, OwlModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: VideoInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {}
