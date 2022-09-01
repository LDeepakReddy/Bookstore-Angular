import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GetallbooksComponent } from './Components/getallbooks/getallbooks.component';
import { BookviewComponent } from './Components/bookview/bookview.component';
import { AuthGuard } from './Authentication/auth.guard';
import { CartComponent } from './Components/cart/cart.component';
import { OrderComponent } from './Components/order/order.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';


const routes: Routes = [
  {path:'', redirectTo:"/login", pathMatch:'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/dashboard/getallbooks', pathMatch: 'full', },
      { path: 'getallbooks', component: GetallbooksComponent },
      { path: 'bookview/:bookId', component: BookviewComponent },
      { path: 'cart', component: CartComponent },
      {path:'wishlist',component:WishlistComponent},
      { path: 'order', component: OrderComponent },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
