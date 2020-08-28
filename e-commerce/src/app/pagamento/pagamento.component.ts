import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clicked():void {
    alert('Compra realizada com Sucesso! O numero de seu pedido é 19');
  }
 
}
