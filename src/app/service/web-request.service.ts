import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {
readonly ROOT_URL;
  BaseUrl: any;

  constructor(private http: HttpClient) {
    this.ROOT_URL = environment.baseURL;
   }
  get(uri: string) {
   return  this.http.get(`${this.ROOT_URL}/${uri}`);
  }
  post(uri: string, payload: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }
  put(uri: string, payload: Object) {
    return this.http.put(`${this.ROOT_URL}/${uri}`, payload);
  }
  delete(uri: string) {
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }
}
