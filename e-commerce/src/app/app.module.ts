import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HistComprasComponent } from './hist-compras/hist-compras.component';

 

@NgModule({
  declarations: [
    AppComponent,
    HistComprasComponent
 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
