import { NgModule } from '@angular/core';
import { CartComponent } from './components/cart/cart.component';
import { SharedModule } from '../shared/shared.module';
import { CartRoutingModule } from './carts-routing.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,

    SharedModule,
    CartRoutingModule,


  ]
})
export class CartsModule { }
