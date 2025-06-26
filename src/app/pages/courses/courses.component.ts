import { Component } from '@angular/core';
import { AllCoursesComponent } from '../../components/all-courses/all-courses.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [AllCoursesComponent],
  templateUrl: './courses.component.html',
})
export class CoursesComponent {}
