import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageVideoListComponent } from './components/page-video-list/page-video-list.component';
import { PageVideoProfileComponent } from './components/page-video-profile/page-video-profile.component';


const routes: Routes = [
  {
    path: 'page-video-list',
    component: PageVideoListComponent
  },
  {
    path: 'page-video-profile',
    component: PageVideoProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogicRoutingModule { }
