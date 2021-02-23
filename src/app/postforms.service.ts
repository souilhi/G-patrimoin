import { Injectable } from '@angular/core';
import {Http } from '@angular/http';

@Injectable()
export class PostForms{
    constructor(private http: Http){}

    storeData(data: string[]){
        return this.http.post('http://localhost/test.php', data);
    }
}
