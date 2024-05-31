import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ProductosComponent } from './components/productos/productos.component';
import { MarcaComponent } from './components/marca/marca.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    ServiciosComponent,
    ProductosComponent,
    MarcaComponent,
    ContactenosComponent,
    NavmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
