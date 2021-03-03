import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ProductsComponent } from './components/products/products.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { UsersComponent } from './components/users/users.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';

import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment.prod';
import { SmallBoxesComponent } from './components/dashboard/small-boxes/small-boxes.component';
import { TopRatedComponent } from './components/dashboard/top-rated/top-rated.component';

import { IvyCarouselModule } from 'angular-responsive-carousel';
import { AdduserComponent } from './components/users/adduser/adduser.component';
import { EdituserComponent } from './components/users/edituser/edituser.component';
import { EditproductComponent } from './components/products/editproduct/editproduct.component';
import { EditreviewComponent } from './components/reviews/editreriew/editreriew.component';
import { SearchfilterPipe } from './components/users/searchfilter.pipe';
import { GroupbyComponent } from './components/products/groupby/groupby.component';

import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { StatisticService } from './services/statistic.service';
import { AuthGuard } from './auth.guard';
import { HighlightDirective } from './components/statistics/highlight.directive';
import { CommonModule, SlicePipe } from '@angular/common';

const config: SocketIoConfig = { url: environment.showroomUrl, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ReviewsComponent,
    UsersComponent,
    StatisticsComponent,
    LoginComponent,
    DashboardComponent,
    AddProductComponent,
    SmallBoxesComponent,
    TopRatedComponent,
    AdduserComponent,
    EdituserComponent,
    EditproductComponent,
    EditreviewComponent,
    SearchfilterPipe,
    GroupbyComponent,
    HighlightDirective,
    EditreviewComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule,
    IvyCarouselModule,
    Ng2CarouselamosModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [StatisticService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
