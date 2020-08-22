import { Component, OnInit } from '@angular/core';

import { HistComprasService } from './hist-compras.service';
import { Pedido } from './pedidos.model';




@Component({
  selector: 'app-hist-compras',
  templateUrl: './hist-compras.component.html',
  styleUrls: ['./hist-compras.component.css']
})
export class HistComprasComponent implements OnInit {

  ItensPedido: Pedido[];

  constructor(private pedidoService: HistComprasService) { }

  ngOnInit(): void {

    this.listarTodas();

  }

  listarTodas() {
    this.pedidoService.getPedidos().subscribe(response => this.ItensPedido = response);
  }



}
