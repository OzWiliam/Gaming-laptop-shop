import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductInputComponent } from './product-input/product-input.component';
import { ProductComponent } from './product/product.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryInputComponent } from './category-input/category-input.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FooterComponent,
    ProductListComponent,
    ProductInputComponent,
    ProductComponent,
    ProductDetailComponent,
    CategoriesComponent,
    CategoryInputComponent,
    CategoryDetailComponent,
    CategoryUpdateComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpClient, 
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
