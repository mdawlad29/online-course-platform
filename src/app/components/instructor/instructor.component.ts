import { Component } from '@angular/core';
import { HeadingComponent } from '../../shared/heading/heading.component';

@Component({
  selector: 'app-instructor',
  standalone: true,
  imports: [HeadingComponent],
  templateUrl: './instructor.component.html',
})
export class InstructorComponent {}
