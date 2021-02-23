import { FormsValue } from './shared/formsvalue.model';
import {  EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



// import { FormsValue } from 'src/app/shared/formsvalue.model';

 @Injectable({
  providedIn: 'root'
})
export class RecordsformsService {
   formschanged = new EventEmitter<FormsValue[]>()
   private values : FormsValue[] = [];

   constructor(private http : HttpClient){};

   addValues( value : FormsValue){
    // this.values.push(value);
    this.formschanged.emit(this.values.slice());


  }
  storeData(data : FormsValue){
    return this.http.post('http://localhost/GP/index.php', data);
}
}
