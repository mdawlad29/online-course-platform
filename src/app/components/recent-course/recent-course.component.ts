import { Component } from '@angular/core';
import { HeadingComponent } from '../../shared/heading/heading.component';
import { courseData } from '../../data/course-data';
import { CardComponent } from '../../shared/Card/card.component';
import { NgFor } from '@angular/common';
import { ButtonComponent } from '../../shared/button/button.component';
import { LinkTagComponent } from '../../shared/link-tag/link-tag.component';

@Component({
  selector: 'app-recent-course',
  standalone: true,
  imports: [NgFor, HeadingComponent, CardComponent, LinkTagComponent],
  templateUrl: './recent-course.component.html',
})
export class RecentCourseComponent {
  courseData = courseData;
}
