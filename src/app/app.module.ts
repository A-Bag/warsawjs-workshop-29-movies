import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BackgroundColorDirective } from './background-color.directive';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { LogicModule } from './logic/logic.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundColorDirective
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    LogicModule,
    BrowserModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
