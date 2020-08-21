import { Component, OnInit } from '@angular/core';
import { Pedido } from './pedidos.model';
import { Quantidade } from './pedidos.model';
@Component({
  selector: 'app-hist-compras',
  templateUrl: './hist-compras.component.html',
  styleUrls: ['./hist-compras.component.css']
})
export class HistComprasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  pedidos: Pedido[] = [
    {
      img:   "../assets/images/caixa-remedio.jpg",
      nome: "Medicamento genérico 500mg", 
      valor: "R$5,99",
      quantidade: "1"
    },
    {
      img: "../assets/images/caixa-remedio.jpg", 
      nome: "Medicamento genérico 400mg", 
      valor: "R$2,99",
      quantidade: "3"
    }
  ]

  qtd: Quantidade[] =[
  {
    data: "14/07/2020"

  },
  {
    data: "11/07/2020"

  }

]

}
