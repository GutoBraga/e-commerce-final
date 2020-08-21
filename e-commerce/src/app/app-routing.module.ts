
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





