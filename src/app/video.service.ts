import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ToasterService } from './toaster.service';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private url = 'https://valuefy-assignment-x.herokuapp.com/api/getVideos';
  videos = [];
  selectedVideo: any = {};
  constructor(private http: HttpClient, private toaster: ToasterService) {}
  getVideos(): Observable<any> {
    return this.http.get(this.url).pipe(
      tap(_ => {
        this.showSuccessToaster();
        console.log('fetched videos');
      }),
      catchError(this.handleError<any>('getVideos', []))
    );
  }

  getSelectedVideo() {
    return this.selectedVideo;
  }

  showSuccessToaster() {
    this.toaster.show('success', 'Success', 'Video is fetched');
  }
  showErrorToaster({ error }) {
    this.toaster.show('error', 'ERROR', error.message);
  }
  showWarningToaster() {
    this.toaster.show('warning', 'Check it out!', 'This is a warning alert', 3000);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error): Observable<T> => {
      this.showErrorToaster(error);

      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console i nstead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
