import { Pipe, PipeTransform, Injectable } from '@angular/core';
import db from  './database.json';
import {TranslateService} from './translate.service';

@Injectable()
@Pipe({
  name: 'translate'
})


export class TranslatePipe implements PipeTransform {

  constructor(private translate: TranslateService) {
  }

 
  transform(keyWord: string): string {
    var result =keyWord;
    db.find((words) => {
        if (words.key===keyWord) {
           words.langs.find((word) => {
            if (word.lang===this.translate.local) {
              result =word.word
             }
         });
        }
    });
        if (  this.translate.ifExistInArray(db,keyWord)==false &&  this.translate.ifExistInArray(this.translate.newWords,keyWord)==false) {

          this.translate.newWords.push({"key":result,"langs":[{"lang":"ar","word":""}]})
        }
    return result;
  }

}
