import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  public local:string=this.getlocalLang();
  newWords=[]
  constructor() { }

  getlocalLang ()
  {  
    if (localStorage.getItem("bdrLng")!=null) {
      return localStorage.getItem("bdrLng");
    } else {
      localStorage.setItem("bdrLng", "en");  
      return "en" 
    }
  }

  setlocalLang (local)
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
