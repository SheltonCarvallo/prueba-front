import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoPageComponent } from './pages/producto-page/producto-page.component';

const routes: Routes = [
  {
    path: 'producto',
    component: ProductoPageComponent
  },

  {
    path: '**',
    redirectTo: 'producto'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiendaRoutingModule { }
