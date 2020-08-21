import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HeaderMainComponent } from './header-main/header-main.component';
import { HeaderentregaComponent } from './headerentrega/headerentrega.component';
import { MenuentregaComponent } from './menuentrega/menuentrega.component';
import { DadosentregaComponent } from './dadosentrega/dadosentrega.component';
import { Dadosentrega2Component } from './dadosentrega2/dadosentrega2.component';
import { CardselectentregaComponent } from './cardselectentrega/cardselectentrega.component';
import { FooterentregaComponent } from './footerentrega/footerentrega.component';
import { BodyidentificacaoComponent } from './bodyidentificacao/bodyidentificacao.component';
import { BodyloginComponent } from './bodylogin/bodylogin.component';


export const routes: Routes = [
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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}
