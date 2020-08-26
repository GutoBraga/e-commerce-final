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


export const routes: Routes = [
    {
        path: '',
        component: AtendimentoComponent
    },


    
    {
        path: 'entrega',
        component: HeaderentregaComponent
    },
    {
        path: 'identificacao',
        component: BodyidentificacaoComponent
    },
    {
        path: 'login',
        component: BodyloginComponent
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
