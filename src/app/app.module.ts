import { AuthGuard } from './auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { AppComponent } from './app.component';
import { LoginComponent } from './header/login/login.component';
import { RegisterComponent } from './header/register/register.component';
import { EventsComponent } from './pages/events/events.component';
import { SpecialEventsComponent } from './pages/special-events/special-events.component';
import {TimeAgoPipe} from 'time-ago-pipe';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import {Axios} from '../app/_services/axios';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './header/header/header.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ResultsComponent } from './pages/results/results.component';
import { EmailverifyComponent } from './pages/emailverify/emailverify.component';
import { PostaddComponent } from './pages/postadd/postadd.component';
import { SubsComponent } from './pages/postadd/subs/subs.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { TranslatePipe } from './pipe/translate.pipe';
import { TranslateComponent } from './pipe/translate/translate.component';
import { AssetsComponent } from './assets/assets.component';
import { ApiService } from './_services/api.service';
import { ImageDirective } from './directives/image.directive';
import { LikeDirective } from './directives/like.directive';
import { LoginDirective } from './directives/login/login.directive';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { OwlModule } from 'ngx-owl-carousel';  
import {AgmCoreModule} from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EventsComponent,
    SpecialEventsComponent,
    HomeComponent,
    HeaderComponent,
    ProductComponent,
    ProductsComponent,
    ProfileComponent,
    ResultsComponent,
    EmailverifyComponent,
    PostaddComponent,
    SubsComponent,
    TranslatePipe,
    TranslateComponent,
    AssetsComponent,
    ImageDirective,
    LikeDirective,
    LoginDirective,
    ForgetPasswordComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    BarRatingModule,
    OwlModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDZrJqJiS4HHqw8vEgc30ZTDcfZoUYVpSk'
    }),
  ],

  providers: [ApiService, AuthService, AuthGuard, EventService, TranslatePipe, Axios
],
  bootstrap: [AppComponent]
})
export class AppModule { }
