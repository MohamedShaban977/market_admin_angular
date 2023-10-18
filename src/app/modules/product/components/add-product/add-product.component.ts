import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  isLoading: boolean = false;
  categories: string[] = [];
  categoryId: string = '';
  fileImage!: File;

  imageURL!: string;

  formGroup!: FormGroup;
  constructor(private _serviceProduct: ProductService, private fb: FormBuilder,
    private toaster: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      // category: ['', Validators.required],
    });


    this.getCategories()
  }

  getControlByName(controlName: string) {
    return this.formGroup.get(controlName)
  }

  getCategories() {
    this.isLoading = false;

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
    console.log(this.formGroup.get('image')?.value);

    await this.addProduct();
    this.goToItems();

  }


  selectedCategory(event: any) {
    this.categoryId = event.target.value;
  }

  // Image Preview
  isLoadingg: boolean = true;
  showPreview(event: any) {

    this.isLoadingg = true
    this.fileImage = event.target?.files[0];
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.isLoadingg = false
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(this.fileImage)
  }


  addProduct() {
    this.isLoading = true;

    this._serviceProduct.addProduct({
      category: this.categoryId,
      description: this.getControlByName('description')?.value,
      image: this.fileImage.name,
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

