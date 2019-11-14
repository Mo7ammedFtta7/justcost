import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptService {

  constructor() { }
  // encrypt(keys, value) {
  //   const key = CryptoJS.enc.Utf8.parse(keys);
  //   const iv = CryptoJS.enc.Utf8.parse(keys);
  //   const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key,
  //       {
  //         keySize: 128 / 8,
  //         iv,
  //         mode: CryptoJS.mode.CBC,
  //         padding: CryptoJS.pad.Pkcs7
  //       });
  //   return encrypted.toString();
  // }
  // decrypt(keys, value) {
  //   const key = CryptoJS.enc.Utf8.parse(keys);
  //   const iv = CryptoJS.enc.Utf8.parse(keys);
  //   const decrypted = CryptoJS.AES.decrypt(value, key, {
  //     keySize: 128 / 8,
  //     iv,
  //     mode: CryptoJS.mode.CBC,
  //     padding: CryptoJS.pad.Pkcs7
  //   });
  //   return decrypted.toString(CryptoJS.enc.Utf8);
  // }


  encrypt(keys, value) {
    return CryptoJS.AES.encrypt(JSON.stringify(value), keys);
  }
  decrypt(keys, value) {
    const bytes  = CryptoJS.AES.decrypt(value.toString(), keys);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }
}
