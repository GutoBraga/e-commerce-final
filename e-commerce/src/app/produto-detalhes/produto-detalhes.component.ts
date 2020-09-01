import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ResponseProdutos, Produtos } from './../categorias/shared/produto.model';
import { ProdutoService } from './../categorias/shared/produto.service';

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.component.html',
  styleUrls: ['./produto-detalhes.component.css']
})
export class ProdutoDetalhesComponent implements OnInit {

  cd: string;

  produtos: Produtos;

  responseProdutos: ResponseProdutos[];

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.produtoPorCd();
  }

  public produtoPorCd() {
    this.cd = this.route.snapshot.paramMap.get('cd');
    this.produtoService.getProdutoPorCd(this.cd).subscribe(response => {this.responseProdutos = response;
    localStorage['produtos'] = JSON.stringify(this.responseProdutos);
    console.log(this.responseProdutos);
    } );
    
  }

  // onclick(cd: number) {
  //   this.router.navigateByUrl('cesta', { skipLocationChange: true }).then(() => {
  //     this.router.navigate([`cesta/${cd}`]);
  //   });
  // }
}
