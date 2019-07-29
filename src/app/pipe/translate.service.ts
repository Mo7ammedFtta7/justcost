import { Injectable } from '@angular/core';
import db from './translate/database.json';
import database from './translate/test.json';
import { directiveDef } from '@angular/core/src/view';
declare function dir(): any;

//import fs from 'file-system';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  public local: string = this.getlocalLang();
  // public langs
  newWords = []
  lang_db = database
  langs = { ar: 'العربية', en: 'English' }
  def_lang = 'ar'
  temp_database = {}
  db2 = database
  constructor() { }


  setdb() {

    // database=db
    // fs.writeFile('./translate/test.json', this.temp_database, function(err) {})
    // database=this.temp_database
  }



  getlocalLang() {
    if (localStorage.getItem("bdrLng") != null) {
      return localStorage.getItem("bdrLng");
    } else {
      localStorage.setItem("bdrLng", "ar");
      return "ar"
    }
  }

  setlocalLang(local) {

    localStorage.setItem("bdrLng", local);
    window.location.reload()
  }

  findInNewWords(key) {
    var isex: boolean = false
    this.newWords.find((word) => {
      if (word == key) {
        isex = true
        return true
      }
    })
    return isex;
  }

  ifExistInArray(array, key) {
    return array.some(el => el.key === key);
  }

  // setRow(key, lang, word) {
  //   var translates = {};
  //   translates[lang] = word;
  //   this.temp_database[key] = translates;
  // }


  setTrans(key, lang, word) {
    var translates = {};
    translates = database[key];
    translates[lang] = word
    database[key] = translates;
  }

  updateItem(key, lang, word) {
    var ii = {};
    ii[lang] = word;
    database[key] = ii;
  }


  insertToTemp(word) {
     if (this.local=="ar") {
      var translates = {};
      translates[this.local] = word;
      this.temp_database[word] = translates;
     }
    console.log(JSON.stringify(this.temp_database))
    return word
  }


  translate(key) {
    return key in database && database[key][this.local] != undefined ? database[key][this.local] : this.insertToTemp(key)
  }





}
