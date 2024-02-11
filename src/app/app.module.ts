import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomsidenaveComponent } from './components/customsidenave/customsidenave.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContentComponent } from './components/content/content.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {HttpClientModule} from "@angular/common/http";
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MenuItemAddDialogComponent } from './components/menu-item/dialog/menu-item-add-dialog/menu-item-add-dialog.component';
import { MenuItemDetailsDialogComponent } from './components/menu-item/dialog/menu-item-details-dialog/menu-item-details-dialog.component';
import { MenuItemListComponent } from './components/menu-item/menu-item-list/menu-item-list.component';
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  HeaderComponent,
  RowComponent
} from "@coreui/angular";
import {TranslateModule} from "@ngx-translate/core";
import {MatTooltip} from "@angular/material/tooltip";
import { MatSelectSearchComponent } from './shared/mat-select-search/mat-select-search.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomsidenaveComponent,
    DashboardComponent,
    ContentComponent,
    AnalyticsComponent,
    CommentsComponent,
    MenuItemAddDialogComponent,
    MenuItemDetailsDialogComponent,
    MenuItemListComponent,
    MatSelectSearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    CommonModule,
    MatSidenavModule,
    CarouselModule.forRoot(),
    HttpClientModule,
    ColComponent,
    CardComponent,
    HeaderComponent,
    CardHeaderComponent,
    RowComponent,
    CardBodyComponent,
    TranslateModule,
    MatTooltip
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
