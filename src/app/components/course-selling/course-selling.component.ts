import { Component } from '@angular/core';
import { HeadingComponent } from '../../shared/heading/heading.component';
import { NgFor } from '@angular/common';
import { StarIcon } from '../../icons/app-icon-star';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-course-selling',
  standalone: true,
  imports: [NgFor, RouterLink, HeadingComponent, StarIcon],
  templateUrl: './course-selling.component.html',
})
export class CourseSellingComponent {}
