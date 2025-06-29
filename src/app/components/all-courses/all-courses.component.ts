import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { HeadingComponent } from '../../shared/heading/heading.component';
import { CardComponent } from '../../shared/Card/card.component';
import { courseData } from '../../data/course-data';
import { LinkTagComponent } from '../../shared/link-tag/link-tag.component';
import { StarIcon } from '../../icons/app-icon-star';
import { PlayIcon } from '../../icons/app-icon-paly';
import { DocumentIcon } from '../../icons/app-icon-document';
import { ReadingIcon } from '../../icons/app-icon-reading';
import { LiveIcon } from '../../icons/app-icon-live';
import { AppIconArrowDown } from '../../icons/app-icon-arrowDown';
import { AppIconArrowUp } from '../../icons/app-icon-arrowUp';
import { AccordionComponent } from '../../shared/accordion/accordion.component';
import { accordionItems } from '../../data/accordionItems';

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
  imports: [
    NgFor,
    NgIf,
    StarIcon,
    PlayIcon,
    DocumentIcon,
    ReadingIcon,
    LiveIcon,
    HeadingComponent,
    AccordionComponent,
  ],
  templateUrl: './course-details.component.html',
})
export class CourseDetailsComponent {
  courseData = courseData;
  accordionItems = accordionItems;
  activeIndex: number | null = null;

  toggleAccordion(index: number) {
    if (this.activeIndex === index) {
      this.activeIndex = null;
    } else {
      this.activeIndex = index;
    }
  }
}
