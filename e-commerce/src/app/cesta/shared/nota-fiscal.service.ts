import { NotaFiscal } from './nota-fiscal.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotaFiscalService {

  constructor(private http: HttpClient) { }

  private readonly APINF = 'api/adicionaNota';

  public createPedido(request: NotaFiscal): Observable<NotaFiscal> {
    const URL = `${this.APINF}`;
    return this.http.post<NotaFiscal>(URL, request);
  }
}
