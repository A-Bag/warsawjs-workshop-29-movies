import { Component, Input, OnInit } from '@angular/core';
import { Movies } from '../../logic/interfaces/movies.interface';
import { MoviesService } from '../../shared/movies.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

  @Input()
  bestMovies: Movies = [];

  constructor(private moviesService: MoviesService) { }

  async ngOnInit() {
    this.bestMovies = await this.moviesService.fetchBestMovies();
  }

}
