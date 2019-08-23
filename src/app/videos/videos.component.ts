import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos = [];
  selectedItem;
  selectedIndex;
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
  public selectVideo(video) {
    console.log({ video });
    this.videoService.selectedVideo = video;
  }
  getSelectedVideoIndex() {
    return this.videos.indexOf(d => d.name === this.videoService.selectedVideo.name) || 0;
  }
}
