import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { UsersComponent } from './components/users/users.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { AdduserComponent } from './components/users/adduser/adduser.component';
import { EdituserComponent } from './components/users/edituser/edituser.component';
import { EditproductComponent } from './components/products/editproduct/editproduct.component';
import { EditreviewComponent } from './components/reviews/editreriew/editreriew.component';
import { GroupbyComponent } from './components/products/groupby/groupby.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [


  { path: 'products', component: ProductsComponent,canActivate:[AuthGuard] },
  { path: "products/:id", component: EditproductComponent,canActivate:[AuthGuard] },
  { path: "addProduct", component: AddProductComponent ,canActivate:[AuthGuard]},
  { path: "groupByProduct", component: GroupbyComponent ,canActivate:[AuthGuard]},


  { path: 'reviews', component: ReviewsComponent,canActivate:[AuthGuard] },
  { path: "reviews/:id", component: EditreviewComponent ,canActivate:[AuthGuard]},

  { path: 'users', component: UsersComponent ,canActivate:[AuthGuard]},
  { path: 'users/:id', component: EdituserComponent,canActivate:[AuthGuard] },
  { path: "addUser", component: AdduserComponent ,canActivate:[AuthGuard]},

  { path: 'statistics', component: StatisticsComponent,canActivate:[AuthGuard] },
  { path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: "/login", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
