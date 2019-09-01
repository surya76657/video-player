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
  carouselOptions = {
    margin: 25,
    nav: true,
    navText: ['<div class="nav-btn prev-slide"></div>', '<div class="nav-btn next-slide"></div>'],
    responsiveClass: true,
    responsive: {
      0: { items: 1, nav: true },
      600: { items: 1, nav: true },
      1000: { items: 2, nav: true, loop: false },
      1500: { items: 3, nav: true, loop: false }
    }
  };
  constructor(public videoService: VideoService) { }
  ngOnInit() {
    this.getVideos();
  }
  getVideos(): void {
    this.videoService.getVideos().subscribe(video => {
      this.videos = video;
      this.videoService.selectedVideo = video[0];
    });
  }
  selectVideo = video => {
    this.videoService.selectedVideo = video;
  }
}
