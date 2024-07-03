import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { VideosService, Movie } from 'src/app/services/videos.service';

@Component({
  selector: 'app-subir-vid',
  templateUrl: './subir-vid.component.html',
  styleUrls: ['./subir-vid.component.css']
})
export class SubirVidComponent {

  movie: Movie = {
    coverUrl: '',
    name: '',
    videoUrl: ''
  };

  constructor(private videos: VideosService, private router: Router) {}

  saveMovie(): void {
    this.videos.createMovie(this.movie).subscribe(() => {
      this.router.navigate(['/main']);
    });
  }

}
