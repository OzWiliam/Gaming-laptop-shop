import { Component, OnInit } from '@angular/core';
import { Category } from "../category";
import { CategoryService } from "../category.service";

@Component({
  selector: 'app-category-input',
  templateUrl: './category-input.component.html',
  styleUrls: ['./category-input.component.css']
})
export class CategoryInputComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }

  addCategory(category_name: string) {
    let categories = {
      category_name: category_name.trim(),
    };
    console.log(category_name);
    if (!category_name) {
      return console.log('underfined');
    }
    this.categoryService.addCategory({ category_name } as Category).subscribe(
      (category) => this.categories.push(category)
    )
  };

}
