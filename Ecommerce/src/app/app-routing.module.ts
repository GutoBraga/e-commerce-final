import { PesquisaProdutoComponent } from './pesquisa-produto/pesquisa-produto.component';
import { ExclusivoComponent } from './exclusivo/exclusivo.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { LostPasswordComponent } from './login/lost-password/lost-password.component';
import { EntregaComponent } from './entrega/entrega.component';
import { MeusPedidosComponent } from './meus-pedidos/meus-pedidos.component';
import { CestaComponent } from './cesta/cesta.component';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { CarouselItemsComponent } from './carousel-items/carousel-items.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { MinhasInformacoesComponent } from './minha-conta/minhas-informacoes/minhas-informacoes.component';
import { MeusEnderecosComponent } from './minha-conta/meus-enderecos/meus-enderecos.component';
import { MeusCartoesComponent } from './minha-conta/meus-cartoes/meus-cartoes.component';
import { AlterarSenhaComponent } from './minha-conta/alterar-senha/alterar-senha.component';


const routes: Routes = [
  {
    path: '',
    component: CarouselItemsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'login/cadastro',
    component: CadastroComponent
  },
  {
    path: 'minha-conta',
    component: MinhaContaComponent
  },
  {
    path: 'meus-pedidos',
    component: MeusPedidosComponent
  },
  {
    path: 'categorias/:id',
    component: CategoriasComponent
  },
  {
    path: 'categorias',
    component: CategoriasComponent
  },
  {
    path: 'categorias/produto/:cd',
    component: ProdutoDetalhesComponent
  },
  {
    path: 'categorias/produto',
    component: ProdutoDetalhesComponent
  },
  {
    path: 'cesta',
    component: CestaComponent
  },
  {
    path: 'categorias/produto/:cd/cesta',
    component: CestaComponent 
  },
  {
    path: 'cesta/entrega',
    component: EntregaComponent
  },
  {
    path: 'login/esqueci-senha',
    component: LostPasswordComponent
  },
  {
    path: 'cesta/pagamento',
    component: PagamentoComponent
  },
  {
    path: 'exclusivo',
    component: ExclusivoComponent
  },
  {
    path: 'categorias/pesquisa/:query',
    component: PesquisaProdutoComponent
  },
  {
    path: 'minhas-informacoes',
    component: MinhasInformacoesComponent
  },
  {
    path: 'meus-enderecos',
    component: MeusEnderecosComponent
  },
  {
    path: 'meus-cartoes',
    component: MeusCartoesComponent
  },
  {
    path: 'alterarSenha',
    component: AlterarSenhaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
