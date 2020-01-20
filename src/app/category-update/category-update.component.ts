import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../category.service";
import { Category } from "../category";
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {
  category: Category;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    const id = this.route.snapshot.paramMap.get('_id');
    console.log('Da goi ', id);
    this.categoryService.getCategoryById(id).subscribe((category: Category) => {
      console.log(category);
      this.category = Object.assign(category[0]);
    }, (error) => {
      console.log('ERROR ', error);
    })
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    console.log('called', this.category)
    this.categoryService.updateCategory(this.category).subscribe(
    )
  };
}
