import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos = [];
  constructor(public videoService: VideoService) {}
  ngOnInit() {
    this.getVideos();
  }
  getVideos(): void {
    this.videoService.getVideos().subscribe(video => {
      this.videos = video;
      this.videoService.selectedVideo = video[0];
    });
  }
  getSelectedVideoIndex() {
    return this.videos.indexOf(d => d.name === this.videoService.selectedVideo.name) || 0;
  }

  selectVideo(video) {
    this.videoService.selectedVideo = video;
  }
}
