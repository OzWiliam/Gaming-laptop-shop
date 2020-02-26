import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from "./product-list/product-list.component";
import { AppComponent } from "./app.component";
import { ProductInputComponent } from "./product-input/product-input.component";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CategoryInputComponent } from "./category-input/category-input.component";
import { CategoryDetailComponent } from "./category-detail/category-detail.component";
import { CategoryUpdateComponent } from "./category-update/category-update.component";
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/productlist', pathMatch: 'full' },
  { path: 'productlist', component: ProductListComponent },
  { path: 'productinput', component: ProductInputComponent },
  { path: 'detail/:_id', component: ProductDetailComponent },
  { path: 'categoryinput', component: CategoryInputComponent },
  { path: 'detail-category/:_id', component: CategoryUpdateComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
