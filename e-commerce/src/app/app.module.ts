import { StorageServiceModule } from 'ngx-webstorage-service';
import { CategoriasComponent } from './categorias/categorias.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import{FormsModule} from '@angular/forms'
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt-BR');

import { AppComponent } from './app.component';
import { HeaderMainComponent } from './header-main/header-main.component';
import { HeaderentregaComponent } from './headerentrega/headerentrega.component';
import { FooterentregaComponent } from './footerentrega/footerentrega.component';
import { BodyidentificacaoComponent } from './bodyidentificacao/bodyidentificacao.component';
import { BodyloginComponent } from './bodylogin/bodylogin.component';
import { BodyentregaComponent } from './bodyentrega/bodyentrega.component';
import { BodyminhacontaComponent } from './bodyminhaconta/bodyminhaconta.component';
import { CaroselComponent } from './carosel/carosel.component';
import { FooterMainComponent } from './footer-main/footer-main.component';
import { MenuCategoriaComponent } from './menu-categoria/menu-categoria.component';
import { DestaquesCaroselComponent } from './destaques-carosel/destaques-carosel.component';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import {HistComprasComponent} from './hist-compras/hist-compras.component';
import { CestaComponent } from './cesta/cesta.component';
import { AtendimentoComponent } from './atendimento/atendimento.component';
import { RegrasFreteComponent } from './atendimento/regras-frete/regras-frete.component';
import { TrocaDevolucaoComponent } from './atendimento/troca-devolucao/troca-devolucao.component';
import { FormaPagamentoComponent } from './atendimento/forma-pagamento/forma-pagamento.component';
import { AcompanhePedidoComponent } from './atendimento/acompanhe-pedido/acompanhe-pedido.component';
import { MinhaContaComponent } from './atendimento/minha-conta/minha-conta.component';
import { ContatoComponent } from './atendimento/contato/contato.component';
import { ComprasComponent } from './atendimento/compras/compras.component';
import { ServicosComponent } from './atendimento/servicos/servicos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderMainComponent,
    HeaderentregaComponent,
    FooterentregaComponent,
    BodyidentificacaoComponent,
    BodyloginComponent,
    BodyentregaComponent,
    BodyminhacontaComponent,
    CaroselComponent,
    FooterMainComponent,
    MenuCategoriaComponent,
    DestaquesCaroselComponent,
    ProdutoDetalhesComponent,
    CadastroComponent,
    HistComprasComponent,
    CestaComponent,
    AtendimentoComponent,
    RegrasFreteComponent,
    TrocaDevolucaoComponent,
    FormaPagamentoComponent,
    AcompanhePedidoComponent,
    MinhaContaComponent,
    ContatoComponent,
    ComprasComponent,
    ServicosComponent,
    CategoriasComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StorageServiceModule
  ],
  providers: [ HttpClient,
   {
     provide:LOCALE_ID,
     useValue: "pt-BR"
   }],

  bootstrap: [AppComponent]

})
export class AppModule { }
