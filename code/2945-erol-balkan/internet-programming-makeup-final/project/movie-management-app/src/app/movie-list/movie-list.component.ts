import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importing CommonModule
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  standalone: true, // Marking the component as standalone
  imports: [CommonModule] // Importing CommonModule to use *ngFor
})
export class MovieListComponent {
  movies: any[] = []; // Array to hold movie data

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies(): void {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data.movies; // Store the movie data
    });
  }
}
