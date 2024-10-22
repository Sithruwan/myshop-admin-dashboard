import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForexService {



  constructor(private http: HttpClient) { }

  public getRate(baseCurrency:string):Observable<any>{
    return this.http.get('https://api.exchangerate-api.com/v4/latest/'+baseCurrency);
  }


}
