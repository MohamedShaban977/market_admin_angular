import { Injectable } from '@angular/core';
import { CrudService } from '../../shared/service/crud/crud.service';
import { Products } from 'src/app/models/all-products';
import { AddCartRequest, CartResponse } from 'src/app/models/add-cart-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _crudService: CrudService) { }

  getAllCarts(): Observable<CartResponse[]> {

    return this._crudService.get<CartResponse[]>('https://fakestoreapi.com/', 'carts');
  }

  getCartsByFilter(req: any): Observable<CartResponse[]> {

    return this._crudService.get<CartResponse[]>('https://fakestoreapi.com/', 'carts', req);
  }


  addCart(request: AddCartRequest): Observable<CartResponse> {

    return this._crudService.post<CartResponse>('https://fakestoreapi.com/', 'carts', request);

  }

  deleteCart(id: number): Observable<CartResponse> {

    return this._crudService.delete<CartResponse>('https://fakestoreapi.com/', `carts/${id}`);

  }


  getProductById(id: number): Observable<Products> {
    return this._crudService.get<Products>('https://fakestoreapi.com/', `products/${id}`);
  }
}
