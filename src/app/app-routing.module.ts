import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { MarcaComponent } from './components/marca/marca.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';

const routes: Routes = [

  {path: '', redirectTo: '/nicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'marca', component: MarcaComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'contactenos', component: ContactenosComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
