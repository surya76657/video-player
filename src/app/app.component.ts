import { Component, OnInit } from '@angular/core';
import { VideoService } from './video.service';
import { ToasterService } from './toaster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Video Player';
  videos = [];
  constructor(private videoService: VideoService, private toaster: ToasterService) {}
  ngOnInit() {
    this.getVideos();
  }
  getVideos() {
    this.videoService.getVideos().subscribe(video => {
      this.videos = video;
    });
  }
  getSelectedVideo() {}
}
