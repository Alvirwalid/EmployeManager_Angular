import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ContentComponent} from "./components/content/content.component";
import {AnalyticsComponent} from "./components/analytics/analytics.component";
import {CommentsComponent} from "./components/comments/comments.component";

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'dashboard'
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'content',component:ContentComponent
  },
  {
    path:'analytics',component:AnalyticsComponent
  },
  {
    path:'comment',component:CommentsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
