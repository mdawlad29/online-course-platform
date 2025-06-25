import { Component } from '@angular/core';
import { HeadingComponent } from '../../shared/heading/heading.component';
import { NgFor } from '@angular/common';
import { StarIcon } from '../../icons/app-icon-star';

@Component({
  selector: 'app-course-selling',
  standalone: true,
  imports: [NgFor, HeadingComponent, StarIcon],
  templateUrl: './course-selling.component.html',
})
export class CourseSellingComponent {}
