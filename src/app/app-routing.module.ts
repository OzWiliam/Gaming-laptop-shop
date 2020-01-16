import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from "./product-list/product-list.component";
import { AppComponent } from "./app.component";
import { ProductInputComponent } from "./product-input/product-input.component";
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/productlist', pathMatch: 'full'},
  { path: 'productlist', component: ProductListComponent },
  { path: 'productinput', component: ProductInputComponent },
  { path: 'detail/:_id', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
