import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './header/login/login.component'
import { RegisterComponent } from './header/register/register.component'
import { EventsComponent } from './pages/events/events.component';
import { HomeComponent} from './pages/home/home.component';
import { SpecialEventsComponent } from './pages/special-events/special-events.component';
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
    ,
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventsComponent
    ,
    pathMatch: 'full'
  },
  {
    path: 'special',
    canActivate: [AuthGuard],
    component: SpecialEventsComponent
    ,
    pathMatch: 'full'
  },
  
  {
    path: 'profile',
    component: ProfileComponent
  }
  ,
  {
    path: 'products/:id',
    component: ProductsComponent
    ,
    pathMatch: 'full'
  }
  ,
  {
    path: 'product/:id',
    component: ProductComponent
    ,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
