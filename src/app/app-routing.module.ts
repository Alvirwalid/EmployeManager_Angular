import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ContentComponent} from "./components/content/content.component";
import {AnalyticsComponent} from "./components/analytics/analytics.component";
import {CommentsComponent} from "./components/comments/comments.component";
import {MenuItemListComponent} from "./components/menu-item/menu-item-list/menu-item-list.component";

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'menuitemList'
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

  {
    path:'menuitemList',component:MenuItemListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
