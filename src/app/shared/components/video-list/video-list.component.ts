import { Component, Input, OnInit } from '@angular/core';
import { Movies } from '../../../logic/interfaces/movies.interface';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Input()
  movies: Movies = [];

  constructor() { }

  ngOnInit() {
  }

}
