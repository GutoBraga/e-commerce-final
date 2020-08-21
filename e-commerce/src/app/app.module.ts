import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderMainComponent } from './header-main/header-main.component';
import { HeaderentregaComponent } from './headerentrega/headerentrega.component';
import { FooterentregaComponent } from './footerentrega/footerentrega.component';
import { BodyidentificacaoComponent } from './bodyidentificacao/bodyidentificacao.component';
import { BodyloginComponent } from './bodylogin/bodylogin.component';
import { BodyentregaComponent } from './bodyentrega/bodyentrega.component';
import { BodyminhacontaComponent } from './bodyminhaconta/bodyminhaconta.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMainComponent,
    HeaderentregaComponent,
    FooterentregaComponent,
    BodyidentificacaoComponent,
    BodyloginComponent,
    BodyentregaComponent,
    BodyminhacontaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
