import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { CategoryComponent } from '../../components/category/category.component';
import {
  CourseSellingComponent,
  RecentCourseComponent,
} from '../../components/all-courses/all-courses.component';
import { InstructorComponent } from '../../components/instructor/instructor.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    CategoryComponent,
    CourseSellingComponent,
    RecentCourseComponent,
    InstructorComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
