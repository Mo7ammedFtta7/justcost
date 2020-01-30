import { EditAdsComponent } from './pages/edit-ads/edit-ads.component';
import { RestPassComponent } from './pages/rest-pass/rest-pass.component';
import { TermsComponent } from './pages/terms/terms.component';
import { FaqComponent } from './pages/faq/faq.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdsComponent } from './pages/ads/ads.component';
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
import { EmailverifyComponent } from './pages/emailverify/emailverify.component';
import { PostaddComponent } from './pages/postadd/postadd.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { ResultsComponent } from './pages/results/results.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TranslateComponent } from './pipe/translate/translate.component';

const routes: Routes = [


  // {path: '**', redirectTo: '/404'},

  {
    path: 'reset-password/:token',
      component: RestPassComponent
      ,
      pathMatch: 'full'
    },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
  ,
  {
    path: 'about',
      component: AboutComponent
      ,
      pathMatch: 'full'
    }
    ,
  {
    path: 'contact',
      component: ContactComponent
      ,
      pathMatch: 'full'
    }
    ,
  {
    path: 'faq',
      component: FaqComponent
      ,
      pathMatch: 'full'
    },
  {
    path: 'terms',
      component: TermsComponent
      ,
      pathMatch: 'full'
    },
  {
  path: 'edit-ads/:id',
    component: EditAdsComponent
    ,
    pathMatch: 'full'
  }
  ,
  {
  path: 'ads/:id',
    component: AdsComponent
    ,
    pathMatch: 'full'
  }
  ,
  {
    path: 'forgetPass',
    component: ForgetPasswordComponent
    ,
    pathMatch: 'full'
  }
  ,
  {
    path: 'login',
    component: LoginComponent
    ,
    pathMatch: 'full'
  }
  ,
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
    component: ProfileComponent,
    canActivate: [AuthGuard]
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
  ,
  {
    path: 'emailverify/:token',
    component: EmailverifyComponent
  }
  ,
  {
    path: 'postadd',
    component: PostaddComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'results',
    component: ResultsComponent
  }
,
{
  path: 'translate',
  component: TranslateComponent,
    canActivate: [AuthGuard]
},
{path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
