import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageVideoListComponent } from './components/page-video-list/page-video-list.component';
import { PageVideoNotFoundComponent } from './components/page-video-not-found/page-video-not-found.component';
import { PageVideoProfileComponent } from './components/page-video-profile/page-video-profile.component';
import { LogicRoutingModule } from './logic-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PageVideoListComponent, PageVideoNotFoundComponent, PageVideoProfileComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    LogicRoutingModule,
    SharedModule
  ],
  exports: []
})
export class LogicModule { }
