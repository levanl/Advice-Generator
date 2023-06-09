import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }



  getAdviceData() {
    return this.http.get('https://api.adviceslip.com/advice')
  }
}
