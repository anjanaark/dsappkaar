import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }

  server_address = "http://127.0.0.1:5000/";
  baseApiUrl = "http://127.0.0.1:5000/dashboard";
  url2="http://127.0.0.1:5000/dashboardtry";

  send_post_request(data1){
    return this.http.post(
      this.server_address,data1
      
    );
  }
  send_pred_req(data2){
    return this.http.post(
      this.baseApiUrl,data2     
    );
  }

  sendforc(data:any):Observable<any>{
    return this.http.post(
      this.url2,data,{responseType:'text'}
    )
  }
}
