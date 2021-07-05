import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http: HttpClient, private router: Router) { }


  public login(){
    return this.http.get('/api/login');
  }

  AddUser(Fees): Observable<any> {
    const data = this.http.post('/api/student/fees/add', Fees);
    return data
  }



}
