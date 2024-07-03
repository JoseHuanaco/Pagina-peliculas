import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VideosService, Movie } from 'src/app/services/videos.service';

@Component({
  selector: 'app-adm-vid',
  templateUrl: './adm-vid.component.html',
  styleUrls: ['./adm-vid.component.css']
})
export class AdmVidComponent implements OnInit {

  movies: Movie[] = [];
  editingMovie: Movie = {
    name: '',
    coverUrl: '',
    videoUrl: ''
  };

  constructor(private videos: VideosService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.videos.getMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }

  editMovie(movie: Movie): void {
    this.editingMovie = { ...movie };
  }

  updateMovie(): void {
    if (this.editingMovie) {
      this.videos.updateMovie(this.editingMovie).subscribe(() => {
        this.loadMovies();
      });
    }
  }

  deleteMovie(movieId?: string): void {
    if (!movieId) {
      console.error('El ID de la pelicula es indefinido');
      return;
    }

    this.videos.deleteMovie(movieId).subscribe(() => {
      this.loadMovies();
    });
  }

}
