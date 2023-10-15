import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectInputComponent } from './components/select-input/select-input.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NotifierComponent } from './components/notifier/notifier.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectInputComponent,
    FormInputComponent,
    NotifierComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    TranslateModule,
    HttpClientModule,
    FormsModule,
    ToastrModule,

  ],
  exports: [
    BrowserAnimationsModule,
    HeaderComponent,
    SpinnerComponent,
    SelectInputComponent,
    FormInputComponent,
    BrowserModule,
    ReactiveFormsModule,
    TranslateModule,
    // HttpClientModule,
    FormsModule,
    NotifierComponent,
    // ToastrModule,

  ]
})
export class SharedModule { }
