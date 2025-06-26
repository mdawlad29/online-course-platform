import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { HeadingComponent } from '../../shared/heading/heading.component';
import { CardComponent } from '../../shared/Card/card.component';
import { courseData } from '../../data/course-data';
import { LinkTagComponent } from '../../shared/link-tag/link-tag.component';

@Component({
  selector: 'app-course-selling',
  standalone: true,
  imports: [NgFor, HeadingComponent, CardComponent],
  templateUrl: './course-selling.component.html',
})
export class CourseSellingComponent {
  courseData = courseData;
}

@Component({
  selector: 'app-recent-course',
  standalone: true,
  imports: [NgFor, HeadingComponent, CardComponent, LinkTagComponent],
  templateUrl: './recent-course.component.html',
})
export class RecentCourseComponent {
  courseData = courseData;
}

@Component({
  selector: 'app-all-courses',
  standalone: true,
  imports: [NgFor, HeadingComponent, CardComponent],
  templateUrl: './all-courses.component.html',
})
export class AllCoursesComponent {
  courseData = courseData;
}

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [],
  templateUrl: './course-details.component.html',
})
export class CourseDetailsComponent {
  courseData = courseData;
}
