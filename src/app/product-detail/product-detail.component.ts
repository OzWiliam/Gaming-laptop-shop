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

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
  ) {  // this.createForm();
    this.product = new Product();
    this.product.name = 'DELL';
    this.product.price = 123;
    this.product.imgPath = 'AXXX';
  }

  ngOnInit() {
    this.loadData();
  }

 
  loadData() {
    const id = this.route.snapshot.paramMap.get('_id');
    // console.log('Da goi ', id);
    this.productService.getProductById(id).subscribe((product: Product) => {
      // console.log(product);
      this.product = Object.assign(product[0]);
    }, (error) => {
      console.log('ERROR ', error);
    })
  }


  goBack(): void {
    this.location.back();
  }

//   save(name, price, imgPath ): void {
//     console.log('called', this.product)
//     this.productService.updateProduct(name, price, imgPath, this.product._id);
//   }
// }

save(): void {
  console.log('called', this.product)
  this.productService.updateProduct(this.product).subscribe( 
  )
}
}

 // createForm() {
  //   this.ngForm = this.fb.group({
  //       name: ['', Validators.required ],
  //       price: ['', Validators.required ],
  //       imgPath: ['', Validators.required ]
  //     });
  //   }






