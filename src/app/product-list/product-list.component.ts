import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Product } from "../product";
import { ProductService } from "../product.service";
=======
>>>>>>> parent of d2af01f... Revert "add frame project"

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
<<<<<<< HEAD
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(
      (products) => {
        console.log('### Product ', products);
        this.products = products
      });

=======

  constructor() { }

  ngOnInit() {
>>>>>>> parent of d2af01f... Revert "add frame project"
  }

}
