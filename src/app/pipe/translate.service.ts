import { Injectable } from '@angular/core';
import db from  './database.json';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  public local:string=this.getlocalLang();
  // public langs
  newWords=[]
  lang_db=db
  constructor() { }

  getlocalLang ()
  {  
    if (localStorage.getItem("bdrLng")!=null) {
      return localStorage.getItem("bdrLng");
    } else {
      localStorage.setItem("bdrLng", "ar");  
      return "ar" 
    }
  }

  setlocalLang(local)
  {     
   localStorage.setItem("bdrLng", local);
   window.location.reload()
  }

  findInNewWords(key)
  {     
   var isex:boolean =false
   this.newWords.find((word)=>{
            if (word==key) {
              isex= true
              return true
            }
          })
    return isex;
  }

  ifExistInArray(array,key)
  {
    return  array.some(el => el.key === key); 
   }
}
