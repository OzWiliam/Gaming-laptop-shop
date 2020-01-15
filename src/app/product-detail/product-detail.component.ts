import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from "../product.service";
import { Product } from "../product";
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  ngForm: FormGroup;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
  ) { }


  ngOnInit() {
    console.log(JSON.stringify(this.productService.products));
  }
  
  goBack(): void {
    this.location.back();
  }

  updateProduct(name: string, price: number, imgPath: string) {
    let products = {
      name: name.trim(),
      price: price,
      imgPath: imgPath.trim()
    };
    console.log(name, price, imgPath);
    if (!name || !price || !imgPath) {
      return console.log('underfined');
    }
    this.productService.updateProduct({ name, price, imgPath } as Product)
  };
}



