import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/add-cart-request';
import { AddProduct } from 'src/app/models/add-product-request';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  isLoading: boolean = false;
  categories: string[] = [];
  categoryId: string = '';
  product!: AddProduct;

  id!: number;


  formGroup!: FormGroup;
  constructor(private _serviceProduct: ProductService,
    private fb: FormBuilder,
    private toaster: ToastrService,
    private router: Router,
    private route: ActivatedRoute,) {
    this.id = +route.snapshot.paramMap.get('id')!;

  }

  ngOnInit(): void {

    this.initForm();
    this.getProduct();



    this.getCategories();
  }

  initForm() {
    this.formGroup = this.fb.group({
      title: ["", Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      category: ['', Validators.required],
    });
  }
  getProduct() {
    this._serviceProduct.getProductById(this.id).subscribe(data => {
      console.log(data)
      this.product = data;
      this.patchValue(data)

    });
  }

  patchValue(data: any) {
    this.formGroup.patchValue({
      title: data.title,
      price: data.price,
      category: data.category,
      description: data.description,
      image: data.image

    })


  }

  getControlByName(controlName: string) {
    return this.formGroup.get(controlName)
  }

  getCategories() {
    this.isLoading = true;

    this._serviceProduct.getAllCategories().subscribe(
      {
        next: (response) => {
          this.categories = response;
          console.info(this.categories)
          this.isLoading = false;
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
  }


  async submit() {
    console.log(this.formGroup.value);

    await this.addProduct();
    this.goToItems();

  }


  selectedCategory(event: any) {
    this.categoryId = event.target.value;
  }

  // Image Preview
  isLoadingg: boolean = false;
  // showPreview(event: any) {

  //   this.isLoadingg = true
  //   this.fileImage = event.target?.files[0];
  //    File Preview
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     this.isLoadingg = false
  //     this.imageURL = reader.result as string;
  //   }
  //   reader.readAsDataURL(this.fileImage)
  // }


  addProduct() {
    this.isLoading = true;

    this._serviceProduct.addProduct({
      category: this.categoryId,
      description: this.getControlByName('description')?.value,
      image: this.getControlByName('image')?.value,
      price: this.getControlByName('price')?.value,
      title: this.getControlByName('title')?.value,
    }).subscribe({
      next: (value) => {
        this.isLoading = false;
        console.log(value);
        this.toaster.success('data saved successfully', 'Added', {
          positionClass: 'toast-bottom-right'
        })

      }
    }
    );
  }

  goToItems() {
    this.router.navigate(['products'],);
  }
}

