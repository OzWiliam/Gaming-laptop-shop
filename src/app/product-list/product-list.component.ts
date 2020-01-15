import { Component, OnInit } from '@angular/core';
import { Product } from "../product";
import { ProductService } from "../product.service";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(
      (products) => {
        console.log('### Product ', products);
        this.products = products;
        this.productService.products = products;
    });
  }

  deleteProduct (product : Product) {
      this.productService.deleteProduct( product._id).subscribe(
        data =>  this.getProducts());
    }

}
