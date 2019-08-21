import { Component, OnInit, ElementRef, ɵConsole } from '@angular/core';
import { VideoService } from '../video.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  // url;
  // selectedVideoUrl;
  name;
  constructor(public videoService: VideoService, private sanitizer: DomSanitizer) {
    // this.selectedVideoUrl = this.videoService.getSelectedVideo().trailer;
  }
  // ngOnInit() {}

  // constructor(
  //   private hostElement: ElementRef,
  // ) { }

  ngOnInit() {}

  public transform(): SafeUrl {
    if (!this.videoService.getSelectedVideo().trailer) {
      return this.sanitizer.bypassSecurityTrustUrl('http://www.youtube.com/embed/6ZfuNTqbHE8');
    }
    console.log(this.sanitizer.bypassSecurityTrustUrl('http://www.youtube.com/embed/6ZfuNTqbHE8'));
    return this.sanitizer.bypassSecurityTrustUrl(this.videoService.getSelectedVideo().trailer);
  }
}
