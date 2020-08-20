import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HistComprasComponent } from './hist-compras/hist-compras.component';
import { HeaderMainComponent } from './header-main/header-main.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HistComprasComponent,
    HeaderMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
