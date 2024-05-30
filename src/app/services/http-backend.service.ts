import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpBackendService {

  constructor(private http: HttpClient) { }

  getToken(): Observable<any> {
    return this.http.get('/api/users/ping/')
  }

  getProducts(ext: string): Observable<any> {
    let body = new FormData();
    body.append('ext', ext);
    return this.http.post('/api/shop/products/', body);
  }

  login(email: string, password: string): Observable<any> {
    let body = new FormData();
    body.append('email', email);
    body.append('password', password);
    return this.http.post('/api/users/login/', body);
  }
}
