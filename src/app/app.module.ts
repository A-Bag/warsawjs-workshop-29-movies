import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BackgroundColorDirective } from './shared/directives/background-color.directive';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { LogicModule } from './logic/logic.module';
import { RouterModule } from '@angular/router';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageContactComponent } from './components/page-contact/page-contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundColorDirective,
    PageHomeComponent,
    PageContactComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
