import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoListItemComponent } from './components/video-list-item/video-list-item.component';
import { MoviesService } from './movies.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MenuComponent, VideoListComponent, VideoListItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    MenuComponent,
    VideoListComponent,
    VideoListItemComponent
  ],
  providers: [
    MoviesService
  ]
})
export class SharedModule { }
