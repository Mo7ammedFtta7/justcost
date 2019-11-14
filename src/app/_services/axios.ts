import {Injectable} from '@angular/core';
import {AuthService} from '../auth.service';
import axios from 'axios';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class Axios {
    axios = axios;
    constructor(private auth: AuthService) {
    }
 post(url: string, data: any) {
        const headers = {
            Authorization:  `Bearer  ${this.auth.user().token}`,
            'Content-Type': 'multipart/form-data',
        };
        return this.axios.post(environment.ApiUrl + url, data , { headers } );
    }
    put(url, data) {
        const headers = {
            Authorization:  `Bearer  ${this.auth.user().token}`,
            'Content-Type': 'multipart/form-data',
        };
        return this.axios.patch(environment.ApiUrl + url, data , { headers } );
    }
}


