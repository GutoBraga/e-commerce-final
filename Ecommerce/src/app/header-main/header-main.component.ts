import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CestaService } from '../cesta/shared/cesta.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProdutoService } from '../categorias/shared/produto.service';
import { ResponseProdutos, Produtos } from '../categorias/shared/produto.model';

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.css']
})
export class HeaderMainComponent implements OnInit {

  responseProduto: ResponseProdutos[];

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private cestaService: CestaService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    /* this.listarProdutosPorNome(); */
  }

  //Método para campo de pesquisa
  queryField = new FormControl();
 
  //Campo de pesquisa de produtos
  listaProdutos() {
    console.log(this.queryField.value);

    let value = this.queryField;
    if (this.queryField.value != null && this.queryField.value != '') {

      this.produtoService.getProdutoNome(this.queryField.value).subscribe(response => {
        this.responseProduto = response;
        console.log(this.responseProduto)
      });
    };
  }

  enviaProdutos() {

    this.router.navigateByUrl('categorias/pesquisa', { skipLocationChange: true }).then(() => {
      this.router.navigate([`categorias/pesquisa/${this.queryField.value}`]);
    })
    console.log(this.queryField.value);
  }


  calculaCesta() {
    return this.cestaService.calculaCesta();
  }
  contaCesta() {
    return this.cestaService.contaCesta();
  }

  link(id: number) {
    this.router.navigateByUrl('categorias', { skipLocationChange: true }).then(() => {
      this.router.navigate([`categorias/${id}`]);
    });
  }
}
