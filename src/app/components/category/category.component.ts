import { Component } from '@angular/core';
import { HeadingComponent } from '../../shared/heading/heading.component';
import { NgClass, NgFor } from '@angular/common';
import { categoryData } from '../../data/category-data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [HeadingComponent, NgFor, NgClass],
  templateUrl: './category.component.html',
})
export class CategoryComponent {
  categoryData = categoryData;
}
