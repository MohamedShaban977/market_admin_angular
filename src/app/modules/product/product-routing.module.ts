import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllProductsComponent } from "./components/all-products/all-products.component";
import { AddProductComponent } from "./components/add-product/add-product.component";

const routes: Routes = [
    {
        path: '',
        component: AllProductsComponent,
    },
    {
        path: 'addProduct',
        component: AddProductComponent,
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
