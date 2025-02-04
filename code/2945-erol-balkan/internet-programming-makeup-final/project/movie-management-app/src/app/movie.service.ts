import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieDataUrl = 'assets/movie-data.json'; // Path to the JSON file

  constructor(private http: HttpClient) { }

  // Method to fetch movie data
  getMovies(): Observable<any> {
    return this.http.get<any>(this.movieDataUrl);
  }
}
