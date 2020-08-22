
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Pedido} from './pedidos.model';




@Injectable({
    providedIn: 'root'
  })
  export class HistComprasService {
  
    constructor(private http: HttpClient) { }
  
    private readonly API = 'http://localhost:3000/itens';
  
    getPedidos() {
      return this.http.get<Pedido[]>(this.API);
    }

}









