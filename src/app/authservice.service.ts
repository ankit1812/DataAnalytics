import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Response} from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { environment } from '../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  public host: string = environment.server;

  constructor(private http:HttpClient) { }
  signup(user:any):Observable <any>{
    const body=JSON.stringify(user);
    return this.http.post(`${this.host}/signup`,body);
  }
  login(data:any): Observable <any>{
    return this.http.post(`${this.host}/login`,JSON.stringify(data));
  
  }
forgotPassword(data:any):Observable<any>{
return   this.http.post(`${this.host}/forgotPass`,JSON.stringify(data));
}
}
