import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Movie {
  id?: string;
  coverUrl: string;
  name: string;
  videoUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  private apiUrl = 'https://pag-videos-jchc-default-rtdb.firebaseio.com/peliculas.json';

  constructor(private http: HttpClient) {}

  createMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.apiUrl, movie);
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<{ [key: string]: Movie }>(this.apiUrl).pipe(
      map((responseData) => {
        const moviesArray: Movie[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            moviesArray.push({ ...responseData[key], id: key });
          }
        }
        return moviesArray;
      })
    );
  }

  updateMovie(movie: Movie): Observable<Movie> {
    const url = `https://pag-videos-jchc-default-rtdb.firebaseio.com/peliculas/${movie.id}.json`;
    return this.http.put<Movie>(url, movie);
  }

  deleteMovie(movieId: string): Observable<void> {
    const url = `https://pag-videos-jchc-default-rtdb.firebaseio.com/peliculas/${movieId}.json`;
    return this.http.delete<void>(url);
  } 
}