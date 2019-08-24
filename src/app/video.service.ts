import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const headers = new HttpHeaders({
  'Content-Type': 'application/json; charset=utf-8',
  source: 'web'
});

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private url = 'https://valuefy-assignment-x.herokuapp.com/api/getVideos';
  videos = [];
  selectedVideo:any = {};
  constructor(private http: HttpClient) {}
  getVideos(): Observable<any> {
    return this.http.get<any>(this.url, { headers }).pipe(
      tap(_ => console.log('fetched videos')),
      catchError(this.handleError<any>('getVideos', []))
    );
  }

  getSelectedVideo() {
    return this.selectedVideo;
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console i nstead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
