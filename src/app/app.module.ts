import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomsidenaveComponent } from './components/customsidenave/customsidenave.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContentComponent } from './components/content/content.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomsidenaveComponent,
    DashboardComponent,
    ContentComponent,
    AnalyticsComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
