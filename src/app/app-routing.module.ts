import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './modules/product/components/all-products/all-products.component';
import { CartComponent } from './modules/carts/components/cart/cart.component';
import { AddProductComponent } from './modules/product/components/add-product/add-product.component';
import { EditProductComponent } from './modules/product/components/edit-product/edit-product.component';
const routes: Routes = [
  // modules

  // {
  //   path: '',
  //   loadChildren: () => import(`./modules/carts/carts.module`).then(m => m.CartsModule)
  // },
  // {
  //   path: '',
  //   loadChildren: () => import(`./modules/product/product.module`).then(m => m.ProductModule)
  // },


  // {
  //   path: 'carts',
  //   loadChildren: () => import(`./modules/carts/carts.module`).then(m => m.CartsModule)
  // },

  // {
  //   path: 'products',
  //   loadChildren: () => import(`./modules/product/product.module`).then(m => m.ProductModule)
  // },
  {
    path: "products", component: AllProductsComponent,

  },
  {
    path: "addProduct", component: AddProductComponent,

  },

  {
    path: "editProduct/:id", component: EditProductComponent,

  },



  // { path: "details/:id", component: DetailsProductComponent },
  { path: "carts", component: CartComponent },
  { path: "**", redirectTo: "products", pathMatch: "full" },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
