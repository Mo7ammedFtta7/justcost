import {Injectable} from '@angular/core';
import {AngularFireMessaging} from '@angular/fire/messaging';
import {Observable} from 'rxjs';
import {mergeMap, mergeMapTo} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseMessageService {
  token: Observable<string>;

  constructor(private angularFireMessaging: AngularFireMessaging) {
    this.angularFireMessaging.messaging.subscribe((messagingContext) => {
        messagingContext.onMessage = messagingContext.onMessage.bind(messagingContext);
        messagingContext.onTokenRefresh = messagingContext.onTokenRefresh.bind(messagingContext);
      }
    );
    this.token = this.angularFireMessaging.getToken;
  }

  requestPermission = () => this.angularFireMessaging.requestPermission
    .pipe(mergeMapTo(this.angularFireMessaging.tokenChanges))

  receiveMessage = () => this.angularFireMessaging.messages;

  refresh = () => this.angularFireMessaging.tokenChanges;

  deleteToken = () => this.angularFireMessaging.getToken
    .pipe(mergeMap(token => this.angularFireMessaging.deleteToken(token)))
    .subscribe(token => console.log('Deleted !'))
}
