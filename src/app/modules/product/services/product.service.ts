import { Injectable } from '@angular/core';
import { CrudService } from '../../shared/service/crud/crud.service';
import { Observable } from 'rxjs';
import { Products } from 'src/app/models/all-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _crudService: CrudService) { }


  getAllProducts(): Observable<Products[]> {

    return this._crudService.get<Products[]>('https://fakestoreapi.com/', 'products');
  }
}
