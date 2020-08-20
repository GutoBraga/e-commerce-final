import { Component, OnInit } from '@angular/core';
import { Produto } from './produtos.model';
import { Quantidade } from './produtos.model';
@Component({
  selector: 'app-hist-compras',
  templateUrl: './hist-compras.component.html',
  styleUrls: ['./hist-compras.component.css']
})
export class HistComprasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  produtos: Produto[] = [
    {
      img: "../../assets/images/caixa-remedio.png", 
      nome: "Medicamento genérico 500mg", 
      valor: "R$5,99",
      quantidade: "1"
    },
    {
      img: "../../assets/images/caixa-remedio.png", 
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

  },
  {
    data: "10/07/2020"

  }
]

}
