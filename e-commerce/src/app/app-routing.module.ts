import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HeaderMainComponent } from './header-main/header-main.component';
import { HeaderentregaComponent } from './headerentrega/headerentrega.component';
import { FooterentregaComponent } from './footerentrega/footerentrega.component';
import { BodyidentificacaoComponent } from './bodyidentificacao/bodyidentificacao.component';
import { BodyloginComponent } from './bodylogin/bodylogin.component';
import { HistComprasComponent } from './hist-compras/hist-compras.component';
import {AtendimentoComponent} from './atendimento/atendimento.component';
import {AcompanhePedidoComponent} from './atendimento/acompanhe-pedido/acompanhe-pedido.component';
import {ComprasComponent} from './atendimento/compras/compras.component';
import {ContatoComponent} from './atendimento/contato/contato.component';
import {FormaPagamentoComponent} from './atendimento/forma-pagamento/forma-pagamento.component';
import {MinhaContaComponent} from './atendimento/minha-conta/minha-conta.component';
import {RegrasFreteComponent} from './atendimento/regras-frete/regras-frete.component';
import {ServicosComponent} from './atendimento/servicos/servicos.component';
import {TrocaDevolucaoComponent} from './atendimento/troca-devolucao/troca-devolucao.component';
import {CestaComponent} from './cesta/cesta.component';
import {CadastroComponent} from './cadastro/cadastro.component';
import {BodyminhacontaComponent} from './bodyminhaconta/bodyminhaconta.component';
import {BodyentregaComponent} from './bodyentrega/bodyentrega.component';
import {CaracteristicasDescricaoComponent} from './caracteristicas-descricao/caracteristicas-descricao.component';
 import {CaroselComponent} from './carosel/carosel.component';
 import {DestaquesCaroselComponent} from './destaques-carosel/destaques-carosel.component';
 import {PagamentoComponent} from './pagamento/pagamento.component';
 import {CategoriasComponent} from './categorias/categorias.component';
 import {ProdutoDetalhesComponent} from './produto-detalhes/produto-detalhes.component';


export const routes: Routes = [
    {
        path: '',
        component: DestaquesCaroselComponent
    },
 
    {
        path: 'headerEntrega',
        component: HeaderentregaComponent
    },
    {
        path: 'categorias',
        component: CategoriasComponent
    },
    {
        path: 'confirCompra',
        component: BodyidentificacaoComponent
    },
    {
        path: 'login',
        component: BodyloginComponent
    },
    
    {
        path: 'histCompras',
        component: HistComprasComponent
    },
    {
        path: 'cesta',
        component: CestaComponent
    },
    {
        path: 'cadastro',
        component: CadastroComponent
    },
    {
        path: 'minhaConta',
        component: BodyminhacontaComponent
    },
    {
        path: 'entrega',
        component: BodyentregaComponent
    },
    {
        path: 'pagamento',
        component: PagamentoComponent
    },
    
    {
        path: 'atendimento',
        component: AtendimentoComponent
    },
   
    {
        path: 'atendimento/acompanhePedido',
        component: AcompanhePedidoComponent
    },
    {
        path: 'atendimento/compras',
        component: ComprasComponent
    },
    {
        path: 'atendimento/contato',
        component: ContatoComponent
    },
    {
        path: 'atendimento/formaPagamento',
        component: FormaPagamentoComponent
    },
    {
        path: 'atendimento/conta',
        component: MinhaContaComponent
    },
    {
        path: 'atendimento/regrasFrete',
        component: RegrasFreteComponent
    },
    {
        path: 'atendimento/servicos',
        component: ServicosComponent
    },
    {
        path: 'atendimento/trocaDevolucao',
        component: TrocaDevolucaoComponent
    }
];
 
 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}
