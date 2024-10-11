import { Component, Input } from '@angular/core';
import { ProductoInterface } from '../../interfaces/producto-interface';

@Component({
  selector: 'app-producto-table',
  templateUrl: './producto-table.component.html',
  styleUrl: './producto-table.component.css'
})
export class ProductoTableComponent {
  @Input()
  producto?: ProductoInterface;
}
