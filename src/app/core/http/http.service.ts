import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  baseUrl: string = environment.baseUrl
  httpHeader = {
    "headers": new HttpHeaders()
      .set("content-type", "application/jon")
  }
  getdata(endpoint: string, params: HttpParams = new HttpParams) {
    const url = this.baseUrl + endpoint
    return this.http.get<any>(url, { params })
  }
  getCategory(endpoint: string) {
    const url = this.baseUrl + endpoint
    return this.http.get<any>(url)
  }
  postdata(endpoint: string, data: any) {
    const url = this.baseUrl + endpoint
    return this.http.post<any>(url, data)
  }
}
