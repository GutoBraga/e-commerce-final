import { ResponseProdutos, Produtos } from './../categorias/shared/produto.model';
import { NotaFiscal } from './shared/nota-fiscal.model';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../bodylogin/shared/cliente.model';


@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent implements OnInit {

  cliente: Cliente;

  produtos: Produtos;
  // nfRequest: NotaFiscal = {
  //   idCliente: null,
  //   itensDTOPost: [
  //       {
  //           cdProduto: null
  //       }
  //   ],
  //   nmNomeTitular: '',
  //   nrNumeroCartao: ''
  // }

  produtoRequest: ResponseProdutos[];
  constructor() { }
 
  
  ngOnInit(): void {
    // this.buscarIdCliente();
    this.produtos = (JSON.parse(localStorage['produtos']));
    console.log(this.produtos);
   //console.log(JSON.parse(localStorage['produtos'])[0]);
  }

  // public buscarIdCliente() {
  //   this.cliente = JSON.parse(localStorage['cliente']);
  //   console.log(this.cliente); 
  // }
}
