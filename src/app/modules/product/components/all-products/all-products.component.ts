import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Products } from 'src/app/models/all-products';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products: Products[] = [];
  isLoading: boolean = false;
  constructor(public translate: TranslateService,
    private _serviceProduct: ProductService,
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.isLoading = true;
    this._serviceProduct.getAllProducts().subscribe(response => {
      this.products = response;
      this.isLoading = false;

    });
  }

  deleteProduct(index: number) { }

}