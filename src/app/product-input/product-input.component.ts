import { Component, OnInit } from '@angular/core';
import { Product } from "../product";
import { ProductService } from "../product.service";

@Component({
  selector: 'app-product-input',
  templateUrl: './product-input.component.html',
  styleUrls: ['./product-input.component.css']
})
export class ProductInputComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() { }

  addProduct(name: string, price: number, imgPath: string, categoryId: string ): void {
    let products = {
      name: name.trim(),
      price: price,
      imgPath: imgPath.trim()
    };
    console.log(name, price, imgPath);
    if (!name || !price || !imgPath) {
      return console.log('underfined');
    }
    this.productService.addProduct({ name, price, imgPath, categoryId } as Product).subscribe(
      (product) => this.products.push(product)
    )
  };

}
