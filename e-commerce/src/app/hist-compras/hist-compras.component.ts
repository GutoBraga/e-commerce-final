import { Component, OnInit } from '@angular/core';
import { Pedido } from './pedidos.model';
import { Quantidade } from './pedidos.model';
import { PedidoService } from './shared/pedido.service';

@Component({
  selector: 'app-hist-compras',
  templateUrl: './hist-compras.component.html',
  styleUrls: ['./hist-compras.component.css']
})
export class HistComprasComponent implements OnInit {

  pedidos: Pedido[];
  erro: any;
  constructor(private PedidoService: PedidoService) { 

  }

  ngOnInit(): void {
    this.getPedidosPorId();
  }

  getPedidosPorId() {
    this.PedidoService.getPedidos().subscribe(
      response => {
        this.pedidos = response;
      });
    }
 

}
