import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../../shared/movies.service';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-page-video-profile',
  templateUrl: './page-video-profile.component.html',
  styleUrls: ['./page-video-profile.component.css']
})
export class PageVideoProfileComponent implements OnInit {

  movie: Movie = null;


  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit() {
    this.setupMovie();
  }

  async setupMovie() {
    const id = this.route.snapshot.params.id;
    this.movie = await this.moviesService.fetchMovie(id);
  }

}
