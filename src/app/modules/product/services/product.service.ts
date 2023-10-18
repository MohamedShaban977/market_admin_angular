import { Injectable } from '@angular/core';
import { CrudService } from '../../shared/service/crud/crud.service';
import { Observable } from 'rxjs';
import { Products } from 'src/app/models/all-products';
import { AddProduct } from 'src/app/models/add-product-request';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _crudService: CrudService) { }


  getAllProducts(): Observable<Products[]> {

    return this._crudService.get<Products[]>('https://fakestoreapi.com/', 'products');
  }


  getAllCategories(): Observable<string[]> {

    return this._crudService.get<string[]>(`https://fakestoreapi.com/`, 'products/categories');
  }


  addProduct(request: AddProduct) {

    return this._crudService.post<AddProduct>('https://fakestoreapi.com/', 'products', request, true)
  }


  getProductById(id: number): Observable<AddProduct> {

    return this._crudService.get<AddProduct>('https://fakestoreapi.com/', `products/${id}`);
  }
}
