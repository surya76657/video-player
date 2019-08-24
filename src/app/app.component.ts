import { Component } from '@angular/core';
import { VideoService } from './video.service';
import { ToasterService } from './toaster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Video Player';
  videos = [];
  constructor(private videoService: VideoService, private toaster: ToasterService) {}
  ngOnInit() {
    this.getVideos();
    console.log(this.videos);
  }
  showSuccessToaster() {
    this.toaster.show('success', 'Success', 'Video is fetched');
  }
  showErrorToaster() {
    this.toaster.show('error', 'ERROR', 'Something Went wrong');
  }
  showWarningToaster() {
    this.toaster.show('warning', 'Check it out!', 'This is a warning alert', 3000);
  }

  getVideos(): void {
    this.videoService.getVideos().subscribe(
      video => {
        this.videos = video;
        console.log({ video });
        this.showSuccessToaster();
      },
      err => {
        this.showErrorToaster()
        console.log(err);
      }
    );
  }
  getSelectedVideo() {}
}
