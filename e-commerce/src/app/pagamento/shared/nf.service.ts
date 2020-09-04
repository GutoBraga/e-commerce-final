import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Nf } from './nf.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NfService {

  constructor(private http: HttpClient) { }

  private readonly API = 'api/adicionaNota';

  postNota(request: Nf): Observable<Nf> {
    return this.http.post<Nf>(this.API, request);
  }
}
