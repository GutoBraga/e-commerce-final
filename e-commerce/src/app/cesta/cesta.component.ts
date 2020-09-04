import { CestaService } from './shared/cesta.service';
import { ResponseProdutos, Produtos } from './../categorias/shared/produto.model';
import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Cliente } from '../bodylogin/shared/cliente.model';




@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})

export class CestaComponent implements OnInit {

  cliente: Cliente;
  produtos = [];
  itens = [];
  totalCompra;
  produtoRequest: ResponseProdutos[];
  tamanho;
  
  constructor(
    private cestaService: CestaService
  ) { }
 
  
  ngOnInit(): void {
    this.produtos=this.cestaService.getCesta();
    // this.calculaCesta();

  }

  removeCesta(index) {
    this.produtos=this.cestaService.removeCesta(index);
    // this.calculaCesta();
    window.alert('Item excluido com sucesso');

  }

  calculaCesta() {
    return this.cestaService.calculaCesta();    
  }

  contaCesta(){
    return this.cestaService.contaCesta();
  }
}
