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

  contentType = 'image/png';
  base64Data = "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="

  downloadFile() {
    const linkSource = `data:${this.contentType};base64,${this.base64Data}`;
    const downloadLink = document.createElement("a");
    downloadLink.href = linkSource;
    downloadLink.download = 'fileName';
    downloadLink.click();
  }

}