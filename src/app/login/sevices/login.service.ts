import { HttpParams } from '@angular/common/http';
import { HttpService } from 'src/app/core/http/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpService) { }

  registerUser(data: any) {
    return this.http.postdata('users', data)
  }
  authLogin(data: any) {
    const params = new HttpParams()
      .set("email", data.email)
      .set("password", data.password)
    return this.http.getdata('users', params)
  }
}
