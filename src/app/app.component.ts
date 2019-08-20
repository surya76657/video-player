import { Component } from '@angular/core';
import { VideoService } from './video.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Video Player';
  videos = [];
  constructor(private videoService: VideoService) {}
  ngOnInit() {
    this.getVideos();
    console.log(this.videos);
  }
  getVideos(): void {
    this.videoService.getVideos().subscribe(video => {
      this.videos = video;
      console.log({ video });
    });
  }
}
