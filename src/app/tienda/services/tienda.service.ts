import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoInterface } from '../interfaces/producto-interface';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  constructor(private httpRequest: HttpClient) { }

    //hhttp://localhost:5229/api/producto
    private baseUrl: string = 'hhttp://localhost:5229/api/producto';

    requestProducto(id: string): Observable<ProductoInterface>{
      const url :string = `${this.baseUrl}/${id}`;
      return this.httpRequest.get<ProductoInterface>(url);
    }
}
