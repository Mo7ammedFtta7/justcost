import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { AuthService } from './auth.service';
@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector,private _auth:AuthService){}
  intercept(req, next) {

    if (this._auth.loggedIn) {
      let authService = this.injector.get(AuthService)
      let tokenizedReq = req.clone(
        {
      
          headers: req.headers.set('Authorization', 'Bearer ' + authService.getUserToken())
        }
      )
      return next.handle(tokenizedReq)


    }else{
return next

    }

   
  }

}
