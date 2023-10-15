import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Products } from 'src/app/models/all-products';
import { AddCartRequest, CartResponse } from 'src/app/models/add-cart-request';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  // productCart!: Products[];
  carts!: CartResponse[];
  isLoading = false;
  success: boolean = false;

  products: Products[] = [];

  detail!: CartResponse;


  formGroup!: FormGroup;
  constructor(private service: CartService,
    private fb: FormBuilder,
    private toaster: ToastrService) { }
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      startdate: [''],
      enddate: [''],
    });

    this.getAllCarts();
  }

  getAllCarts() {
    this.isLoading = true;
    this.service.getAllCarts().subscribe({
      next: (res) => {
        this.carts = res;
        this.isLoading = false;
        this.success = true;


      }
    });
  }

  applyFilter() {
    console.log(this.formGroup.value);
    this.isLoading = true;
    this.service.getCartsByFilter(this.formGroup.value).subscribe({
      next: (res) => {
        this.carts = res;
        this.isLoading = false;
        this.success = true;
      }
    });
  }

  clearFilter() {
    this.formGroup.setValue({ 'startdate': '', 'enddate': '' });
    this.getAllCarts();
  }


  deleteCart(id: number) {
    this.isLoading = true;
    this.service.deleteCart(id).subscribe({
      next: (v) => {
        this.isLoading = false;
        this.toaster.success("Cart is successfully deleted", '', {
          positionClass: 'toast-bottom-right'
        }),
          this.carts = this.carts.filter(obj => obj.id !== id);

        // this.carts.r
      }

    });
  }

  viewItem(index: number) {

    this.products = [];
    this.detail = this.carts[index];
    for (let i = 0; i < this.detail.products.length; i++) {
      this.service.getProductById(this.detail.products[i].productId).subscribe({
        next: (result) => {
          // this.products[i].quantity = this.detail.products[i].quantity
          // for (let j = 0; j < result.length; j++){

          // }
          this.products.push(
            {
              id: result.id,
              title: result.title,
              description: result.description,
              price: result.price,
              image: result.image,
              category: result.category,
              rating: result.rating,
              quantity: this.detail.products[i].quantity,
            })
          // }
          // this.products = this.products.concat({id:result});

        }
      })

    }

  }



}
