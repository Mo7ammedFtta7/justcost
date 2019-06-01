import { AuthGuard } from './auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { AppComponent } from './app.component';
import { LoginComponent } from './header/login/login.component';
import { RegisterComponent } from './header/register/register.component';
import { EventsComponent } from './pages/events/events.component';
import { SpecialEventsComponent } from './pages/special-events/special-events.component';
import { AuthService } from './auth.service';
import { apis } from '../app/_services/apis';
import { EventService } from './event.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './header/header/header.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ResultsComponent } from './pages/results/results.component';
import { EmailverifyComponent } from './pages/emailverify/emailverify.component';
import { PostaddComponent } from './pages/postadd/postadd.component';


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
    PostaddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [AuthService,apis, AuthGuard, EventService, 
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
