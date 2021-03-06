import { AuthGuard } from './auth.guard';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import {ToastrModule} from 'ngx-toastr'
import { NgxSlideshowAcracodeModule } from 'ngx-slideshow-acracode';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { Ng2ImgMaxModule } from 'ng2-img-max';
import { AdsComponent } from './pages/ads/ads.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireMessagingModule} from '@angular/fire/messaging';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {FirebaseMessageService} from './_services/firebase.messege.service';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { EditAdsComponent } from './pages/edit-ads/edit-ads.component';
import { TermsComponent } from './pages/terms/terms.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { RestPassComponent } from './pages/rest-pass/rest-pass.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
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
    TimeAgoPipe,
    AdsComponent,
    EditAdsComponent,
    TermsComponent,
    FaqComponent,
    ContactComponent,
    AboutComponent,
    RestPassComponent,
    NotFoundComponent
  ],
  imports: [
    Ng2ImgMaxModule,
    ToastrModule.forRoot(),
    NgxSkeletonLoaderModule,
    NgxSlideshowAcracodeModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    BarRatingModule,
    OwlModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDZrJqJiS4HHqw8vEgc30ZTDcfZoUYVpSk'
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireMessagingModule,
    AngularFireAuthModule
  ],

  providers: [ApiService, AuthService, FirebaseMessageService, AuthGuard, EventService, TranslatePipe, Axios
],
  bootstrap: [AppComponent]
})
export class AppModule { }
