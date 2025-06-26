import { Component } from '@angular/core';
import { HeadingComponent } from '../../shared/heading/heading.component';
import { NgFor } from '@angular/common';
import { CardComponent } from '../../shared/Card/card.component';
import { courseData } from '../../data/course-data';

@Component({
  selector: 'app-course-selling',
  standalone: true,
  imports: [NgFor, HeadingComponent, CardComponent],
  templateUrl: './course-selling.component.html',
})
export class CourseSellingComponent {
  courseData = courseData;
}
