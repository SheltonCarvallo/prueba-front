import { Component } from '@angular/core';
import { ProductoInterface } from '../../interfaces/producto-interface';
import { TiendaService } from '../../services/tienda.service';

@Component({
  selector: 'app-producto-page',
  templateUrl: './producto-page.component.html',
})
export class ProductoPageComponent {
  public placeholder: string = "Enter an specific ID";
  public producto!: ProductoInterface;

  constructor(private tiendaService: TiendaService){}

  triggerSearchProducto(id: string) : void {
    this.tiendaService.requestProducto(id).subscribe(
      resp => {
        this.producto = resp;
      }
    )
  } 
}kf
