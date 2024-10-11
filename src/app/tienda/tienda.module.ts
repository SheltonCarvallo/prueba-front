import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiendaRoutingModule } from './tienda-routing.module';
import { ProductoPageComponent } from './pages/producto-page/producto-page.component';
import { SharedModule } from '../shared/shared.module';
import { ProductoTableComponent } from './components/producto-table/producto-table.component';


@NgModule({
  declarations: [
    ProductoPageComponent,
    ProductoPageComponent,
    ProductoTableComponent
  ],
  imports: [
    CommonModule,
    TiendaRoutingModule,
    SharedModule
  ]
})
export class TiendaModule { }
