import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { CategoryComponent } from '../../components/category/category.component';
import { CourseSellingComponent } from '../../components/course-selling/course-selling.component';
import { RecentCourseComponent } from '../../components/recent-course/recent-course.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    CategoryComponent,
    CourseSellingComponent,
    RecentCourseComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
