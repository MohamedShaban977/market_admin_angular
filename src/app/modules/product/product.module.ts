import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { SharedModule } from '../shared/shared.module';
import { AddProductComponent } from './components/add-product/add-product.component';
import { RouterModule } from '@angular/router';
import { ProductRoutingModule } from './product-routing.module';
import { EditProductComponent } from './components/edit-product/edit-product.component';



@NgModule({
  declarations: [
    AllProductsComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    ProductRoutingModule,
    CommonModule,
    SharedModule,
  ]
})
export class ProductModule { }
