import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HeaderMainComponent } from './header-main/header-main.component';
import { HeaderentregaComponent } from './headerentrega/headerentrega.component';
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HistComprasComponent } from './hist-compras/hist-compras.component';

export const rotas: Routes = [
   
    {
        path: 'histCompras',
        component: HistComprasComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(rotas)],
    exports:[RouterModule]
})

export class AppRoutingModule {}
