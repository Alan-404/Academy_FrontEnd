import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private request: HttpClient) { }

  login(account: any):Observable<any>{
    return this.request.post(`http://localhost:8000/account/login`, account);
  }
}
