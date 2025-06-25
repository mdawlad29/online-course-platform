import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { CategoryComponent } from '../../components/category/category.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, CategoryComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
