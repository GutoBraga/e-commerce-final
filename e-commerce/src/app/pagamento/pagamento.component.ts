import { Nf } from './shared/nf.model';
import { NfService } from './shared/nf.service';
import { Produtos } from './../categorias/shared/produto.model';
import { Produto } from './../categorias/categorias.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  request: Nf = {
    idCliente: null,
    idEndereco: null,
    idFormaPagamento: null,
    itensDTOPost: [
        {
            cdProduto: null,
        }
    ],
    nmNomeTitular: '',
    nrNumeroCartao: null
  }

  produtos: Produtos;
  constructor(
    private nfService: NfService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.produtos = (JSON.parse(localStorage['produtos']));
    console.log(this.produtos);
  }


  clicked():void {
    this.nfService.postNota(this.request).subscribe( response => {this.request = response;})
    alert('Compra realizada com Sucesso! O numero de seu pedido é 19');
  }
 
}
