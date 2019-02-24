import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class MoviesService {

  constructor(private http: HttpClient) { }

  async fetchMovies() {
    const response = await this.http.get(environment.moviesUrl).toPromise();
    return response;
  }
}
