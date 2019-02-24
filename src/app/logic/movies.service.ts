import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Movies } from './interfaces/movies.interface';

@Injectable()
export class MoviesService {

  constructor(private http: HttpClient) { }

  fetchMovies() {
    return <Promise<Movies>>this.http.get(environment.moviesUrl).toPromise();
  }

  async fetchMovie(id: string) {
    return (await this.fetchMovies()).find( movie => movie.id === id);
  }
}
