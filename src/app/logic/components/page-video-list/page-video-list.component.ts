import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../shared/movies.service';
import { Movies } from '../../interfaces/movies.interface';

@Component({
  selector: 'app-page-video-list',
  templateUrl: './page-video-list.component.html',
  styleUrls: ['./page-video-list.component.css']
})
export class PageVideoListComponent implements OnInit {

  public movies: Movies = [];
  public foundMovies: Movies = [];

  constructor(private moviesService: MoviesService) { }

  async ngOnInit() {
    this.getAllMovies();
  }

  async getAllMovies() {
    this.movies = await this.moviesService.fetchMovies();
  }

  async logMovies() {
    const response = await this.moviesService.fetchMovies();
    console.log(response);
    return response;
  }

  search(event) {
    const searchTerm = event.target.value.toLowerCase();
    const foundMovies = this.movies.filter( movie =>  {
      const string = movie.title + movie.description;
      return string.toLowerCase().includes(searchTerm);
    });
    this.foundMovies = foundMovies;
  }

}



