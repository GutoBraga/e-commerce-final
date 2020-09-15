import { ResponseProdutos } from './../categorias/shared/produto.model';
import { CestaService } from './../cesta/shared/cesta.service';
import { Cliente } from './../cadastro/shared/cliente.model';
import { PagamentoService } from './shared/pagamento.service';
import { Component, OnInit } from '@angular/core';
import { DocumentoFiscal, ItemProduto } from './shared/pagamento.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtos } from '../categorias/shared/produto.model';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css'],

})
export class PagamentoComponent implements OnInit {

  state: string = 'small';

  itensNf: Array<any> = [];

  requestProdutos: ItemProduto[] = [{
    cdProduto: null,
    qtProduto: null,
  }]

  requestDocumentoFiscal: DocumentoFiscal = {

    idCliente: null,
    idEndereco: null,
    idFormaPagamento: null,
    itensDTOPost: null,
    nmNomeTitular: null,
    nrNumeroCartao: null,

  }

  index: number;
  selectedPagamento: boolean;
  cliente: Cliente;
  produtos: Produtos[];


  constructor(
    private pagamentoService: PagamentoService,
    private cestaService: CestaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  itens = [];

  ngOnInit(): void {
    this.selectedPagamento = false;

    this.cliente = (JSON.parse(localStorage['cliente']));
    this.produtos = (JSON.parse(localStorage['produtos']));
    this.request.idCliente = this.cliente.idCliente;
    this.request.idEndereco = this.cliente.enderecos[0].idEndereco;
    console.log(this.produtos);
  }

  calculaCesta() {
    return this.cestaService.calculaCesta();
  }

  clicked(): void {
    var produtos: Array<any> = [];

    produtos = JSON.parse(localStorage['produtos']);
    this.cliente = (JSON.parse(localStorage['cliente']));
    this.itens = (JSON.parse(localStorage.getItem('produtos')));
    this.request.idCliente = this.cliente.idCliente;
    this.request.idEndereco = this.cliente.enderecos[0].idEndereco;
    //console.log(produtos.length)

    for (var contador = 0; contador < produtos.length; contador++) {
      let itensNf = new ItensNf;
      itensNf.cdProduto = this.itens[contador].cdProduto;
      itensNf.qtProduto = this.itens[contador].qtProduto;
      this.itensNf.push(itensNf);

      // this.request.itensDTOPost[contador].cdProduto = this.itens[contador].cdProduto;
      // this.request.itensDTOPost[this.index].qtProduto = this.itens[this.index].quantidade;
      // console.log(contador);
    }
    console.log(this.request);
    this.pagamentoService.postNota(this.request).subscribe();
    alert('Compra realizada com Sucesso! Sua compra poderá ser visualizada em histórico de pedidos');
    produtos = localStorage.clear['produtos'];
    this.itens = localStorage.clear['produtos'];
  }

  // tipoPagamento(id: string) {
  //   if(id === '1') {
  //     this.selectedPagamento = true;
  //   }
  // }
  request: DocumentoFiscal = {
    idCliente: null,
    idEndereco: null,
    idFormaPagamento: null,
    itensDTOPost: this.itensNf,
    nmNomeTitular: '',
    nrNumeroCartao: ''
  }

  //Método para inserir cartão de crédito
  finalizaCompra() {
    this.pagamentoService.postNota(this.request).subscribe(response => {
      this.request = response;
      console.log(response);
      let pagamento = localStorage['pagamento'] = JSON.stringify(this.request);
      alert('Pagamento efetuado com sucesso!!!');
    })
  }
}

export class ItensNf {
  public qtProduto: number;
  public cdProduto: number;
}