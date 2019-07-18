import { Pipe, PipeTransform } from '@angular/core';
import db from  '../../assets/json/database.json';

@Pipe({
  name: 'translate'
})


export class TranslatePipe implements PipeTransform {

  public local:string=this.getlocalLang();
  newWords=[]
  transform(keyWord: string): string {
    var result =keyWord;
    db.find((words) => {
        if (words.key===keyWord) {
           words.langs.find((word) => {
            if (word.lang===this.local) {
              result =word.word
             }
         });
        }
       
    });
        if (  this.ifExistInArray(db,keyWord)==false &&  this.ifExistInArray(this.newWords,keyWord)==false) {

          this.newWords.push({"key":result,"langs":[{"lang":"ar","word":""}]})
        }
    return result;
  }

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
