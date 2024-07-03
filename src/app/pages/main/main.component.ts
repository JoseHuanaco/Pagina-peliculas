import { Component, OnInit } from '@angular/core';

import { VideosService, Movie } from 'src/app/services/videos.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  data: Movie[] = [];

  constructor(private videos:VideosService){}

  ngOnInit(): void {
    this.videos.getMovies().subscribe((peliculas) => {
      this.data = peliculas;
    });
  } 

}
