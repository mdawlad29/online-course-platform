import { Component } from '@angular/core';
import { HeadingComponent } from '../../shared/heading/heading.component';
import { NgClass, NgFor } from '@angular/common';
import { BannerComponent } from '../../shared/Banner/banner.component';

@Component({
  selector: 'app-instructor',
  standalone: true,
  imports: [NgFor, NgClass, HeadingComponent],
  templateUrl: './instructor.component.html',
})
export class InstructorComponent {
  stepsData = [
    {
      title: 'Apply to become instructor',
    },
    {
      title: 'Build & edit your profile',
    },
    {
      title: 'Start teaching & earning',
    },
    {
      title: 'Create your new course',
    },
  ];
}

@Component({
  selector: 'app-top-instructor',
  standalone: true,
  imports: [NgFor, HeadingComponent],
  templateUrl: './top-instructor.component.html',
})
export class TopInstructorComponent {}

@Component({
  selector: 'app-all-instructor',
  imports: [NgFor, BannerComponent],
  templateUrl: './all-instructor.component.html',
})
export class AllInstructorComponent {}
